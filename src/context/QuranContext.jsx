import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getQuranPosition } from '../data/quranData';

const QuranContext = createContext();

export const useQuranContext = () => useContext(QuranContext);

export const QuranProvider = ({ children }) => {
  // Constants
  const TOTAL_PAGES = 604;
  
  // Helper to get today's date string (YYYY-MM-DD)
  const getTodayString = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  // State initialization from localStorage
  const [memorizedPages, setMemorizedPages] = useState(() => {
    const saved = localStorage.getItem('memorizedPages');
    return saved ? parseInt(saved, 10) : 0; // Default 0 for new users
  });

  const [dailyTarget, setDailyTarget] = useState(() => {
    const saved = localStorage.getItem('dailyTarget');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  // History format: { "2023-10-23": 5, "2023-10-22": 5 }
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('history');
    if (saved) return JSON.parse(saved);
    
    // Default mock history based on the design
    const today = getTodayString();
    return {
      [today]: 0 // We will update this when adding progress
    };
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  const [memorizationDirection, setMemorizationDirection] = useState(() => {
    const saved = localStorage.getItem('direction');
    return saved || 'forward'; // 'forward' (Fatiha -> End) or 'backward' (End -> Fatiha)
  });

  const [isOnboarded, setIsOnboarded] = useState(() => {
    return localStorage.getItem('isOnboarded') === 'true';
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('memorizedPages', memorizedPages.toString());
    localStorage.setItem('dailyTarget', dailyTarget.toString());
    localStorage.setItem('streak', streak.toString());
    localStorage.setItem('history', JSON.stringify(history));
    localStorage.setItem('theme', theme);
    localStorage.setItem('direction', memorizationDirection);
    localStorage.setItem('isOnboarded', isOnboarded.toString());
  }, [memorizedPages, dailyTarget, streak, history, theme, memorizationDirection, isOnboarded]);

  // Derived state
  const remainingPages = TOTAL_PAGES - memorizedPages;
  const progressPercentage = Math.round((memorizedPages / TOTAL_PAGES) * 100);
  
  // Assuming the user memorizes their daily target every day, calculate remaining days
  const remainingDays = dailyTarget > 0 ? Math.ceil(remainingPages / dailyTarget) : 0;

  // Current Quran position based on memorized pages and direction
  const currentPosition = useMemo(() => {
    const mushafPage = memorizationDirection === 'forward' 
      ? Math.max(1, memorizedPages) 
      : Math.max(1, 605 - memorizedPages);
    return getQuranPosition(mushafPage);
  }, [memorizedPages, memorizationDirection]);

  // Actions
  const addProgress = (pagesToAdd) => {
    const num = parseInt(pagesToAdd, 10);
    if (isNaN(num) || num <= 0) return;

    setMemorizedPages(prev => Math.min(TOTAL_PAGES, prev + num));
    
    // Update history for today
    const today = getTodayString();
    setHistory(prev => {
      const newHistory = { ...prev };
      const currentTodayPages = newHistory[today] || 0;
      newHistory[today] = currentTodayPages + num;
      
      // Check if we just hit the daily target for the streak
      if (currentTodayPages < dailyTarget && (currentTodayPages + num) >= dailyTarget) {
        setStreak(s => s + 1);
      }
      return newHistory;
    });
  };

  const updateDailyTarget = (newTarget) => {
    const num = parseInt(newTarget, 10);
    if (!isNaN(num) && num > 0) {
      setDailyTarget(num);
    }
  };

  const resetProgress = () => {
    setMemorizedPages(0);
    setStreak(0);
    setHistory({});
    setIsOnboarded(false);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleDirection = () => {
    setMemorizationDirection(prev => prev === 'forward' ? 'backward' : 'forward');
  };

  const completeOnboarding = (direction, target) => {
    setMemorizationDirection(direction);
    setDailyTarget(target);
    setIsOnboarded(true);
  };

  // Provide state
  const value = {
    TOTAL_PAGES,
    memorizedPages,
    remainingPages,
    progressPercentage,
    remainingDays,
    currentPosition,
    dailyTarget,
    streak,
    history,
    theme,
    memorizationDirection,
    getTodayString,
    addProgress,
    updateDailyTarget,
    resetProgress,
    toggleTheme,
    toggleDirection,
    completeOnboarding,
    isOnboarded
  };

  return (
    <QuranContext.Provider value={value}>
      {children}
    </QuranContext.Provider>
  );
};
