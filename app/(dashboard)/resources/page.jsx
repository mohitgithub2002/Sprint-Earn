'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-100 p-8 pb-20 text-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-12 text-green-700"
      >
        Unlock Your Potential
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
      >
        <div className="md:flex items-stretch">
          <div className="md:w-2/5 relative overflow-hidden">
            <Image
              src="/sprintearn-playbook-cover.png"
              alt="SprintEarn Playbook Cover"
              width={400}
              height={700}
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="bg-green-600 text-xs uppercase py-1 px-2 rounded-full">New</span>
            </div>
          </div>
          <div className="p-8 md:w-3/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">SprintEarn Playbook</h2>
              <p className="text-lg text-gray-600 mb-6">Unlock the secrets to maximizing your earning potential through strategic sprints. This comprehensive guide is your key to mastering productivity and skyrocketing your income.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Updated weekly with fresh strategies
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                100+ pages of expert content and case studies
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Actionable  templates
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Exclusive access to SprintEarn community
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://sprintearn.s3.ap-south-1.amazonaws.com/Sprint+Earn+Playbook+-+2.0.pdf"
              className="mt-8 inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Download Now
            </motion.a>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 text-center mb-8"
      >
        <p className="text-xl text-green-700 font-semibold">More game-changing resources coming soon. Stay ahead of the curve!</p>
      </motion.div>
    </div>
  );
};

export default ResourcesPage;
