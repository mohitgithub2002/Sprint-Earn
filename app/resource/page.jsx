'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Modal from '@/components/Modal';

const Resource = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/freeresources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Send user to the website of sprintearn
        window.location.href = "https://sprintearn.com";
        setIsModalOpen(false);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 pb-20 text-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-center mb-12 text-green-800 tracking-tight"
      >
        Unlock Your <span className="text-emerald-600">Full Potential</span>
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
      >
        <div className="md:flex items-stretch">
          <div className="md:w-2/5 relative overflow-hidden">
            <Image
              src="/sprintearn-playbook-cover.png"
              alt="SprintEarn Playbook Cover"
              width={600}
              height={900}
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-70"></div>
            <div className="absolute top-4 left-4 text-white">
              <span className="bg-emerald-500 text-xs uppercase py-1 px-3 rounded-full font-bold tracking-wider">New Release</span>
            </div>
          </div>
          <div className="p-10 md:w-3/5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">SprintEarn Playbook</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Discover the secrets to maximizing your earning potential through strategic sprints. This comprehensive guide is your key to mastering productivity and skyrocketing your income in the digital age.</p>
            </div>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center text-lg text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <svg className="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Weekly updates with cutting-edge strategies
              </motion.div>
              <motion.div 
                className="flex items-center text-lg text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <svg className="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                100+ pages of expert content and case studies
              </motion.div>
              <motion.div 
                className="flex items-center text-lg text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <svg className="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Actionable templates and worksheets
              </motion.div>
              <motion.div 
                className="flex items-center text-lg text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <svg className="w-6 h-6 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Exclusive access to SprintEarn community
              </motion.div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="mt-10 inline-block px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Download Your Playbook Now
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-3xl font-bold text-green-800 mb-6">Stay Ahead of the Curve</h3>
        <p className="text-xl text-green-700 max-w-2xl mx-auto">More game-changing resources are on the horizon. Subscribe to our newsletter and be the first to access cutting-edge strategies for success.</p>
        <form className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 w-64 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-r-full hover:bg-green-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-800">Download Your Playbook</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-md shadow-md hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
            >
              Send via WhatsApp
            </motion.button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
        </motion.div>
      </Modal>
    </div>
  );
};

export default Resource;
