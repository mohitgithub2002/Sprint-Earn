import React from 'react';
import Link from 'next/link';

const ChatBox = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#d42358] to-[#7025ea] w-full space-y-6 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-white text-center">Welcome to SprintEarn AI</h1>
        <p className="text-xl text-white text-center max-w-2xl">
          Your intelligent assistant for productivity and learning. Get personalized guidance, task management, and AI-powered insights to accelerate your growth.
        </p>
        <Link href="/sprintearnai">
          <button className="bg-white text-[#7025ea] py-4 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition duration-300 shadow-md">
            Try SprintEarn AI
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChatBox;
