'use client';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ScheduleTable = () => {
  const [selectedWeek, setSelectedWeek] = useState('Week 1');
  const [schedule, setSchedule] = useState([]); // State to hold the schedule data
  const [loading, setLoading] = useState(true); // To show loading state

  // Fetch the schedule data from the API
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await fetch('/api/weeklist'); // Call the API
        const data = await res.json();
        setSchedule(data.data); // Set the fetched schedule data
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error('Failed to fetch schedule', error);
      }
    };

    fetchSchedule();
  }, []);

  // Conditionally render the content if loading
  if (loading) {
    return <div>Loading...</div>;
  }

  const weekColors = {
    1: '#c8beff',
    2: '#ffceb8',
    3: '#b2eeff',
    4: '#cbfccf',
    5: '#c0dfff',
    6: '#ffecab',
  };

  const renderDesktopView = () => (
    <table className="min-w-full border-collapse w-4/5">
      <thead>
        <tr className="sticky left-0 top-0 right-0">
          <th className="p-4 border-b-2 border-gray-200 bg-gray-400 text-left">Week</th>
          {schedule[0]?.days.map((day, index) => (
            <th key={index} className="p-4 border-b-2 border-gray-200 bg-gray-400 text-left">
              {`Day ${day.day}`}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {schedule.map((week, index) => (
          <tr key={index}>
            {/* Render the Week Number */}
            <td className="p-4 border-b border-gray-200 bg-gray-100">
              <div className="flex justify-center items-center h-full w-full">
                <span>{`Week${week.week}`}</span>
              </div>
            </td>

            {/* Render the tasks for each day in that week */}
            {week.days.map((day, dayIndex) => (
              <td key={dayIndex} className="p-4 border border-gray-200">
                <div className={`rounded-lg p-4 shadow-md`} style={{ backgroundColor: weekColors[week.week] }}>
                  {day.title || 'No task scheduled'}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderMobileView = () => (
    <div className="w-[100vw] h-[100dvh] overflow-auto">
      <div className="flex space-x-4 bg-white p-2 overflow-x-scroll">
        {schedule.map((week) => (
          <button
            key={week.week}
            onClick={() => setSelectedWeek(`Week ${week.week}`)}
            className={`px-2 py-0.5 rounded-full text-sm border font-semibold text-wrap text-center ${
              selectedWeek === `Week ${week.week}` ? ' border-cta text-cta' : 'border-black text-black'
            }`}
          >
            {`Week${week.week}`}
          </button>
        ))}
      </div>
      <div className="mt-2 p-2">
        {schedule
          .find((week) => `Week ${week.week}` === selectedWeek)
          ?.days.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-around p-2 border border-gray-200 mb-2 rounded-lg shadow-md"
            >
              <h3 className="font-bold mb-1 text-center text-sm flex-1">{`Day ${day.day}`}</h3>
              <div className={`p-3 rounded-lg shadow-md text-center text-sm w-3/5`} style={{ backgroundColor: weekColors[parseInt(selectedWeek.split(' ')[1])] }}>
                {day.title || 'No task scheduled'}
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="h-screen overflow-y-scroll bg-white text-black">
      <div className="hidden md:block">{renderDesktopView()}</div>
      <div className="block md:hidden">{renderMobileView()}</div>
    </div>
  );
};

export default ScheduleTable;
