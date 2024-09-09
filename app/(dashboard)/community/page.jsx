export const dynamic = 'force-dynamic';

import React from 'react';
import { FaUsers, FaDollarSign, FaLink } from 'react-icons/fa';

const Community = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join the Sprintearn Affiliate Network</h1>
            <p className="text-base md:text-lg mb-8 text-center max-w-2xl">
                Earn revenue by promoting Sprintearn! Join our affiliate network and start earning today.
            </p>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex flex-col items-center">
                    <FaUsers className="text-5xl md:text-6xl mb-4" />
                    <h2 className="text-xl md:text-2xl font-semibold">Connect</h2>
                    <p className="text-center mt-2">Join a community of like-minded individuals.</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaDollarSign className="text-5xl md:text-6xl mb-4" />
                    <h2 className="text-xl md:text-2xl font-semibold">Earn</h2>
                    <p className="text-center mt-2">Generate revenue by promoting Sprintearn.</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaLink className="text-5xl md:text-6xl mb-4" />
                    <h2 className="text-xl md:text-2xl font-semibold">Promote</h2>
                    <p className="text-center mt-2">Share your affiliate link and grow your network.</p>
                </div>
            </div>
            <button className="mt-12 bg-white text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                Join Now
            </button>
        </div>
    );
};

export default Community;