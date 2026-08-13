# Mind Academy — Astro

โปรเจกต์ Astro แบบ static ที่ migrate จาก WordPress export แล้ว พร้อม build และ deploy บน Cloudflare Pages โดยไม่ต้องใช้โฟลเดอร์ `old/` ในขั้นตอน deploy

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

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 ขึ้นไป

## Migration coverage

- 53 static routes รวม URL ภาษาไทย, archive, pagination และ redirect
- 171 local assets ที่ถูกใช้งานจริง
- 44 outbound links ในเนื้อหาต้นฉบับ
- 113 video/media embeds
- ไม่พบ PDF reference ใน export ต้นฉบับ

รายละเอียดต้นทางสำหรับตรวจความครบถ้วนอยู่ใน `reports/migration.json`
