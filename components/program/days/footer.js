"use client"
import React from 'react';
import { FaArrowLeft, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Footer = ({ isCurrentDay, weekNumber, dayNumber }) => {
    const router = useRouter();

    const handleNavigation = (direction) => {
        let newDay = direction === 'next' ? parseInt(dayNumber) + 1 : parseInt(dayNumber) - 1;
        let newWeek = parseInt(weekNumber);
        
        if (newDay < 1) {
            newDay = 7;
            newWeek--;
        }
        if (newDay > 7) {
            newDay = 1;
            newWeek++;
        }

        router.push(`/program/week${newWeek}/day${newDay}`);
    };

    const handleSubmit = () => {
        router.push(`/program/week${weekNumber}/day${dayNumber}/update`);
    };

    return (
        <div className="mt-8 mb-16 flex flex-row justify-between items-center space-y-4 md:space-y-0">
            <button 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                onClick={() => handleNavigation('back')}
            >
                <FaArrowLeft />
                <span>Back</span>
            </button>
            {isCurrentDay ? (
                <button 
                    className="flex items-center space-x-2 bg-cta text-white px-4 py-2 rounded-md hover:bg-cta transition-colors duration-300"
                    onClick={handleSubmit}
                >
                    <span>Submit</span>
                    <FaCheck />
                </button>
            ) : (
                <button 
                    className="flex items-center space-x-2 bg-cta text-white px-4 py-2 rounded-md hover:bg-cta transition-colors duration-300"
                    onClick={() => handleNavigation('next')}
                >
                    <span>Next</span>
                    <FaArrowRight />
                </button>
            )}
        </div>
    );
};

export default Footer;
