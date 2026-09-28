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
      answer: 'เปิดสอนครบทั้ง 5 สาขา ได้แก่ <a href="/contact/#branch-bangna">สาขาบางนา</a> (สมุทรปราการ), <a href="/contact/#branch-crystal-ramintra">สาขาเดอะคริสตัล รามอินทรา</a> (ลาดพร้าว กรุงเทพฯ), <a href="/contact/#branch-crystal-ratchaphruek">สาขาเดอะคริสตัล ราชพฤกษ์</a> (นนทบุรี) <a href="/contact/#branch-robinson-ratchaphruek">สาขาโรบินสัน ราชพฤกษ์</a> (ปากเกร็ด นนทบุรี) และ <a href="/contact/#branch-happitat">สาขา Happitat Thailand</a> (บางนา สมุทรปราการ) ดูแผนที่และเบอร์โทรของแต่ละสาขาได้ที่หน้า <a href="/contact/">ติดต่อเรา</a>',
    },
    {
      question: 'ค่าเรียน Singapore Math ที่ Mind Academy เท่าไหร่?',
      answer: 'ค่าเรียนขึ้นอยู่กับ Level ของเด็กและจำนวนครั้งที่เลือก สอบถามรายละเอียดเพิ่มเติมพร้อมรับโปรโมชั่นพิเศษได้ที่สาขาที่สะดวก ผ่านเบอร์โทรหรือ LINE ของสาขานั้นที่หน้า <a href="/contact/">ติดต่อเรา</a>',
    },
    {
      question: 'เรียน S.A.M ครั้งละกี่นาที กลุ่มละกี่คน?',
      answer: 'เรียนครั้งละ 90 นาที กลุ่มละไม่เกิน 5 คน และจัดกลุ่มแยกตาม Level ไม่เรียนรวมระดับ เพื่อให้ครูดูแลเด็กได้ทั่วถึงและเด็กได้เรียนในระดับที่พอดีกับความสามารถของตัวเอง',
    },
    {
      question: 'ลูกไม่เก่งเลขเลย เริ่มเรียน Singapore Math ได้ไหม?',
      answer: 'ได้ ก่อนเริ่มเรียนเด็กทุกคนจะได้ทำแบบทดสอบระดับฟรี แล้วเริ่มที่ Level ที่พอดีกับพื้นฐานของตัวเอง ไม่ต้องตามให้ทันเพื่อนที่เก่งกว่า การสอนแบบ CPA เริ่มจากสิ่งที่จับต้องได้ก่อน จึงช่วยให้เด็กที่ยังไม่ชอบเลขค่อยๆ เข้าใจและมั่นใจขึ้น',
    },
    {
      question: 'ทดลองเรียนก่อนได้ไหม?',
      answer: 'ได้ Mind Academy เปิดให้ลงทะเบียนทดลองเรียนฟรี พร้อมทดสอบทักษะพื้นฐานทางคณิตศาสตร์เพื่อดูว่าเด็กควรเริ่มที่ระดับไหน ลงทะเบียนได้ที่หน้า <a href="/contact/">ติดต่อเรา</a> หรือทักผ่าน LINE ของสาขาที่ใกล้บ้านที่สุด',
    },
    {
      question: 'ลูกเรียนคณิตศาสตร์ที่โรงเรียนอยู่แล้ว ยังต้องเรียน Singapore Math อีกไหม?',
      answer: 'Singapore Math ไม่ใช่การติวเนื้อหาตามโรงเรียน แต่เป็นการวางวิธีคิดและพื้นฐานความเข้าใจ เด็กที่คำนวณได้แต่ติดตรงโจทย์ปัญหา มักเป็นเพราะยังมองไม่ออกว่าโจทย์กำลังพูดถึงอะไร ซึ่งเป็นจุดที่วิธี CPA และ bar model เข้ามาช่วยโดยตรง',
    },
  ],  '/executive-functions/': [
    {
      question: 'EF คืออะไร?',
      answer: 'EF (Executive Functions) คือทักษะสมองส่วนหน้าที่ใช้กำกับความคิด อารมณ์ และการกระทำของตัวเองเพื่อไปให้ถึงเป้าหมาย เช่น การจดจ่อ การยั้งใจ การวางแผน และการปรับตัวเมื่อสถานการณ์เปลี่ยน',
    },
    {
      question: 'EF 9 ด้าน มีอะไรบ้าง?',
      answer: 'Working Memory (ความจำเพื่อใช้งาน), Inhibitory Control (การยั้งคิดไตร่ตรอง), Shift (การยืดหยุ่นความคิด), Focus (การจดจ่อใส่ใจ), Emotional Control (การควบคุมอารมณ์), Planning &amp; Organizing (การวางแผนและจัดระบบ), Self-Monitoring (การประเมินตนเอง), Initiating (การริเริ่มลงมือทำ) และ Goal-Directed Persistence (ความมุ่งมั่นสู่เป้าหมาย)',
    },
    {
      question: 'EF ปฐมวัยคืออะไร และควรเริ่มฝึกตอนกี่ขวบ?',
      answer: 'EF ปฐมวัยหมายถึงการฝึกทักษะ EF ในเด็กเล็ก ซึ่งเป็นช่วงที่สมองส่วนหน้าพัฒนาเร็วที่สุด เริ่มฝึกได้ตั้งแต่ขวบปีแรกๆ ผ่านการเล่นและกิจวัตรประจำวัน และช่วง 3-6 ปีถือเป็นช่วงเวลาทองของการพัฒนา EF',
    },
    {
      question: 'EF กับ IQ ต่างกันอย่างไร?',
      answer: 'IQ วัดความสามารถทางสติปัญญา เช่น การใช้เหตุผลและความรู้ ส่วน EF คือความสามารถในการนำสติปัญญานั้นมาใช้ให้เกิดผล เช่น การจดจ่อ การวางแผน และการควบคุมตัวเอง เด็กที่ IQ สูงแต่ EF ยังไม่แข็งแรงอาจเรียนไม่ได้เต็มศักยภาพ และ EF เป็นทักษะที่ฝึกให้ดีขึ้นได้',
    },
  ],
};
