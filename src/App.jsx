import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SurahCard from './components/SurahCard';
import ProgressCard from './components/ProgressCard';
import VideoCard from './components/VideoCard';
import DailyInputCard from './components/DailyInputCard';
import WeeklyCalendarCard from './components/WeeklyCalendarCard';
import DailyTargetCard from './components/DailyTargetCard';
import StreakCard from './components/StreakCard';
import OnboardingModal from './components/OnboardingModal';

function App() {
  return (
    <>
      <div className="min-h-screen bg-secondary dark:bg-[#121212] px-4 pb-4 md:px-8 md:pb-8 lg:px-12 lg:pb-12 pt-0 font-sans selection:bg-primary/20 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto">
          <Header />
          <OnboardingModal />
          
          <main className="mt-8">
            <HeroSection />

            <div className="flex flex-col gap-6 lg:gap-8">
              
              {/* Top Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                
                {/* Visual Right Side (Start in RTL) - Spans 8 cols */}
                <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
                  <DailyInputCard />
                  <div className="flex-1">
                    <ProgressCard />
                  </div>
                </div>

                {/* Visual Left Side (End in RTL) - Spans 4 cols */}
                <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                  <div className="flex-1">
                    <SurahCard />
                  </div>
                  <VideoCard />
                </div>

              </div>

              {/* Bottom 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <WeeklyCalendarCard />
                </div>
                <div className="lg:col-span-1">
                  <DailyTargetCard />
                </div>
                <div className="lg:col-span-1">
                  <StreakCard />
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
