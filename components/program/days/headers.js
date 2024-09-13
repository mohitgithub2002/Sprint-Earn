"use client"
import React from 'react';
import { FaStar, FaChevronDown, FaChevronUp, FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function HeaderSection({ weekNumber, dayNumber, currentDay, currentWeek }) {
  const router = useRouter();

  const handleDayChange = (direction) => {
    let newDay = direction === 'down' ? parseInt(dayNumber) + 1 : parseInt(dayNumber) - 1;
    let newWeek = parseInt(weekNumber);
    
    if (newDay < 1) {
      newDay = 7;
      newWeek--;
    }
    if (newDay > 7) {
      newDay = 1;
      newWeek++;
    }

    // Check if the new day is accessible based on currentWeek and currentDay
    if (
      (newWeek < currentWeek) ||
      (newWeek === currentWeek && newDay <= currentDay)
    ) {
      router.push(`/program/week${newWeek}/day${newDay}`);
    }
  };

  const isPreviousAccessible = (weekNumber < currentWeek) || (weekNumber == currentWeek && dayNumber > 1);
  const isNextAccessible = (weekNumber < currentWeek) || (weekNumber == currentWeek && dayNumber < currentDay);
  console.log("Previous accessible:", isPreviousAccessible, "Next accessible:", isNextAccessible);

  return (
    <div className="bg-white text-gray-800 flex flex-row items-center justify-between px-4 py-2 w-full mt-2 border-b-2 border-[#eaecf0] z-20 h-20">
      {/* Left section with back icon, breadcrumb and icons */}
      <div className="flex items-center space-x-2 mb-2 md:mb-0">
        <FaChevronLeft 
          className="text-2xl p-1 rounded cursor-pointer mr-4"
          onClick={() => router.back()}
        />
        <div className="flex items-center space-x-1">
          <span className="text-md">Week-{weekNumber}</span>
        </div>
        <span className="text-xl">›</span>
        <div className="flex items-center space-x-1">
          <span className="text-md">Day-{dayNumber}</span>
          <FaStar className="text-gray-500" />
        </div>
      </div>

      {/* Right section with pagination and arrow icons */}
      <div className="flex items-center space-x-2">
        <span className="text-sm">{dayNumber} / 7</span>
        <div className="flex items-center space-x-1">
          <FaChevronUp 
            className={`text-2xl p-1 rounded cursor-pointer ${isPreviousAccessible ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
            onClick={() => isPreviousAccessible && handleDayChange('up')}
          />
          <FaChevronDown 
            className={`text-2xl p-1 rounded cursor-pointer ${isNextAccessible ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}
            onClick={() => isNextAccessible && handleDayChange('down')}
          />
        </div>
      </div>
    </div>
  );
}
