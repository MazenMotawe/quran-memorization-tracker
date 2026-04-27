import { Play, MonitorPlay } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import videoPlaceholder from '../assets/videoPlaceholder.png';
import { motion } from 'framer-motion';

const VideoCard = () => {
  const { currentPosition } = useQuranContext();
  
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=تحفيظ+سورة+${encodeURIComponent(currentPosition.surahName)}+مكرر`;

  return (
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="bg-cardBg dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 flex items-center justify-between gap-4 h-full transition-colors duration-300"
    >
      <div className="flex-1">
        <h4 className="font-bold text-textDark dark:text-gray-200 text-lg mb-2">تحفيظ السورة الحالية</h4>
        <p className="text-textLight dark:text-gray-400 text-xs leading-relaxed mb-4">
          استمع وكرر مع القارئ لتثبيت الحفظ بطريقة صحيحة ومجودة.
        </p>
        <motion.a 
          whileHover={{ x: 5 }}
          href={youtubeSearchUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-primary dark:text-[#28a78c] font-bold text-sm hover:underline"
        >
          <MonitorPlay className="w-4 h-4 text-red-600" />
          مشاهدة على YouTube
        </motion.a>
      </div>
      
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={youtubeSearchUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden relative flex-shrink-0 group cursor-pointer block"
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Play className="w-4 h-4 text-primary ml-1" />
          </motion.div>
        </div>
        {/* Placeholder image (representing the Quran video thumbnail) */}
        <img 
          src={videoPlaceholder} 
          alt="Quran video thumbnail" 
          className="w-full h-full object-cover"
        />
      </motion.a>
    </motion.div>
  );
};

export default VideoCard;
