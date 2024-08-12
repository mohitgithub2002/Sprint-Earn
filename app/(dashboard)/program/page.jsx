
import CourseCard from "@/components/program/weekcard";
import WelcomeCard from "@/components/program/welcome";
import getData from "./getdata";
import Link from "next/link";
import WeekList from "@/components/program/weeklist";


const Program = async() => {
  const data = await getData();
  console.log(data)
    return (
      <div className="h-screen bg-white flex flex-col flex-1 space-y-4 px-8 overflow-scroll">
        <div className="pt-4">
            <WelcomeCard />
        </div>
        <div className="space-y-4">
          <h1 className=" font-semibold text-2xl text-black">Program Details</h1>
          <WeekList data={data} />
          
        </div>
      </div>  
    );
  };
  
  export default Program;