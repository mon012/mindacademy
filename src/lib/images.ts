import { readdirSync, openSync, readSync, closeSync, readFileSync } from 'node:fs';
import path from 'node:path';

// This module is bundled before it runs, so import.meta.url would point at the
// build output. Astro always builds from the project root, so resolve from cwd.
const publicDir = path.join(process.cwd(), 'public');

/**
 * Reads the intrinsic size straight out of a WebP header so the build stays
 * dependency-free. Covers the three container variants: VP8 (lossy),
 * VP8L (lossless) and VP8X (extended).
 */
function webpSize(file: string): { width: number; height: number } | null {
  const header = Buffer.alloc(32);
  let fd: number;
  try {
    fd = openSync(file, 'r');
  } catch {
    return null;
  }
  try {
    readSync(fd, header, 0, 32, 0);
  } finally {
    closeSync(fd);
  }
  if (header.toString('ascii', 0, 4) !== 'RIFF' || header.toString('ascii', 8, 12) !== 'WEBP') return null;

  switch (header.toString('ascii', 12, 16)) {
    case 'VP8 ':
      return {
        width: header.readUInt16LE(26) & 0x3fff,
        height: header.readUInt16LE(28) & 0x3fff,
      };
    case 'VP8L': {
      const bits = header.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    case 'VP8X':
      return {
        width: (header.readUIntLE(24, 3) & 0xffffff) + 1,
        height: (header.readUIntLE(27, 3) & 0xffffff) + 1,
      };
    default:
      return null;
  }
}

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

export interface ImageCandidate {
  url: string;
  width: number;
  height: number;
}

/**
 * WordPress emits `name-800x600.webp` beside `name.webp`. Grouping on the base
 * name recovers the full set of pre-generated sizes for an image, so we can
 * build a srcset without producing a single new file.
 */
const variantSuffix = /-(\d+)x(\d+)$/;

const byBaseName = new Map<string, ImageCandidate[]>();
const byUrl = new Map<string, ImageCandidate>();
const existingAssets = new Set<string>();

for (const file of walk(path.join(publicDir, 'assets'))) {
  existingAssets.add(`/${path.relative(publicDir, file).split(path.sep).join('/')}`);
  if (!file.endsWith('.webp')) continue;
  const size = webpSize(file);
  if (!size) continue;
  const url = `/${path.relative(publicDir, file).split(path.sep).join('/')}`;
  const candidate: ImageCandidate = { url, ...size };
  byUrl.set(url, candidate);

  const parsed = path.parse(url);
  const base = `${parsed.dir}/${parsed.name.replace(variantSuffix, '')}`;
  const group = byBaseName.get(base);
  if (group) group.push(candidate);
  else byBaseName.set(base, [candidate]);
}

/**
 * All sizes available for an image, widest last. Variants whose aspect ratio
 * differs from the requested file are dropped: WordPress also generates hard
 * crops (150x150 thumbnails of a 16:9 photo) and swapping one of those in
 * would visibly change the picture.
 */
export function candidatesFor(url: string): ImageCandidate[] {
  const self = byUrl.get(url);
  if (!self) return [];
  const parsed = path.parse(url);
  const group = byBaseName.get(`${parsed.dir}/${parsed.name.replace(variantSuffix, '')}`) ?? [];
  const ratio = self.width / self.height;
  const usable = group.filter((c) => Math.abs(c.width / c.height - ratio) / ratio < 0.02);
  const widths = new Map<number, ImageCandidate>();
  for (const candidate of usable) {
    if (candidate.width > self.width) continue; // never upscale past the source
    const existing = widths.get(candidate.width);
    if (!existing) widths.set(candidate.width, candidate);
  }
  return [...widths.values()].sort((a, b) => a.width - b.width);
}

export function intrinsicSize(url: string): ImageCandidate | undefined {
  return byUrl.get(url);
}

/** Legacy JSON-LD still points at images that were never migrated; check before using one. */
export function assetExists(url: string): boolean {
  return existingAssets.has(url);
}

/**
 * public/_redirects is the single source of truth for legacy URLs. Reading it
 * here lets the build point internal links straight at the final destination,
 * so no visitor or crawler pays for a redirect hop we already know about.
 */
export const redirectMap: ReadonlyMap<string, string> = (() => {
  const map = new Map<string, string>();
  let raw = '';
  try {
    raw = readFileSync(path.join(publicDir, '_redirects'), 'utf8');
  } catch {
    return map;
  }
  for (const line of raw.split('\n')) {
    const [from, to] = line.trim().split(/\s+/);
    if (from?.startsWith('/') && to?.startsWith('/')) map.set(from, to);
  }
  return map;
})();

/** Follows a chain of redirects to its final destination. */
export function finalDestination(url: string): string {
  let current = url;
  for (let hops = 0; hops < 5; hops++) {
    const next = redirectMap.get(current);
    if (!next || next === current) break;
    current = next;
  }
  return current;
}
