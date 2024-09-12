import React from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';

const PremiumCard = ({data}) => {
  const week = data.currentWeek;
  const day = data.currentDay;
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-2/3 lg:w-1/2 border border-indigo-100">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-3">
          <FaExclamationTriangle className="text-indigo-500 text-xl" />
          <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">Important Update</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 leading-tight">
          Week {week} Update <span className="text-indigo-600">Pending</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Don&apos;t forget to submit your Day {day} update soon!
        </p>
        <Link href={`/program/week${week}/day${day}/update`}>
          <button className="group bg-indigo-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg">
            <span>Update Now</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PremiumCard;
