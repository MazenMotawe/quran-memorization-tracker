import { Sun, Moon, RotateCcw } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ResetConfirmModal from './ResetConfirmModal';

const Header = () => {
  const { resetProgress, toggleTheme, theme } = useQuranContext();
  const [showResetModal, setShowResetModal] = useState(false);

  // Apply theme to HTML tag
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center justify-between py-6"
    >
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-3"
      >
        {/* App Logo */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white shadow-sm border border-primary/10"
        >
          <img src="/logo.png" alt="حافظ القرآن" className="w-full h-full object-cover" />
        </motion.div>
        <h1 className="text-2xl font-bold text-primary dark:text-[#28a78c]">حافظ القرآن</h1>
      </motion.div>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-textDark dark:text-gray-200"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowResetModal(true)}
          className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة التعيين
        </motion.button>
      </div>

      <ResetConfirmModal 
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={() => {
          resetProgress();
          setShowResetModal(false);
        }}
      />
    </motion.header>
  );
};

export default Header;
