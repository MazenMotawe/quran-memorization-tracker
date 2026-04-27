import { BarChart3, X } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const DailyTargetCard = () => {
  const { dailyTarget, updateDailyTarget } = useQuranContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempTarget, setTempTarget] = useState(dailyTarget);

  const handleOpenModal = () => {
    setTempTarget(dailyTarget);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    updateDailyTarget(tempTarget);
    setIsModalOpen(false);
  };

  return (
    <>
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
            onClick={handleOpenModal}
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

      {/* Custom Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-[#1e1e1e] w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 border border-white/10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 left-6 text-textLight hover:text-textDark dark:hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-textDark dark:text-white">تعديل الهدف اليومي</h3>
                <p className="text-textLight dark:text-gray-400 text-sm mt-1">حدد عدد الصفحات التي تنوي حفظها</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between bg-secondary dark:bg-white/5 p-2 rounded-2xl">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTempTarget(Math.max(1, tempTarget - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/10 text-primary shadow-sm"
                  >
                    -
                  </motion.button>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-textDark dark:text-white">{tempTarget}</span>
                    <span className="text-sm text-textLight dark:text-gray-400 mr-2">صفحات</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTempTarget(Math.min(20, tempTarget + 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/10 text-primary shadow-sm"
                  >
                    +
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 transition-all"
                >
                  حفظ التعديلات
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DailyTargetCard;
