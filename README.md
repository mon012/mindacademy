# Mind Academy — Astro

โปรเจกต์ Astro แบบ static ที่ migrate จาก WordPress export แล้ว พร้อม build และ deploy บน Cloudflare Pages

## เริ่มใช้งาน

```sh
npm ci
npm run dev
```

## ตรวจสอบก่อน commit

```sh
npm run build
npm run audit:content
npm audit --omit=dev
```

`audit:content` จะ fail ถ้าเนื้อหา ลิงก์ embed หรือ asset หายไปจากที่ migrate มา และจะ fail ทั้งกรณี asset ที่อ้างถึงแต่ไม่มีไฟล์ และไฟล์ที่มีอยู่แต่ไม่มีใครใช้

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 ขึ้นไป

## โครงสร้าง

- `src/content/pages/**/index.json` — เนื้อหาทุกหน้า ตรวจ schema ด้วย Zod ที่ `src/content.config.ts` ถ้า JSON ผิดรูปแบบจะ build ไม่ผ่าน
- `src/pages/[...slug].astro` — สร้างทุกหน้าจาก content collection แล้วประมวลผล HTML ตอน build (srcset, defer embed, JSON-LD, breadcrumb)
- `src/lib/images.ts` — สแกน `public/assets` ตอน build อ่านขนาดจริงจาก WebP header เพื่อสร้าง srcset และอ่าน `_redirects` เพื่อชี้ลิงก์ภายในไปยังปลายทางจริง
- `src/lib/branches.ts` — ข้อมูล 4 สาขาสำหรับ LocalBusiness schema ถอดมาจากหน้า `/contact/`
- `public/_redirects` — **แหล่งข้อมูลเดียว**ของ legacy URL ห้ามสร้างหน้าที่ path ทับกับ rule ในไฟล์นี้ เพราะ static file จะบัง 301

## สถานะปัจจุบัน

- 26 หน้า + 404, sitemap 25 URL (`/tk/` เป็น noindex โดยตั้งใจ)
- 28 redirect rules ครอบคลุม URL ภาษาไทยทั้งแบบดิบและ percent-encoded
- 132 local assets (WebP ทั้งหมด, 8.3 MB) ถูกใช้งานจริงทุกไฟล์
- 86 media embeds — 80 ตัวโหลดแบบ deferred เมื่อเลื่อนถึง
- 173 `<img>` มี alt ครบทุกตัว
- CSS ประมาณ 11 KB gzipped

`reports/migration.json` เก็บตัวเลขจาก export ต้นทางไว้ให้ `audit:content` ใช้เทียบ
