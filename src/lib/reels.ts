/**
 * Facebook reel strips, keyed by the page they belong to.
 *
 * Only the reel id is stored — the embed URL is built from it — so adding a clip
 * is a one-line change and every strip stays on the same markup and lazy-loading
 * path as the homepage one.
 */
export interface ReelStrip {
  title: string;
  blurb: string;
  /** Trailing id segment of https://www.facebook.com/reel/<id>/ */
  ids: string[];
}

export const reelsByRoute: Record<string, ReelStrip> = {
  '/': {
    title: 'ตามดูความสนุกในห้องเรียน',
    blurb: 'ช่วงเวลาจริงจากคลาสที่เด็กๆ ได้คิด ลงมือทำ และเรียนรู้อย่างเป็นธรรมชาติ',
    // Reel 1517295700440541 is deliberately not listed: Facebook renders an
    // Unavailable card for it. Re-add it once the reel is public and embeddable.
    ids: [
      '1596914968500637', '27940496045566936',
      '1777094457068710', '1674780813820761', '2066312910624618', '1170410918196200',
    ],
  },
  '/classes/sam/': {
    title: 'บรรยากาศคลาส Singapore Math',
    blurb: 'คลิปสั้นจากห้องเรียนจริง ตั้งแต่การใช้สื่อจับต้องได้ ไปจนถึงการวาด bar model แก้โจทย์',
    // Reel 1440390500441560 is deliberately not listed: Facebook refuses to embed it
    // ("this video can't be embedded because it may contain music content owned by
    // someone else") and renders an Unavailable card. Re-add it once its audio is
    // cleared on Facebook.
    ids: [
      '1036854278698232', '25935565546142586', '1706793293309421',
      '1191819022615350', '577193704620663',
    ],
  },
};

/**
 * The strip is emitted as an HTML string because on class pages it is spliced
 * into the middle of the page body, which is itself rendered from HTML.
 */
export const reelStripHtml = (strip: ReelStrip, { inline = false } = {}) => {
  const clips = strip.ids.map((id, index) => {
    const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      `https://www.facebook.com/reel/${id}/`,
    )}&show_text=false&autoplay=false`;
    return `<article class="classroom-reel"><div class="classroom-reel__frame">`
      + `<iframe data-src="${embedUrl}" title="${strip.title} คลิปที่ ${index + 1}" loading="lazy"`
      + ` allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
      + `</div></article>`;
  }).join('');

  return `<section class="classroom-reels${inline ? ' classroom-reels--inline' : ''}" id="classroom-reels" aria-labelledby="classroom-reels-title">`
    + `<div class="classroom-reels__inner">`
    + `<div class="classroom-reels__heading"><h2 id="classroom-reels-title">${strip.title}</h2><p>${strip.blurb}</p></div>`
    + `<div class="classroom-reels__track" tabindex="0" role="group" aria-label="${strip.title} เลื่อนซ้ายขวาเพื่อดูเพิ่มเติม">${clips}</div>`
    + `</div></section>`;
};
