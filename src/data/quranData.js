// Complete Quran data: Surah names, starting pages, ayah counts, and Juz starting pages
// Based on the Madinah Mushaf (King Fahd Complex edition, 604 pages)

export const SURAHS = [
  { id: 1, name: "الفاتحة", startPage: 1, ayahCount: 7 },
  { id: 2, name: "البقرة", startPage: 2, ayahCount: 286 },
  { id: 3, name: "آل عمران", startPage: 50, ayahCount: 200 },
  { id: 4, name: "النساء", startPage: 77, ayahCount: 176 },
  { id: 5, name: "المائدة", startPage: 106, ayahCount: 120 },
  { id: 6, name: "الأنعام", startPage: 128, ayahCount: 165 },
  { id: 7, name: "الأعراف", startPage: 151, ayahCount: 206 },
  { id: 8, name: "الأنفال", startPage: 177, ayahCount: 75 },
  { id: 9, name: "التوبة", startPage: 187, ayahCount: 129 },
  { id: 10, name: "يونس", startPage: 208, ayahCount: 109 },
  { id: 11, name: "هود", startPage: 221, ayahCount: 123 },
  { id: 12, name: "يوسف", startPage: 235, ayahCount: 111 },
  { id: 13, name: "الرعد", startPage: 249, ayahCount: 43 },
  { id: 14, name: "إبراهيم", startPage: 255, ayahCount: 52 },
  { id: 15, name: "الحجر", startPage: 262, ayahCount: 99 },
  { id: 16, name: "النحل", startPage: 267, ayahCount: 128 },
  { id: 17, name: "الإسراء", startPage: 282, ayahCount: 111 },
  { id: 18, name: "الكهف", startPage: 293, ayahCount: 110 },
  { id: 19, name: "مريم", startPage: 305, ayahCount: 98 },
  { id: 20, name: "طه", startPage: 312, ayahCount: 135 },
  { id: 21, name: "الأنبياء", startPage: 322, ayahCount: 112 },
  { id: 22, name: "الحج", startPage: 332, ayahCount: 78 },
  { id: 23, name: "المؤمنون", startPage: 342, ayahCount: 118 },
  { id: 24, name: "النور", startPage: 350, ayahCount: 64 },
  { id: 25, name: "الفرقان", startPage: 359, ayahCount: 77 },
  { id: 26, name: "الشعراء", startPage: 367, ayahCount: 227 },
  { id: 27, name: "النمل", startPage: 377, ayahCount: 93 },
  { id: 28, name: "القصص", startPage: 385, ayahCount: 88 },
  { id: 29, name: "العنكبوت", startPage: 396, ayahCount: 69 },
  { id: 30, name: "الروم", startPage: 404, ayahCount: 60 },
  { id: 31, name: "لقمان", startPage: 411, ayahCount: 34 },
  { id: 32, name: "السجدة", startPage: 415, ayahCount: 30 },
  { id: 33, name: "الأحزاب", startPage: 418, ayahCount: 73 },
  { id: 34, name: "سبأ", startPage: 428, ayahCount: 54 },
  { id: 35, name: "فاطر", startPage: 434, ayahCount: 45 },
  { id: 36, name: "يس", startPage: 440, ayahCount: 83 },
  { id: 37, name: "الصافات", startPage: 446, ayahCount: 182 },
  { id: 38, name: "ص", startPage: 453, ayahCount: 88 },
  { id: 39, name: "الزمر", startPage: 458, ayahCount: 75 },
  { id: 40, name: "غافر", startPage: 467, ayahCount: 85 },
  { id: 41, name: "فصلت", startPage: 477, ayahCount: 54 },
  { id: 42, name: "الشورى", startPage: 483, ayahCount: 53 },
  { id: 43, name: "الزخرف", startPage: 489, ayahCount: 89 },
  { id: 44, name: "الدخان", startPage: 496, ayahCount: 59 },
  { id: 45, name: "الجاثية", startPage: 499, ayahCount: 37 },
  { id: 46, name: "الأحقاف", startPage: 502, ayahCount: 35 },
  { id: 47, name: "محمد", startPage: 507, ayahCount: 38 },
  { id: 48, name: "الفتح", startPage: 511, ayahCount: 29 },
  { id: 49, name: "الحجرات", startPage: 515, ayahCount: 18 },
  { id: 50, name: "ق", startPage: 518, ayahCount: 45 },
  { id: 51, name: "الذاريات", startPage: 520, ayahCount: 60 },
  { id: 52, name: "الطور", startPage: 523, ayahCount: 49 },
  { id: 53, name: "النجم", startPage: 526, ayahCount: 62 },
  { id: 54, name: "القمر", startPage: 528, ayahCount: 55 },
  { id: 55, name: "الرحمن", startPage: 531, ayahCount: 78 },
  { id: 56, name: "الواقعة", startPage: 534, ayahCount: 96 },
  { id: 57, name: "الحديد", startPage: 537, ayahCount: 29 },
  { id: 58, name: "المجادلة", startPage: 542, ayahCount: 22 },
  { id: 59, name: "الحشر", startPage: 545, ayahCount: 24 },
  { id: 60, name: "الممتحنة", startPage: 549, ayahCount: 13 },
  { id: 61, name: "الصف", startPage: 551, ayahCount: 14 },
  { id: 62, name: "الجمعة", startPage: 553, ayahCount: 11 },
  { id: 63, name: "المنافقون", startPage: 554, ayahCount: 11 },
  { id: 64, name: "التغابن", startPage: 556, ayahCount: 18 },
  { id: 65, name: "الطلاق", startPage: 558, ayahCount: 12 },
  { id: 66, name: "التحريم", startPage: 560, ayahCount: 12 },
  { id: 67, name: "الملك", startPage: 562, ayahCount: 30 },
  { id: 68, name: "القلم", startPage: 564, ayahCount: 52 },
  { id: 69, name: "الحاقة", startPage: 566, ayahCount: 52 },
  { id: 70, name: "المعارج", startPage: 568, ayahCount: 44 },
  { id: 71, name: "نوح", startPage: 570, ayahCount: 28 },
  { id: 72, name: "الجن", startPage: 572, ayahCount: 28 },
  { id: 73, name: "المزمل", startPage: 574, ayahCount: 20 },
  { id: 74, name: "المدثر", startPage: 575, ayahCount: 56 },
  { id: 75, name: "القيامة", startPage: 577, ayahCount: 40 },
  { id: 76, name: "الإنسان", startPage: 578, ayahCount: 31 },
  { id: 77, name: "المرسلات", startPage: 580, ayahCount: 50 },
  { id: 78, name: "النبأ", startPage: 582, ayahCount: 40 },
  { id: 79, name: "النازعات", startPage: 583, ayahCount: 46 },
  { id: 80, name: "عبس", startPage: 585, ayahCount: 42 },
  { id: 81, name: "التكوير", startPage: 586, ayahCount: 29 },
  { id: 82, name: "الانفطار", startPage: 587, ayahCount: 19 },
  { id: 83, name: "المطففين", startPage: 587, ayahCount: 36 },
  { id: 84, name: "الانشقاق", startPage: 589, ayahCount: 25 },
  { id: 85, name: "البروج", startPage: 590, ayahCount: 22 },
  { id: 86, name: "الطارق", startPage: 591, ayahCount: 17 },
  { id: 87, name: "الأعلى", startPage: 591, ayahCount: 19 },
  { id: 88, name: "الغاشية", startPage: 592, ayahCount: 26 },
  { id: 89, name: "الفجر", startPage: 593, ayahCount: 30 },
  { id: 90, name: "البلد", startPage: 594, ayahCount: 20 },
  { id: 91, name: "الشمس", startPage: 595, ayahCount: 15 },
  { id: 92, name: "الليل", startPage: 595, ayahCount: 21 },
  { id: 93, name: "الضحى", startPage: 596, ayahCount: 11 },
  { id: 94, name: "الشرح", startPage: 596, ayahCount: 8 },
  { id: 95, name: "التين", startPage: 597, ayahCount: 8 },
  { id: 96, name: "العلق", startPage: 597, ayahCount: 19 },
  { id: 97, name: "القدر", startPage: 598, ayahCount: 5 },
  { id: 98, name: "البينة", startPage: 598, ayahCount: 8 },
  { id: 99, name: "الزلزلة", startPage: 599, ayahCount: 8 },
  { id: 100, name: "العاديات", startPage: 599, ayahCount: 11 },
  { id: 101, name: "القارعة", startPage: 600, ayahCount: 11 },
  { id: 102, name: "التكاثر", startPage: 600, ayahCount: 8 },
  { id: 103, name: "العصر", startPage: 601, ayahCount: 3 },
  { id: 104, name: "الهمزة", startPage: 601, ayahCount: 9 },
  { id: 105, name: "الفيل", startPage: 601, ayahCount: 5 },
  { id: 106, name: "قريش", startPage: 602, ayahCount: 4 },
  { id: 107, name: "الماعون", startPage: 602, ayahCount: 7 },
  { id: 108, name: "الكوثر", startPage: 602, ayahCount: 3 },
  { id: 109, name: "الكافرون", startPage: 603, ayahCount: 6 },
  { id: 110, name: "النصر", startPage: 603, ayahCount: 3 },
  { id: 111, name: "المسد", startPage: 603, ayahCount: 5 },
  { id: 112, name: "الإخلاص", startPage: 604, ayahCount: 4 },
  { id: 113, name: "الفلق", startPage: 604, ayahCount: 5 },
  { id: 114, name: "الناس", startPage: 604, ayahCount: 6 },
];

