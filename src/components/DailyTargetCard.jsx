import { BarChart3 } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import { motion, AnimatePresence } from 'framer-motion';

const DailyTargetCard = () => {
  const { dailyTarget, updateDailyTarget } = useQuranContext();

  const handleEdit = () => {
    const newTarget = window.prompt("أدخل الهدف اليومي الجديد (عدد الصفحات):", dailyTarget);
    if (newTarget !== null) {
      updateDailyTarget(newTarget);
    }
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="bg-cardBg dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 h-full flex flex-col justify-between relative overflow-hidden transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary dark:text-[#28a78c]" />
          <h4 className="font-bold text-textDark dark:text-gray-200 text-lg">الهدف اليومي</h4>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleEdit}
          className="text-primary dark:text-[#28a78c] text-xs font-bold px-3 py-1 bg-primary/10 dark:bg-[#28a78c]/20 rounded-full hover:bg-primary/20 dark:hover:bg-[#28a78c]/30 transition-colors border border-primary/20 dark:border-[#28a78c]/20"
        >
          تعديل
        </motion.button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 relative z-10 mt-2 gap-2">
        <AnimatePresence mode="wait">
          <motion.span 
            key={dailyTarget}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl font-bold text-accent dark:text-[#f1c40f] leading-none drop-shadow-sm"
          >
            {dailyTarget}
          </motion.span>
        </AnimatePresence>
        <span className="text-textLight dark:text-gray-400 font-medium text-sm">صفحات في اليوم</span>
      </div>
      
      {/* Decorative large background number */}
      <motion.span 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute -bottom-8 -left-4 text-[12rem] font-bold text-accent/10 dark:text-[#f1c40f]/5 pointer-events-none leading-none"
      >
        {dailyTarget}
      </motion.span>
    </motion.div>
  );
};

export default DailyTargetCard;
