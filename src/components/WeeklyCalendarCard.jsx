import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';

const WeeklyCalendarCard = () => {
  const { history, getTodayString } = useQuranContext();

  // Generate last 7 days
  const today = new Date();
  const days = [];
  const dayNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

  // Let's build the week ending with today (or centered on today)
  // Let's center it: 3 days before, today, 3 days after
  for (let i = -3; i <= 3; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const isToday = i === 0;
    
    const pagesMemorized = history[dateStr] || 0;
    const pagesText = pagesMemorized > 0 ? `${pagesMemorized} صفحات` : '';

    days.push({
      name: dayNames[d.getDay()],
      date: d.getDate(),
      pages: pagesText,
      isToday: isToday,
      fullDateStr: dateStr
    });
  }

  const currentMonth = `${monthNames[today.getMonth()]} ${today.getFullYear()}`;

  return (
    <div className="bg-cardBg dark:bg-[#1e1e1e] rounded-[2rem] p-6 shadow-sm border border-black/5 dark:border-white/5 h-full flex flex-col transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary dark:text-[#28a78c]" />
          <h4 className="font-bold text-textDark dark:text-gray-200 text-lg">جدول الحفظ الأسبوعي</h4>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-textDark dark:text-gray-200">
          <button className="p-1 hover:bg-secondary dark:hover:bg-[#2d2d2d] rounded-full transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          <span>{currentMonth}</span>
          <button className="p-1 hover:bg-secondary dark:hover:bg-[#2d2d2d] rounded-full transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide flex-1 items-center">
        {days.map((day, idx) => (
          <div 
            key={idx} 
            className={`flex-shrink-0 w-20 flex flex-col items-center justify-between p-3 rounded-2xl border transition-all ${
              day.isToday 
                ? 'border-primary dark:border-[#28a78c] bg-white dark:bg-[#2d2d2d] shadow-sm scale-105' 
                : 'border-transparent bg-secondary/50 dark:bg-white/5 opacity-60 hover:opacity-100'
            }`}
          >
            <span className={`text-xs font-medium mb-2 ${day.isToday ? 'text-primary dark:text-[#28a78c]' : 'text-textLight dark:text-gray-400'}`}>
              {day.name}
            </span>
            <span className={`text-2xl font-bold mb-2 ${day.isToday ? 'text-textDark dark:text-gray-200' : 'text-textDark/70 dark:text-gray-200/70'}`}>
              {day.date}
            </span>
            <span className="text-[10px] text-primary/70 dark:text-[#28a78c]/70 font-bold h-8 text-center flex items-center justify-center leading-tight">
              {day.pages}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendarCard;
