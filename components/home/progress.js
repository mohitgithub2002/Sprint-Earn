import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProgressCards = ({data}) => {
  const week = data.currentWeek;
  const day = data.currentDay;
  const completed = ((week-1)*7+(day-1));
  const percentage = completed/42*100;
  return (
    <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[#d42358] text-4xl font-bold">{percentage.toFixed()}%</div>
          <div className="bg-[#d42358] p-3 rounded-full">
            <i className="fas fa-chart-line text-white text-2xl"></i>
          </div>
        </div>
        <div className="text-gray-600 text-lg">Completed</div>
        <div className="mt-4 bg-gray-200 h-2 rounded-full">
          <div className="bg-[#d42358] h-full rounded-full" style={{width: `${percentage}%`}}></div>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[#7025ea] text-4xl font-bold">Week {week}</div>
          <div className="bg-[#7025ea] p-3 rounded-full">
            <i className="fas fa-check-circle text-white text-2xl"></i>
          </div>
        </div>
        <div className="text-gray-600 text-lg">Current week</div>
        <div className="mt-4 flex items-center">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`w-4 h-4 rounded-full mr-2 ${index+1 < day ? 'bg-[#7025ea]' : 'bg-gray-200'}`}></div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[#b106cd] text-4xl font-bold">{completed}</div>
          <div className="bg-[#b106cd] p-3 rounded-full">
            <i className="fas fa-star text-white text-2xl"></i>
          </div>
        </div>
        <div className="text-gray-600 text-lg">Tasks Submitted</div>
        <div className="mt-4 flex items-center">
          <div className="text-[#b106cd] text-2xl font-bold mr-2">{completed}/42</div>
          <div className="flex-grow bg-gray-200 h-2 rounded-full">
            <div className="bg-[#b106cd] h-full rounded-full" style={{width: `${(completed/42)*100}%`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCards;
