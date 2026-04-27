import { Flame } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import { motion, AnimatePresence } from 'framer-motion';

const StreakCard = () => {
  const { streak } = useQuranContext();

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="bg-[#f0eade] dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 h-full flex flex-col justify-center items-center relative overflow-hidden text-center min-h-[160px] transition-colors duration-300"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-12 h-12 bg-accent/20 dark:bg-[#f1c40f]/10 rounded-full flex items-center justify-center text-accent dark:text-[#f1c40f] mb-3"
      >
        <Flame className="w-6 h-6 fill-accent dark:fill-[#f1c40f]" />
      </motion.div>
      
      <p className="text-textLight dark:text-gray-400 font-medium text-sm mb-2 relative z-10">سلسلة الحفظ</p>
      
      <div className="flex items-baseline gap-2 relative z-10">
        <AnimatePresence mode="wait">
          <motion.span 
            key={streak}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-bold text-textDark dark:text-gray-200"
          >
            {streak}
          </motion.span>
        </AnimatePresence>
      </div>
      
      <p className="text-textLight dark:text-gray-400 font-medium text-sm mt-1 relative z-10">يوم متواصل</p>
    </motion.div>
  );
};

export default StreakCard;
