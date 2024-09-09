import React from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { HiOutlineTemplate } from 'react-icons/hi';

export default function SidebarDAYs({ weekNumber, dayNumber, weekDetail, currentWeek, currentDay }) {
  console.log("currr", weekNumber+1, currentWeek+1, currentDay)
  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-64 text-black h-auto md:h-screen">
      {weekDetail.days.map((day, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center space-x-3">
            {weekNumber < currentWeek && (
              <FaCheckCircle className="text-green-500 text-lg" />
            )}
            {weekNumber == currentWeek && (
              <>
                {index + 1 < currentDay && (
                  <FaCheckCircle className="text-green-500 text-lg" />
                )}
                {index + 1 === currentDay && (
                  <div className="bg-blue-500 text-white p-1 rounded-full">
                    <HiOutlineTemplate className="text-lg" />
                  </div>
                )}
                {index + 1 > currentDay && (
                  <FaRegCircle className="text-gray-300 text-lg" />
                )}
              </>
            )}
            {weekNumber > currentWeek && (
              <FaRegCircle className="text-gray-300 text-lg" />
            )}
            <div>
              <span className={`text-xs ${weekNumber < currentWeek ? 'text-gray-500' : weekNumber > currentWeek ? 'text-gray-300' : index + 1 <= currentDay ? 'text-gray-500' : 'text-gray-300'}`}>
                DAY {day.day}
              </span>
              <div className={`font-semibold ${weekNumber < currentWeek ? 'text-black' : weekNumber > currentWeek ? 'text-gray-300' : index + 1 <= currentDay ? 'text-black' : 'text-gray-300'}`}>
                {day.title}
              </div>
            </div>
          </div>
          {index < weekDetail.days.length - 1 && (
            <div className={`border-l-2 ${weekNumber < currentWeek ? 'border-green-500' : weekNumber > currentWeek ? 'border-gray-300' : index + 1 < currentDay ? 'border-green-500' : 'border-gray-300'} ml-2 h-8`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