// Juz (parts) starting pages based on the Madinah Mushaf
export const JUZ_DATA = [
  { id: 1, startPage: 1 },
  { id: 2, startPage: 22 },
  { id: 3, startPage: 42 },
  { id: 4, startPage: 62 },
  { id: 5, startPage: 82 },
  { id: 6, startPage: 102 },
  { id: 7, startPage: 121 },
  { id: 8, startPage: 142 },
  { id: 9, startPage: 162 },
  { id: 10, startPage: 182 },
  { id: 11, startPage: 201 },
  { id: 12, startPage: 222 },
  { id: 13, startPage: 242 },
  { id: 14, startPage: 262 },
  { id: 15, startPage: 282 },
  { id: 16, startPage: 302 },
  { id: 17, startPage: 322 },
  { id: 18, startPage: 342 },
  { id: 19, startPage: 362 },
  { id: 20, startPage: 382 },
  { id: 21, startPage: 402 },
  { id: 22, startPage: 422 },
  { id: 23, startPage: 442 },
  { id: 24, startPage: 462 },
  { id: 25, startPage: 482 },
  { id: 26, startPage: 502 },
  { id: 27, startPage: 522 },
  { id: 28, startPage: 542 },
  { id: 29, startPage: 562 },
  { id: 30, startPage: 582 },
];

