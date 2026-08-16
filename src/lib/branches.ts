/**
 * The four Mind Academy branches, transcribed from the contact page.
 *
 * Addresses and phone numbers are copied verbatim from the visible copy on
 * /contact/, and each coordinate pair is read from that branch's own Google
 * Maps embed on the same page — so the structured data below never claims
 * anything the page does not already say.
 */
export interface Branch {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  telephone: string;
  latitude: number;
  longitude: number;
}

export const branches: Branch[] = [
  {
    name: 'Mind Academy สาขาบางนา',
    streetAddress: '289 ต.บางแก้ว อ.บางพลี',
    addressLocality: 'บางพลี',
    addressRegion: 'สมุทรปราการ',
    telephone: '+66980929555',
    latitude: 13.657919,
    longitude: 100.668263,
  },
  {
    name: 'Mind Academy สาขาเดอะคริสตัล รามอินทรา',
    streetAddress: 'The Crystal Park เลียบด่วนเอกมัย-รามอินทรา ถนนประดิษฐ์มนูธรรม',
    addressLocality: 'ลาดพร้าว',
    addressRegion: 'กรุงเทพมหานคร',
    telephone: '+66650516990',
    latitude: 13.811332,
    longitude: 100.616891,
  },
  {
    name: 'Mind Academy สาขาเดอะคริสตัล ราชพฤกษ์',
    streetAddress: 'เดอะคริสตัล ราชพฤกษ์ ชั้น 3',
    addressLocality: 'นนทบุรี',
    addressRegion: 'นนทบุรี',
    telephone: '+66617396555',
    latitude: 13.809826,
    longitude: 100.372166,
  },
  {
    name: 'Mind Academy สาขาโรบินสันราชพฤกษ์',
    streetAddress: 'ตำบลคลองข่อย ปากเกร็ด',
    addressLocality: 'ปากเกร็ด',
    addressRegion: 'นนทบุรี',
    telephone: '+66980591444',
    latitude: 13.935628,
    longitude: 100.458166,
  },
];
