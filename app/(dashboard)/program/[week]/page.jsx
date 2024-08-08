'use client'
import WeekHeader from "@/components/program/weekheader";
import '@fortawesome/fontawesome-free/css/all.min.css';
import getData from "../getdata";
import Link from "next/link";
import { useEffect, useState } from "react";
const current = 2


const Program = ({params}) => {
    const week = params.week
    const weekNumber = week.match(/\d+/)[0];
    console.log("my week is =>"+weekNumber)
    const [weekDetail, setWeekDetail] = useState();
    useEffect(()=>{
      const fetchData = async()=>{
        const data = await getData();
        setWeekDetail(data[weekNumber-1])
        
      }
      fetchData();
    },[])
    
    
    console.log(weekDetail)
    if(!weekDetail) return <div>Loading...</div>
    return (
      <div className="h-screen bg-white flex flex-col flex-1 space-y-4 px-8 overflow-scroll">
        <div className="pt-4">
            <WeekHeader weekDetail = {weekDetail}/>
        </div>
        <div className="flex space-x-12">
          <div className=" w-2/3 text-black p-4 space-y-4">
              <h1 className="text-xl font-bold">Task List</h1>
              <div className="flex flex-col space-y-6">
                {weekDetail&&weekDetail.days.map((day, index) => (
                   <div key={index}>
                      <div className="flex pl-8 pr-3 py-2 justify-between items-center border border-slate-700 rounded-full shadow-md hover:scale-[1.02] transition-all"> 
                        <div><i className={`far fa-calendar mr-3`}></i>{`Day ${index+1}`}</div>
                        <h1 className="font-semibold text-lg">{day.title}</h1>
                        {index>current?
                        <i className={`fas fa-lock mr-10`}></i>
                        :
                        <Link href={`/program/${week}/day${day.day}`}>
                        <button className={`${index<current?"bg-[#e4e4e7] rounded-3xl text-black px-6 py-2.5":"bg-[#2d2de1] rounded-3xl text-white px-6 py-2.5"}`}>{index<current?"View":"Start"}</button>
                        </Link>
                        
                        }
                      </div>
                    </div>
                ))}
                </div>
          </div>
          <div className="w-1/3 text-black">
            <h1 className="text-xl font-bold"> Activity</h1>
            <div >

            </div>
          </div>
        </div>
      </div>  
    );
  };
  
  export default Program;