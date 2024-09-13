import React from 'react';
import { FaMoneyBillWave, FaCalendarAlt, FaLightbulb } from 'react-icons/fa';

const WelcomeCard = () => {
  return (
    <div className="bg-gradient-to-r from-[#30C67C] to-[#82F4B1] rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
        <div className="text-white text-center sm:text-left w-full sm:w-2/3">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">6 Week Earning Money Program</h1>
          <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4">Learn to start earning money by building products and services that pay you</p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
            <div className="flex items-center text-sm sm:text-base">
              <FaCalendarAlt className="mr-1 sm:mr-2" />
              <span>6 Weeks</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <FaLightbulb className="mr-1 sm:mr-2" />
              <span>Practical Skills</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <FaMoneyBillWave className="mr-1 sm:mr-2" />
              <span>Earn Money</span>
            </div>
          </div>
        </div>
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <FaMoneyBillWave className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
