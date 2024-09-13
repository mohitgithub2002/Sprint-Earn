import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const WeekHeader = ({ weekDetail }) => {
    return (
        <div className="bg-gradient-to-br rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundImage: `linear-gradient(135deg, ${weekDetail.color}, ${weekDetail.bgcolor})` }}
        >
            <div className="flex flex-col items-center justify-between space-y-4 sm:space-y-6 md:space-y-0 md:flex-row md:space-x-8">
                <div className="text-white mt-2 text-center md:text-left flex-grow w-full md:w-auto order-2 md:order-1">
                    <div className="inline-block text-sm sm:text-base font-semibold bg-white bg-opacity-20 rounded-full px-3 py-1 mb-2 backdrop-blur-sm" style={{ color: weekDetail.color }}>
                        Week {weekDetail.week}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">{weekDetail.title}</h2>
                    <p className=" text-sm sm:text-base md:text-lg text-white text-opacity-90 line-clamp-3 md:line-clamp-none">{weekDetail.description}</p>
                </div>
                <div className="relative order-1 md:order-2">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <FaCalendarAlt className="text-white text-opacity-80 text-3xl sm:text-4xl md:text-5xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-md">
                        <div className="text-lg sm:text-xl font-bold" style={{ color: weekDetail.color }}>{weekDetail.week}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeekHeader;
