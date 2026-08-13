import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const report = JSON.parse(await readFile(path.join(root, 'reports/migration.json'), 'utf8'));
const failures = [];
let checked = 0;
const contentFiles = async (dir) => (await readdir(dir, { withFileTypes: true })).reduce(async (promise, entry) => {
  const list = await promise;
  const target = path.join(dir, entry.name);
  return entry.isDirectory() ? list.concat(await contentFiles(target)) : list.concat(target);
}, Promise.resolve([]));
const currentRoutes = new Set();
for (const file of (await contentFiles(path.join(root, 'src/content/pages'))).filter((file) => file.endsWith('.json'))) {
  currentRoutes.add(JSON.parse(await readFile(file, 'utf8')).route);
}
const currentPages = report.pages.filter((page) => currentRoutes.has(page.route));

for (const page of currentPages) {
  const built = path.join(root, 'dist', page.route === '/' ? '' : page.route.slice(1), 'index.html');
  let html;
  try { html = await readFile(built, 'utf8'); } catch { failures.push(`${page.route}: missing built page`); continue; }
  checked++;
  const visibleCharacters = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().length;
  if (!page.redirect && visibleCharacters < page.characters) failures.push(`${page.route}: built text is shorter than migrated source (${visibleCharacters} < ${page.characters})`);
  if (page.redirect && !html.includes(page.redirect)) failures.push(`${page.route}: redirect target missing`);
  const builtCounts = {
    outboundLinks: [...html.matchAll(/href="(?:https?:)?\/\/[^"#]+/gi)].length,
    embeds: [...html.matchAll(/<(?:iframe|video|embed|object)\b/gi)].length,
    pdfReferences: [...html.matchAll(/(?:href|src)="[^"]+\.pdf(?:[?#][^"]*)?"/gi)].length,
  };
  for (const key of Object.keys(builtCounts)) {
    if (builtCounts[key] < page[key]) failures.push(`${page.route}: ${key} dropped (${builtCounts[key]} < ${page[key]})`);
  }
}

const assetFiles = async (dir) => (await readdir(dir, { withFileTypes: true })).reduce(async (promise, entry) => {
  const list = await promise;
  const target = path.join(dir, entry.name);
  return entry.isDirectory() ? list.concat(await assetFiles(target)) : list.concat(target);
}, Promise.resolve([]));
const assets = await assetFiles(path.join(root, 'public/assets'));
const assetUrls = new Set(assets.map((file) => `/${path.relative(path.join(root, 'public'), file)}`));
const referencedAssets = new Set();

for (const page of currentPages) {
  const built = path.join(root, 'dist', page.route === '/' ? '' : page.route.slice(1), 'index.html');
  let html;
  try { html = await readFile(built, 'utf8'); } catch { continue; }
  for (const match of html.matchAll(/\/assets\/[^"'\s)<>,]+/g)) {
    referencedAssets.add(decodeURI(match[0].replace(/[?#].*$/, '')));
  }
}

const builtAssetDir = path.join(root, 'dist', '_astro');
try {
  for (const file of await assetFiles(builtAssetDir)) {
    if (!file.endsWith('.css')) continue;
    const css = await readFile(file, 'utf8');
    for (const match of css.matchAll(/\/assets\/[^"'\s)<>,]+/g)) {
      referencedAssets.add(decodeURI(match[0].replace(/[?#].*$/, '')));
    }
  }
} catch {}

for (const asset of referencedAssets) {
  if (!assetUrls.has(asset)) failures.push(`missing local asset: ${asset}`);
}

for (const asset of assetUrls) {
  if (!referencedAssets.has(asset)) failures.push(`unused local asset: ${asset}`);
}

console.log(JSON.stringify({
  checkedRoutes: checked,
  copiedAssets: assets.length,
  referencedAssets: referencedAssets.size,
  failures,
}, null, 2));
if (failures.length) process.exitCode = 1;
