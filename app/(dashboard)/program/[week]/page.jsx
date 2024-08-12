import WeekHeader from "@/components/program/weekheader";
import '@fortawesome/fontawesome-free/css/all.min.css';
import getData from "../getdata";
import Link from "next/link";
import DaysList from "@/components/program/weeks/dayslist";
const current = 2
const days = [
  {
    day: "day 1",
    title: "Discover & Define",
    isCompleted: true
  },
  {
    day: "day 2",
    title: "Prototype and Pre-Sell",
    isCompleted: true
  },
  {
    day: "day 3",
    title: "Launch & Learn",
    isCompleted: false
  },
  {
    day: "day 4",
    title: "Build Your Brand Online",
    isCompleted: false
  },
  {
    day: "day 5",
    title: "Iterate and Improve",
    isCompleted: false
  },
  {
    day: "day 6",
    title: "Sales & Marketing Mastery",
    isCompleted: false
  }
]

const Program = async({params}) => {
    const data = await getData();
    const week = params.week
    const weekNumber = week.match(/\d+/)[0];
    console.log("my week is =>"+weekNumber)
    const weekDetail = data[weekNumber-1]
    console.log(weekDetail)
    return (
      <div className="h-screen bg-white flex flex-col flex-1 space-y-4 px-8 overflow-scroll">
        <div className="pt-4">
            <WeekHeader weekDetail = {weekDetail}/>
        </div>
        <div className="flex space-x-12">
          <div className=" w-2/3 text-black p-4 space-y-4">
              <h1 className="text-xl font-bold">Task List</h1>
              <DaysList weekDetail={weekDetail} />
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