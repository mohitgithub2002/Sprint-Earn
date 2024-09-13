import WeekHeader from "@/components/program/weekheader";
import '@fortawesome/fontawesome-free/css/all.min.css';
import getData from "../getdata";
import DaysList from "@/components/program/weeks/dayslist";
import Link from 'next/link';

const Program = async ({ params }) => {
    const data = await getData();
    const week = params.week;
    const weekNumber = week.match(/\d+/)[0];
    const weekDetail = data[weekNumber - 1];

    return (
        <div className="h-screen bg-white flex flex-col space-y-4 px-4 md:px-8 overflow-scroll pb-20 md:pb-0">
            <div className="pt-4">
                <WeekHeader weekDetail={weekDetail} />
            </div>
            <Link href="/program" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <i className="fas fa-chevron-left mr-2"></i>
                <span>Back</span>
            </Link>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                <div className="w-full md:w-2/3 text-black md:p-4 space-y-4">
                    <h1 className="text-xl font-bold">Task List</h1>
                    <DaysList weekDetail={weekDetail} />
                </div>
                <div className="w-full md:w-1/3 text-black p-4">
                    <h1 className="text-xl font-bold">Activity</h1>
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                        {weekDetail.activity ? (
                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">{weekDetail.activity}</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <i className="fas fa-clipboard-list text-4xl text-gray-400"></i>
                                <p className="text-sm text-gray-500">No recent activity</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;
