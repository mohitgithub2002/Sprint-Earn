"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

const LoaderComponent = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => (prevRotation + 10) % 360);
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-16 h-16">
            <div 
                className="absolute inset-0 border-4 border-gray-200 border-t-indigo-600 rounded-full"
                style={{ transform: `rotate(${rotation}deg)` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/loaderlogo.png"
                    alt="Loader Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
};

export default LoaderComponent;
