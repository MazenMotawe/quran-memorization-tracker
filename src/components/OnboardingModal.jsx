import { useState } from 'react';
import { useQuranContext } from '../context/QuranContext';
import { motion, AnimatePresence } from 'framer-motion';

const OnboardingModal = () => {
  const { completeOnboarding, isOnboarded } = useQuranContext();
  const [direction, setDirection] = useState('forward');
  const [target, setTarget] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    completeOnboarding(direction, target);
  };

  return (
    <AnimatePresence>
      {!isOnboarded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-[#1e1e1e] w-full max-w-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 relative z-10"
          >
            <div className="text-center mb-8">
              <motion.div 
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-textMain dark:text-white mb-2">أهلاً بك في "حافظ"</h2>
              <p className="text-textSecondary dark:text-gray-400">لنقم بإعداد خطتك معاً</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Direction Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-textSecondary dark:text-gray-400 text-center">
                  من أين ستبدأ رحلة الحفظ؟
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setDirection('forward')}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                      direction === 'forward'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-transparent bg-secondary dark:bg-white/5 text-textSecondary dark:text-gray-400'
                    }`}
                  >
                    <span className="text-lg font-bold">من الفاتحة</span>
                    <span className="text-xs opacity-70">الترتيب المصحفي</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setDirection('backward')}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                      direction === 'backward'
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-transparent bg-secondary dark:bg-white/5 text-textSecondary dark:text-gray-400'
                    }`}
                  >
                    <span className="text-lg font-bold">من الخواتيم</span>
                    <span className="text-xs opacity-70">جزء عمّ فما قبله</span>
                  </motion.button>
                </div>
              </div>

              {/* Daily Target */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-textSecondary dark:text-gray-400 text-center">
                  كم صفحة تنوي حفظها يومياً؟
                </label>
                <div className="flex items-center justify-between bg-secondary dark:bg-white/5 p-2 rounded-2xl">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setTarget(Math.max(1, target - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/10 text-primary shadow-sm transition-transform"
                  >
                    -
                  </motion.button>
                  <div className="text-center">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={target}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        className="text-2xl font-bold text-textMain dark:text-white"
                      >
                        {target}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm text-textSecondary dark:text-gray-400 mr-2">صفحات</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setTarget(Math.min(20, target + 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/10 text-primary shadow-sm transition-transform"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 transition-all"
              >
                ابدأ رحلتي الآن
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;
