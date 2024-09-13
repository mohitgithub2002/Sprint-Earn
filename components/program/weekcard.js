import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CourseCard = ({ data, currentWeek, currentDay }) => {
  let isLock = currentWeek < data.week;
  let percentage;

  if (currentWeek === data.week) {
    percentage = ((currentDay - 1) / 7) * 100;
  } else if (currentWeek > data.week) {
    percentage = 100;
  } else {
    percentage = 0;
  }

  return (
    <div
      className="rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[250px] sm:h-[300px] flex flex-col justify-between"
      style={{ 
        background: `linear-gradient(135deg, ${data.bgcolor} 0%, ${data.color}33 100%)`,
        cursor: isLock ? 'not-allowed' : 'pointer'
      }}
    >
      <div>
        <div className="flex justify-between items-start">
          <div className="bg-white bg-opacity-20 p-2 sm:p-3 rounded-full">
            {isLock ? (
              <i className="fas fa-lock text-xl sm:text-2xl" style={{ color: data.color }}></i>
            ) : (
              <i className="fas fa-mobile-alt text-xl sm:text-2xl" style={{ color: data.color }}></i>
            )}
          </div>
          <div className="text-xs sm:text-sm font-semibold" style={{ color: data.color }}>
            Week {data.week}
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{data.title}</h2>
          <p className=" text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">{data.description}</p>
        </div>
      </div>
      <div>
        <div className="mt-4 sm:mt-6">
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-xs sm:text-sm font-bold" style={{ color: data.color }}>{percentage.toFixed()}%</span>
          </div>
          <div className="h-2 sm:h-3 bg-gray-200 rounded-full relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${percentage.toFixed()}%`, 
                backgroundColor: data.color,
                boxShadow: `0 0 10px ${data.color}`
              }}
            ></div>
          </div>
        </div>
        {/* {!isLock && (
          <button 
            className="mt-4 sm:mt-6 w-full py-1.5 sm:py-2 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: data.color }}
          >
            {percentage < 100 ? 'Continue' : 'Review'}
          </button>
        )} */}
      </div>
    </div>
  );
};

export default CourseCard;
