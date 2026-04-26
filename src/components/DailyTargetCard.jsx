import { BarChart3 } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';

const DailyTargetCard = () => {
  const { dailyTarget, updateDailyTarget } = useQuranContext();

  const handleEdit = () => {
    const newTarget = window.prompt("أدخل الهدف اليومي الجديد (عدد الصفحات):", dailyTarget);
    if (newTarget !== null) {
      updateDailyTarget(newTarget);
    }
  };

  return (
    <div className="bg-cardBg dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 h-full flex flex-col justify-between relative overflow-hidden transition-colors duration-300">
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary dark:text-[#28a78c]" />
          <h4 className="font-bold text-textDark dark:text-gray-200 text-lg">الهدف اليومي</h4>
        </div>
        <button 
          onClick={handleEdit}
          className="text-primary dark:text-[#28a78c] text-xs font-bold px-3 py-1 bg-primary/10 dark:bg-[#28a78c]/20 rounded-full hover:bg-primary/20 dark:hover:bg-[#28a78c]/30 transition-colors border border-primary/20 dark:border-[#28a78c]/20"
        >
          تعديل
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 relative z-10 mt-2 gap-2">
        <span className="text-7xl font-bold text-accent dark:text-[#f1c40f] leading-none drop-shadow-sm">
          {dailyTarget}
        </span>
        <span className="text-textLight dark:text-gray-400 font-medium text-sm">صفحات في اليوم</span>
      </div>
      
      {/* Decorative large background number */}
      <span className="absolute -bottom-8 -left-4 text-[12rem] font-bold text-accent/10 dark:text-[#f1c40f]/5 pointer-events-none leading-none">
        {dailyTarget}
      </span>
    </div>
  );
};

export default DailyTargetCard;
