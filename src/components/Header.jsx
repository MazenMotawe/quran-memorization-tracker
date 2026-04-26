import { Sun, Moon, RotateCcw } from 'lucide-react';
import { useQuranContext } from '../context/QuranContext';
import { useEffect } from 'react';

const Header = () => {
  const { resetProgress, toggleTheme, theme } = useQuranContext();

  // Apply theme to HTML tag
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        {/* App Logo */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white shadow-sm border border-primary/10">
          <img src="/logo.png" alt="حافظ القرآن" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-primary dark:text-[#28a78c]">حافظ القرآن</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-textDark dark:text-gray-200"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button
          onClick={resetProgress}
          className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          إعادة التعيين
        </button>
      </div>
    </header>
  );
};

export default Header;