// Arabic ordinal names for Juz numbers
const JUZ_NAMES = [
  "الأول", "الثاني", "الثالث", "الرابع", "الخامس",
  "السادس", "السابع", "الثامن", "التاسع", "العاشر",
  "الحادي عشر", "الثاني عشر", "الثالث عشر", "الرابع عشر", "الخامس عشر",
  "السادس عشر", "السابع عشر", "الثامن عشر", "التاسع عشر", "العشرون",
  "الحادي والعشرون", "الثاني والعشرون", "الثالث والعشرون", "الرابع والعشرون", "الخامس والعشرون",
  "السادس والعشرون", "السابع والعشرون", "الثامن والعشرون", "التاسع والعشرون", "الثلاثون",
];

import { PAGE_LAST_AYAH } from './pageAyahMap';

/**
 * Given a page number (1-604), returns info about the current position in the Quran.
 * Uses accurate page-to-ayah data from the Madinah Mushaf.
 * @param {number} page - The current page (1-indexed)
 * @returns {{ surahName: string, surahId: number, juzNumber: number, juzName: string, ayah: number }}
 */
export function getQuranPosition(page) {
  // Clamp page to valid range
  const p = Math.max(1, Math.min(604, page));

  // Get exact surah and last ayah from the accurate page mapping
  const [surahNum, lastAyah] = PAGE_LAST_AYAH[p - 1]; // 0-indexed array

  // Find the surah object by surah number
  const surah = SURAHS.find(s => s.id === surahNum) || SURAHS[0];

  // Find the current juz (last juz whose startPage <= p)
  let juzIndex = 0;
  for (let i = JUZ_DATA.length - 1; i >= 0; i--) {
    if (JUZ_DATA[i].startPage <= p) {
      juzIndex = i;
      break;
    }
  }
  const juz = JUZ_DATA[juzIndex];

  return {
    surahName: surah.name,
    surahId: surah.id,
    juzNumber: juz.id,
    juzName: JUZ_NAMES[juzIndex],
    ayah: lastAyah,
    ayahCount: surah.ayahCount,
  };
}
