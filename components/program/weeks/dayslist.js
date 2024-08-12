'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { checkUser } from '@/utils/auth';

const DaysList = ({ weekDetail }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        // Simulate fetching the current value
        const fetchCurrent = async () => {
            // Replace this with your actual function call
            const data = await checkUser();
            const currentWeek = data.currentWeek
            if(weekDetail.week < currentWeek) setCurrent(8)
            else if(weekDetail.week > currentWeek) setCurrent(0)
            else {
                 setCurrent(data.currentDay) 
            }
            
        };

        fetchCurrent();
    }, []);

    if (current === null) {
        return <div>Loading...</div>; // or some loading state
    }

    return (
        <div className="flex flex-col space-y-6">
            {weekDetail.days.map((day, index) => (
                <div key={index}>
                    <div className="flex pl-8 pr-3 py-2 justify-between items-center border border-slate-700 rounded-full shadow-md hover:scale-[1.02] transition-all">
                        <div><i className={`far fa-calendar mr-3`}></i>{`Day ${index + 1}`}</div>
                        <h1 className="font-semibold text-lg">{day.title}</h1>
                        {index+1 > current ?
                            <i className={`fas fa-lock mr-10`}></i>
                            :
                            <Link href={`/program/week${weekDetail.week}/day${day.day}`}>
                                <button className={`${index+1 < current ? "bg-[#e4e4e7] rounded-3xl text-black px-6 py-2.5" : "bg-[#2d2de1] rounded-3xl text-white px-6 py-2.5"}`}>{index+1 < current ? "View" : "Start"}</button>
                            </Link>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DaysList;
