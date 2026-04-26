import { BookOpen } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';

const SurahCard = () => {
  const { currentPosition } = useQuranContext();

  return (
    <div className="bg-primary dark:bg-[#1a5a4a] rounded-[2rem] p-8 text-white relative overflow-hidden h-full flex flex-col justify-center shadow-lg min-h-[280px] transition-colors duration-300">
      {/* Background Pattern / Illustration (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Placeholder for an actual SVG pattern, using a large icon for now */}
        <BookOpen className="w-64 h-64 absolute -left-16 -bottom-16 rotate-12" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between items-center text-center">
        <div className="bg-accent/20 dark:bg-white/10 text-accent dark:text-accent p-3 rounded-2xl mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        
        <div>
          <p className="text-white/80 text-lg mb-2">أنت الآن في سورة:</p>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">سورة {currentPosition.surahName}</h3>
        </div>

        <div className="flex gap-3 mt-auto">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            الجزء {currentPosition.juzName}
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            الآية {currentPosition.ayah}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SurahCard;
