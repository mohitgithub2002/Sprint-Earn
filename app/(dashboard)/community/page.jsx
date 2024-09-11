export const dynamic = 'force-dynamic';

import React from 'react';
import { FaUsers, FaDollarSign, FaLink } from 'react-icons/fa';

const Community = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white p-4 md:p-8 pb-24 md:pb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Join the Sprintearn Affiliate Network</h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center max-w-xl md:max-w-2xl">
                Earn revenue by promoting Sprintearn! Join our affiliate network and start earning today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
                <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
                    <FaUsers className="text-4xl sm:text-5xl md:text-6xl mb-4" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Connect</h2>
                    <p className="text-center mt-2 text-sm sm:text-base">Join a community of like-minded individuals.</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
                    <FaDollarSign className="text-4xl sm:text-5xl md:text-6xl mb-4" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Earn</h2>
                    <p className="text-center mt-2 text-sm sm:text-base">Generate revenue by promoting Sprintearn.</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
                    <FaLink className="text-4xl sm:text-5xl md:text-6xl mb-4" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Promote</h2>
                    <p className="text-center mt-2 text-sm sm:text-base">Share your affiliate link and grow your network.</p>
                </div>
            </div>
            <button className="mt-8 sm:mt-10 md:mt-12 bg-white text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 text-sm sm:text-base mb-4 md:mb-0">
                Join Now
            </button>
        </div>
    );
};

export default Community;