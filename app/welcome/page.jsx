"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PaymentSuccess = () => {
    useEffect(() => {
        const timer = setTimeout(() => window.location.replace('/home'), 3000);
        return () => clearTimeout(timer);
    }, []);
  return (
    <div className='flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen'>
        <div className="flex flex-col items-center justify-center text-center p-10 bg-white rounded-lg shadow-2xl">
        <motion.div
            className="text-green-500"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-24 h-24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </motion.div>
        <h1 className="text-4xl font-semibold text-gray-800 mt-3">Payment Successful</h1>
        <p className="text-gray-600 text-xl mt-2">Thank you for your purchase. Your payment has been successfully processed.</p>
        <p className="text-gray-600 text-md mt-1">You will be redirected shortly...</p>
        <Link 
            href="/home"
            className="mt-4 bg-cta text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:scale-[1.01]"
        >
            Visit Dashboard
        </Link>
        </div>
    </div>
    
  );
};

export default PaymentSuccess;
