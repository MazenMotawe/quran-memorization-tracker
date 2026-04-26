import { Flame } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';

const StreakCard = () => {
  const { streak } = useQuranContext();

  return (
    <div className="bg-[#f0eade] dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 h-full flex flex-col justify-center items-center relative overflow-hidden text-center min-h-[160px] transition-colors duration-300">
      <div className="w-12 h-12 bg-accent/20 dark:bg-[#f1c40f]/10 rounded-full flex items-center justify-center text-accent dark:text-[#f1c40f] mb-3">
        <Flame className="w-6 h-6 fill-accent dark:fill-[#f1c40f]" />
      </div>
      
      <p className="text-textLight dark:text-gray-400 font-medium text-sm mb-2 relative z-10">سلسلة الحفظ</p>
      
      <div className="flex items-baseline gap-2 relative z-10">
        <span className="text-6xl font-bold text-textDark dark:text-gray-200">{streak}</span>
      </div>
      
      <p className="text-textLight dark:text-gray-400 font-medium text-sm mt-1 relative z-10">يوم متواصل</p>
    </div>
  );
};

export default StreakCard;
