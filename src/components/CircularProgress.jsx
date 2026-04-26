import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useQuranContext } from '../context/QuranContext';

const CircularProgress = ({ value }) => {
  const { theme } = useQuranContext();
  const isDark = theme === 'dark';

  return (
    <div className="w-48 h-48 md:w-64 md:h-64 relative">
      <CircularProgressbarWithChildren
        value={value}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: isDark ? '#f1c40f' : '#c99b3b', 
          trailColor: isDark ? '#2d2d2d' : '#f0eade',
          strokeLinecap: 'round',
        })}
      >
        <div className="flex flex-col items-center justify-center mt-2">
          <span className="text-5xl font-bold text-primary dark:text-[#28a78c]">{value}%</span>
          <span className="text-base text-textLight dark:text-gray-400 font-medium">تم الإنجاز</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgress;
