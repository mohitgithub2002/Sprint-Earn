import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col pb-12 md:pb-0">
      {/* Header */}
      <header className="flex items-center justify-end md:justify-between p-4 bg-white">
        <div className="hidden md:block text-xl font-bold">Sprint Earn AI</div>
        <div className="flex  items-center space-x-4">
          
          <button className="bg-cta text-white px-4 py-2 rounded-full hidden md:block">New Chat</button>
          {/* <i className="fas fa-user-circle text-xl hidden md:inline"></i> */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row-reverse flex-grow">
        {/* Sidebar */}
        <div
          className={`fixed md:relative top-0 right-0 h-full w-3/4 max-w-xs bg-white p-4 shadow-md transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-20 md:w-1/4 md:translate-x-0`}
        >
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-lg font-bold">Recent Chats</h2>
            <button onClick={toggleSidebar}>
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <button className="bg-cta text-white px-4 py-2 rounded-full mb-4 md:hidden"> New Chat</button>
          <ul className="space-y-2 overflow-y-auto">
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">New Project</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Learning From 100 Years of...</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Research Officiants</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">What does a senior lead de...</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Write a sweet note to your...</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Meet with cake bakers</li>
            <li className="p-2 border border-slate-400 bg-gray-100 rounded-full">Meet with cake bakers</li>
          </ul>
        </div>

        {/* Overlay for Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Area */}
        <div className="flex flex-col items-center justify-center p-4 md:p-8 flex-grow">
          <div className="flex-1 flex items-center">
            <div className="w-full text-center">
              <h1 className="text-2xl md:text-4xl font-bold">Welcome to Sprint Earn</h1>
              <p className="text-center text-gray-600 mb-4 md:mb-8">
                Get started by SprintEarn Chat. Not sure where to start?
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8 max-w-md mx-auto">
                <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-md">
                  <span className="font-bold">Write copy</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg shadow-md">
                  <span className="font-bold">Image generation</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg shadow-md">
                  <span className="font-bold">Create avatar</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-pink-100 rounded-lg shadow-md">
                  <span className="font-bold">Write code</span>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <i className="fas fa-wand-magic-sparkles"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="flex items-center bg-white p-4 rounded-full shadow-md">
              <input
                type="text"
                placeholder="Summarize the latest..."
                className="flex-grow p-2 rounded-l-full outline-none"
              />
              <button className="bg-cta text-white px-4 py-2 rounded-full">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
