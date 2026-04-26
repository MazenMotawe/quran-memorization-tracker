import { useMemo } from 'react';
import { useQuranContext } from '../context/QuranContext';

const DAILY_QUOTES = [
  { text: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", source: "صحيح البخاري" },
  { text: "اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ", source: "صحيح مسلم" },
  { text: "إِنَّ الَّذِي لَيْسَ فِي جَوْفِهِ شَيْءٌ مِنَ الْقُرْآنِ كَالْبَيْتِ الْخَرِبِ", source: "سنن الترمذي" },
  { text: "يُقَالُ لِصَاحِبِ الْقُرْآنِ اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا", source: "سنن أبي داود" },
  { text: "مَثَلُ الْمُؤْمِنِ الَّذِي يَقْرَأُ الْقُرْآنَ مَثَلُ الْأُتْرُجَّةِ رِيحُهَا طَيِّبٌ وَطَعْمُهَا طَيِّبٌ", source: "صحيح البخاري" },
  { text: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا", source: "سنن الترمذي" },
  { text: "الْمَاهِرُ بِالْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ", source: "صحيح مسلم" },
  { text: "إِنَّ اللَّهَ يَرْفَعُ بِهَذَا الْكِتَابِ أَقْوَامًا وَيَضَعُ بِهِ آخَرِينَ", source: "صحيح مسلم" },
  { text: "اقْرَؤُوا الزَّهْرَاوَيْنِ الْبَقَرَةَ وَسُورَةَ آلِ عِمْرَانَ فَإِنَّهُمَا يَأْتِيَانِ يَوْمَ الْقِيَامَةِ كَأَنَّهُمَا غَمَامَتَانِ", source: "صحيح مسلم" },
  { text: "تَعَاهَدُوا هَذَا الْقُرْآنَ فَوَالَّذِي نَفْسِي بِيَدِهِ لَهُوَ أَشَدُّ تَفَلُّتًا مِنَ الْإِبِلِ فِي عُقُلِهَا", source: "صحيح البخاري" },
  { text: "مَنْ قَرَأَ قُلْ هُوَ اللَّهُ أَحَدٌ عَشْرَ مَرَّاتٍ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ", source: "صحيح الجامع" },
  { text: "لَا حَسَدَ إِلَّا فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ الْقُرْآنَ فَهُوَ يَقُومُ بِهِ آنَاءَ اللَّيْلِ وَآنَاءَ النَّهَارِ", source: "صحيح البخاري" },
  { text: "مَنْ قَرَأَ آيَةَ الْكُرْسِيِّ فِي دُبُرِ كُلِّ صَلَاةٍ لَمْ يَمْنَعْهُ مِنْ دُخُولِ الْجَنَّةِ إِلَّا أَنْ يَمُوتَ", source: "صحيح الجامع" },
  { text: "مَنْ قَامَ بِعَشْرِ آيَاتٍ لَمْ يُكْتَبْ مِنَ الْغَافِلِينَ", source: "سنن أبي داود" },
  { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا", source: "سورة الشرح: ٥-٦" },
  { text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", source: "سورة الطلاق: ٢-٣" },
  { text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ", source: "سورة القمر: ١٧" },
  { text: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ", source: "سورة الإسراء: ٨٢" },
  { text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", source: "سورة الرعد: ٢٨" },
  { text: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", source: "سورة هود: ١١٥" },
  { text: "ادْعُونِي أَسْتَجِبْ لَكُمْ", source: "سورة غافر: ٦٠" },
  { text: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", source: "سورة الطلاق: ٣" },
  { text: "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي", source: "سورة طه: ٢٥-٢٦" },
  { text: "وَقُلْ رَبِّ زِدْنِي عِلْمًا", source: "سورة طه: ١١٤" },
  { text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", source: "سورة البقرة: ١٥٢" },
  { text: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", source: "سورة الحجر: ٩" },
  { text: "كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ", source: "سورة ص: ٢٩" },
  { text: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", source: "سورة المزمل: ٤" },
  { text: "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ وَشِفَاءٌ لِمَا فِي الصُّدُورِ", source: "سورة يونس: ٥٧" },
  { text: "هَذَا بَيَانٌ لِلنَّاسِ وَهُدًى وَمَوْعِظَةٌ لِلْمُتَّقِينَ", source: "سورة آل عمران: ١٣٨" },
];

/**
 * Returns a deterministic quote index based on today's date.
 * Changes once per day.
 */
function getTodayQuoteIndex() {
  const now = new Date();
  // Create a day-based seed: days since epoch
  const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
  return daysSinceEpoch % DAILY_QUOTES.length;
}

const HeroSection = () => {
  const { memorizationDirection, toggleDirection } = useQuranContext();
  const todayQuote = useMemo(() => {
    const index = getTodayQuoteIndex();
    return DAILY_QUOTES[index];
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between mb-8 gap-6">
      <div className="text-right shrink-0 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-[#28a78c] mb-3">
          نور الله قلبك بالقرآن
        </h2>
        <div className="flex items-center gap-3 justify-end">
           <p className="text-textLight dark:text-gray-400 text-lg">
            تتبع رحلتك في حفظ كتاب الله
          </p>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>
          <button 
            onClick={toggleDirection}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1e1e1e] border border-black/5 dark:border-white/5 text-xs font-bold text-primary dark:text-[#28a78c] hover:bg-primary/5 transition-all shadow-sm"
          >
            {memorizationDirection === 'forward' ? 'بدءاً من الفاتحة' : 'بدءاً من الخواتيم'}
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          </button>
        </div>
      </div>

      <div className="bg-[#e9ece9] dark:bg-[#1e1e1e] rounded-[2rem] p-6 md:p-8 flex-1 w-full shadow-sm border border-black/5 dark:border-white/5 text-right transition-colors duration-300">
        <p className="text-primary dark:text-[#28a78c] text-sm font-medium mb-1">اقتباسات يومية</p>
        <div className="flex items-baseline gap-3 flex-wrap">
          <p className="text-textDark dark:text-gray-200 font-medium text-lg leading-relaxed">
            "{todayQuote.text}"
          </p>
          <span className="text-accent dark:text-[#f1c40f] text-xs font-semibold whitespace-nowrap">
            — {todayQuote.source}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
