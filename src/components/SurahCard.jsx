import { BookOpen } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import { motion, AnimatePresence } from 'framer-motion';

const SurahCard = () => {
  const { currentPosition } = useQuranContext();

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
      className="bg-primary dark:bg-[#1a5a4a] rounded-[2rem] p-8 text-white relative overflow-hidden h-full flex flex-col justify-center shadow-lg min-h-[280px] transition-colors duration-300"
    >
      {/* Background Pattern / Illustration (Subtle) */}
      <motion.div 
        animate={{ 
          rotate: [12, 15, 12],
          scale: [1, 1.05, 1]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <BookOpen className="w-64 h-64 absolute -left-16 -bottom-16 rotate-12" />
      </motion.div>

      <div className="relative z-10 flex flex-col h-full justify-between items-center text-center">
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-accent/20 dark:bg-white/10 text-accent dark:text-accent p-3 rounded-2xl mb-4"
        >
          <BookOpen className="w-8 h-8" />
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPosition.surahName}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/80 text-lg mb-2">أنت الآن في سورة:</p>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">سورة {currentPosition.surahName}</h3>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-auto">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            الجزء {currentPosition.juzName}
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            الآية {currentPosition.ayah}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default SurahCard;
