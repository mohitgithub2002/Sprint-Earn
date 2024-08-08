import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-xl font-bold">Sprint Earn AI</div>
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full">Upgrade</button>
          <i className="fas fa-bell text-xl"></i>
          <i className="fas fa-gift text-xl"></i>
          <i className="fas fa-user-circle text-xl"></i>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-row-reverse flex-grow">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold mb-4">Recent Chats </h2>
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

        {/* Main Area */}
        <div className="flex flex-col items-center justify-center p-8 flex-grow">
          <div className='flex-1 flex items-center'> 
            <div>
              <h1 className="text-4xl font-bold text-center">Welcome to Script</h1>
              <p className="text-center text-gray-600 mb-8">
                Get started by Script a task and Chat can do the rest. Not sure where to start?
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
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

          <div className="flex items-center justify-center">
            <div className="flex-grow max-w-xl">
              <div className="flex items-center bg-white p-4 rounded-full shadow-md">
                <input
                  type="text"
                  placeholder="Summarize the latest..."
                  className="flex-grow p-2 rounded-l-full outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
             
              <footer className=" text-center text-gray-500">
                Script may generate inaccurate information about people, places, or facts. Model: Script AI v1.3
              </footer>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Chat;
