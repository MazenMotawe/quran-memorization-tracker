import CircularProgress from './CircularProgress';
import { useQuranContext } from '../context/QuranContext';

const getArabicUnit = (value, unit) => {
  if (unit === 'day') {
    if (value === 1) return 'يوم';
    if (value === 2) return 'يومان';
    if (value >= 3 && value <= 10) return 'أيام';
    return 'يوم';
  }
  if (unit === 'month') {
    if (value === 1) return 'شهر';
    if (value === 2) return 'شهران';
    if (value >= 3 && value <= 10) return 'أشهر';
    return 'شهر';
  }
  return '';
};

const ProgressCard = () => {
  const { 
    memorizedPages, 
    TOTAL_PAGES, 
    remainingPages, 
    remainingDays, 
    progressPercentage 
  } = useQuranContext();

  const months = Math.floor(remainingDays / 30);
  const days = remainingDays % 30;

  return (
    <div className="bg-cardBg dark:bg-[#1e1e1e] rounded-[2rem] p-8 md:p-10 shadow-sm border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 h-full transition-colors duration-300">
      
      <div className="flex-shrink-0 order-2 md:order-1">
        <CircularProgress value={progressPercentage} />
      </div>

      <div className="flex-[1.2] w-full order-1 md:order-2">
        <div className="flex gap-4 mb-8">
          <div className="bg-secondary dark:bg-[#2d2d2d] py-10 px-4 rounded-[2rem] flex-1 text-center transition-colors duration-300 flex flex-col justify-center border border-black/5 dark:border-white/5">
            <p className="text-textLight dark:text-gray-400 text-sm font-medium mb-2">الصفحات المنجزة</p>
            <p className="text-3xl font-bold text-primary dark:text-[#28a78c]">{memorizedPages} <span className="text-xl text-primary/70 dark:text-[#28a78c]/70">/ {TOTAL_PAGES}</span></p>
          </div>
          <div className="bg-secondary dark:bg-[#2d2d2d] py-10 px-4 rounded-[2rem] flex-1 text-center transition-colors duration-300 flex flex-col justify-center border border-black/5 dark:border-white/5">
            <p className="text-textLight dark:text-gray-400 text-sm font-medium mb-2">المتبقي</p>
            <p className="text-3xl font-bold text-primary dark:text-[#28a78c]">{remainingPages} صفحة</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-bold text-textDark dark:text-gray-200">الوقت المتبقي للخطة</span>
            <div className="text-left">
              <span className="text-xs font-bold text-accent dark:text-[#f1c40f]">
                {remainingDays} {getArabicUnit(remainingDays, 'day')}
                {remainingDays >= 30 && (
                  <span className="mr-1 opacity-70">
                    ({months} {getArabicUnit(months, 'month')} {days > 0 ? `و ${days} ${getArabicUnit(days, 'day')}` : ''})
                  </span>
                )}
              </span>
            </div>
          </div>
          <div className="h-2 w-full bg-secondary dark:bg-[#2d2d2d] rounded-full overflow-hidden flex transition-colors duration-300">
             <div 
               className="bg-accent dark:bg-[#f1c40f] h-full rounded-full transition-all duration-1000 ease-in-out" 
               style={{ width: `${progressPercentage}%` }}
             ></div>
          </div>
        </div>

        <div className="bg-primary/5 dark:bg-[#28a78c]/10 text-primary dark:text-[#28a78c] text-sm font-medium p-3 rounded-xl flex items-center justify-center gap-2 mt-4">
          <span>ما شاء الله! استمر</span>
          <span>👏</span>
        </div>
      </div>

    </div>
  );
};

export default ProgressCard;
