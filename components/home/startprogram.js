import React from 'react';
import Link from 'next/link';
import { FaPlay, FaArrowRight, FaRocket, FaCalendarAlt, FaClock } from 'react-icons/fa';

const StartProgramCard = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 w-full border border-indigo-100">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaPlay className="text-indigo-500 text-xl" />
            <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">Get Started</span>
          </div>
          <FaRocket className="text-indigo-500 text-2xl animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 leading-tight">
          Begin Your <span className="text-indigo-600">Journey</span>
        </h2>
        <p className="text-gray-600 text-lg">
          It's time to start your program! Are you ready for the challenge?
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <FaCalendarAlt className="text-indigo-500" />
            <span>6 Weeks Program</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaClock className="text-indigo-500" />
            <span>30 Minutes Daily</span>
          </div>
        </div>
        <div className="w-full bg-indigo-200 h-2 rounded-full">
          <div className="w-0 bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out" style={{width: '0%'}}></div>
        </div>
        <Link href={`/program/week1`} className="w-full">
          <button className="w-full group bg-indigo-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg">
            <span>Start Now</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartProgramCard;
