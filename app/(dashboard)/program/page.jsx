'use client'
import CourseCard from "@/components/program/weekcard";
import WelcomeCard from "@/components/program/welcome";
import getData from "./getdata";
import Link from "next/link";
import { useEffect, useState } from "react";


const Program = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getData();
      setData(data);
    }
    fetchData();
  },[])
  console.log(data)
    return (
      <div className="h-screen bg-white flex flex-col flex-1 space-y-4 px-8 overflow-scroll">
        <div className="pt-4">
            <WelcomeCard />
        </div>
        <div className="space-y-4">
          <h1 className=" font-semibold text-2xl text-black">Program Details</h1>
          <div className="grid grid-flow-row grid-cols-3 gap-4">
            {data&&data.map((data,index)=>{
              return <Link href={`/program/week${index+1}`} key={index}><CourseCard data={data} /></Link>
          })}
          </div>
          
        </div>
      </div>  
    );
  };
  
  export default Program;