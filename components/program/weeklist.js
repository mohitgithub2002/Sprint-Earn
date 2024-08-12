'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CourseCard from "@/components/program/weekcard";
import { checkUser } from '@/utils/auth';

const WeekList = ({ data }) => {
    const [currentWeek, setCurrentWeek] = useState(1);
    const [currentDay, setCurrentDay] = useState(1);

    useEffect(() => {
        const fetchCurrentWeek = async () => {
            const data = await checkUser();
            const result = data.currentWeek;
            setCurrentWeek(result);
            setCurrentDay(data.currentDay);
        };

        fetchCurrentWeek();
    }, []);

    if (currentWeek === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((weekData, index) => (
                <div key={index}>
                    {index + 1 <= currentWeek ? (
                        <Link href={`/program/week${index + 1}`}>
                            <CourseCard data={weekData} currentDay={currentDay} currentWeek={currentWeek} />
                        </Link>
                    ) : (
                        <div className="opacity-80">
                            <CourseCard data={weekData} currentWeek={currentWeek} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default WeekList;
