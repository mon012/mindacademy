/**
 * Which class an article should hand the reader to.
 *
 * Every article on the site used to link only sideways, to other articles, so
 * the class pages — the ones that have to rank and convert — received almost no
 * internal links. This map closes that loop from a single place.
 *
 * Singapore Math is the year-round flagship course, so it is the destination
 * wherever an article is not specifically about another subject.
 */
export interface RelatedClass {
  href: string;
  title: string;
  blurb: string;
}

const SAM: RelatedClass = {
  href: '/classes/sam/',
  title: 'Singapore Math (S.A.M)',
  blurb: 'หลักสูตรหลักที่ Mind Academy เปิดสอน คณิตศาสตร์แบบสิงคโปร์ลิขสิทธิ์แท้ สอนด้วยวิธี CPA เน้นให้เด็กเข้าใจแนวคิดจริง ไม่ใช่ท่องจำสูตร สำหรับเด็ก 4-12 ปี',
};

const CODING: RelatedClass = {
  href: '/classes/coding/',
  title: 'Coding และ AI สำหรับเด็ก',
  blurb: 'เรียนตั้งแต่ Unplugged, Scratch, Python จนถึงการใช้ AI อย่างรู้เท่าทัน ฝึกคิดเป็นขั้นตอนและสร้างผลงานของตัวเองได้จริง',
};

const ENGLISH: RelatedClass = {
  href: '/classes/eng/',
  title: 'ภาษาอังกฤษ 4 ทักษะ',
  blurb: 'เริ่มจาก Phonics สู่การฟัง พูด อ่าน เขียนอย่างเป็นระบบ ด้วยกิจกรรมที่เหมาะกับวัยของเด็ก',
};

export const relatedClassByRoute: Record<string, RelatedClass> = {
  '/why-singapore-math/': SAM,
  '/learn-singapore-math/': SAM,
  '/singapore-learn-math/': SAM,
  '/early-math/': SAM,
  '/5-maths-secrets/': SAM,
  '/quant-for-kids/': SAM,
  '/kids-millionaire/': SAM,
  '/executive-functions/': SAM,
  '/ikigai-for-kids/': SAM,
  '/positive-talk-with-kids/': SAM,
  '/10-ted-for-parent/': SAM,
  '/ai-literacy-for-kids/': CODING,
  '/why-kids-coding/': CODING,
  '/learn-english-kids/': ENGLISH,
};
