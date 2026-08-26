/**
 * Page FAQs, written against the questions that actually reach the site from
 * Google Search ("singapore math คือ", "s.a.m singapore maths ค่าเรียน",
 * "singapore math สาขา", …).
 *
 * This is the single source for both the visible accordion and the FAQPage
 * structured data, so the two can never drift apart — which is the one thing
 * Google treats as a violation rather than a mistake.
 *
 * Answers only restate what the site already says. Where a fact is not public
 * (fees), the answer says where to get it instead of inventing a number.
 */
export interface FaqEntry {
  question: string;
  /** Answer as HTML; only inline markup, since it is rendered inside a <p>. */
  answer: string;
}

export const faqsByRoute: Record<string, FaqEntry[]> = {
  '/classes/sam/': [
    {
      question: 'Singapore Math คืออะไร?',
      answer: 'Singapore Math หรือคณิตศาสตร์แบบสิงคโปร์ คือระบบการเรียนการสอนคณิตศาสตร์ที่พัฒนาโดยกระทรวงศึกษาธิการสิงคโปร์ จุดต่างจากการเรียนเลขแบบเดิมคือเน้นให้เด็ก <strong>เข้าใจแนวคิดเบื้องหลัง</strong> มากกว่าการท่องจำสูตรหรือทำโจทย์ซ้ำๆ ทำให้เด็กนำวิธีคิดไปใช้กับโจทย์ที่ไม่เคยเจอมาก่อนได้ อ่านเพิ่มเติมได้ที่ <a href="/why-singapore-math/">Singapore Math คืออะไร</a>',
    },
    {
      question: 'S.A.M (Seriously Addictive Maths) ต่างจาก Singapore Math ทั่วไปอย่างไร?',
      answer: 'S.A.M ย่อมาจาก Seriously Addictive Maths เป็นหลักสูตร Singapore Math แท้จากประเทศสิงคโปร์ ที่ Mind Academy นำมาเปิดสอน จุดเด่นคือเด็กแต่ละคนได้แผนการเรียนที่จัดตามระดับความเข้าใจของตัวเอง ไม่ได้เรียนตามชั้นเรียนแบบเหมารวม และมีการประเมินผลต่อเนื่องเพื่อปรับระดับให้เหมาะกับเด็กเป็นรายคน',
    },
    {
      question: 'วิธีสอนแบบ CPA คืออะไร?',
      answer: 'CPA ย่อมาจาก Concrete–Pictorial–Abstract เป็นลำดับการสอนหลักของ Singapore Math เริ่มจาก <strong>Concrete</strong> ให้เด็กจับต้องสื่อของจริง ต่อด้วย <strong>Pictorial</strong> แปลงสิ่งที่เข้าใจเป็นภาพหรือ bar model แล้วจึงไปสู่ <strong>Abstract</strong> คือตัวเลขและสัญลักษณ์ ลำดับนี้ทำให้เด็กเห็นว่าตัวเลขที่เขียนหมายถึงอะไรจริงๆ ก่อนจะเริ่มคำนวณ',
    },
    {
      question: 'เลขสิงคโปร์เหมาะกับเด็กอายุเท่าไหร่?',
      answer: 'คลาส Singapore Math ที่ Mind Academy เปิดสอนสำหรับเด็กอายุ 4-12 ปี โดยเด็กจะได้ทำแบบทดสอบทักษะพื้นฐานทางคณิตศาสตร์ก่อนเริ่มเรียน เพื่อจัดระดับให้ตรงกับความเข้าใจจริงของเด็ก ไม่ใช่จัดตามอายุหรือชั้นเรียนที่โรงเรียน',
    },
    {
      question: 'Mind Academy เปิดสอน Singapore Math ที่สาขาไหนบ้าง?',
      answer: 'เปิดสอนครบทั้ง 4 สาขา ได้แก่ <a href="/contact/#branch-bangna">สาขาบางนา</a> (สมุทรปราการ), <a href="/contact/#branch-crystal-ramintra">สาขาเดอะคริสตัล รามอินทรา</a> (ลาดพร้าว กรุงเทพฯ), <a href="/contact/#branch-crystal-ratchaphruek">สาขาเดอะคริสตัล ราชพฤกษ์</a> (นนทบุรี) และ <a href="/contact/#branch-robinson-ratchaphruek">สาขาโรบินสัน ราชพฤกษ์</a> (ปากเกร็ด นนทบุรี) ดูแผนที่และเบอร์โทรของแต่ละสาขาได้ที่หน้า <a href="/contact/">ติดต่อเรา</a>',
    },
    {
      question: 'ค่าเรียน Singapore Math ที่ Mind Academy เท่าไหร่?',
      answer: 'ค่าเรียนขึ้นอยู่กับระดับของเด็กและจำนวนคาบเรียนที่เลือก และแต่ละสาขาอาจมีโปรโมชันต่างกัน จึงแนะนำให้สอบถามโดยตรงกับสาขาที่สะดวก ผ่านเบอร์โทรหรือ LINE ของสาขานั้นที่หน้า <a href="/contact/">ติดต่อเรา</a>',
    },
    {
      question: 'ทดลองเรียนก่อนได้ไหม?',
      answer: 'ได้ Mind Academy เปิดให้ลงทะเบียนทดลองเรียนฟรี พร้อมทดสอบทักษะพื้นฐานทางคณิตศาสตร์เพื่อดูว่าเด็กควรเริ่มที่ระดับไหน ลงทะเบียนได้ที่หน้า <a href="/contact/">ติดต่อเรา</a> หรือทักผ่าน LINE ของสาขาที่ใกล้บ้านที่สุด',
    },
    {
      question: 'ลูกเรียนคณิตศาสตร์ที่โรงเรียนอยู่แล้ว ยังต้องเรียน Singapore Math อีกไหม?',
      answer: 'Singapore Math ไม่ใช่การติวเนื้อหาตามโรงเรียน แต่เป็นการวางวิธีคิดและพื้นฐานความเข้าใจ เด็กที่คำนวณได้แต่ติดตรงโจทย์ปัญหา มักเป็นเพราะยังมองไม่ออกว่าโจทย์กำลังพูดถึงอะไร ซึ่งเป็นจุดที่วิธี CPA และ bar model เข้ามาช่วยโดยตรง',
    },
  ],
};
