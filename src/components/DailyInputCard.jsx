import { Edit, Save } from 'lucide-react';
import { useState } from 'react';
import { useQuranContext } from '../context/QuranContext';
import { motion } from 'framer-motion';

const DailyInputCard = () => {
  const [pages, setPages] = useState('');
  const { addProgress } = useQuranContext();

  const handleSave = () => {
    if (pages && parseInt(pages, 10) > 0) {
      addProgress(pages);
      setPages(''); // Reset input after saving
    }
  };

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="bg-cardBg dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300"
    >
      
      <div className="flex-1 w-full flex items-center justify-start gap-4">
        <motion.div 
          whileHover={{ rotate: 15 }}
          className="bg-primary/10 dark:bg-[#28a78c]/20 p-3 rounded-xl text-primary dark:text-[#28a78c] flex-shrink-0"
        >
          <Edit className="w-5 h-5" />
        </motion.div>
        <h4 className="font-bold text-textDark dark:text-gray-200 text-lg">كم صفحة حفظت اليوم؟</h4>
      </div>

      <div className="flex w-full md:w-auto items-center gap-4 flex-1">
        <input 
          type="number" 
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="0"
          className="bg-secondary dark:bg-[#2d2d2d] border border-transparent outline-none focus:border-primary/30 dark:focus:border-[#28a78c]/30 focus:bg-white dark:focus:bg-[#2d2d2d] text-center text-textDark dark:text-gray-200 font-bold text-xl rounded-xl w-full py-3 px-4 transition-all"
        />
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="bg-primary dark:bg-[#28a78c] hover:bg-primaryHover dark:hover:bg-[#1f8c74] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
        >
          <Save className="w-4 h-4" />
          حفظ التقدم
        </motion.button>
      </div>

    </motion.div>
  );
};

export default DailyInputCard;
