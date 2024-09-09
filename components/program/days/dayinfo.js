import Footer from "./footer";
import HeaderSection from "./headers";
import SidebarSteps from "./rightSideBar";
import { UserDetail } from '@/utils/userdetail';

const DayInfo = async ({weekDetail, weekNumber, dayNumber}) => {
    const userDetail = await UserDetail();
    const currentWeek = userDetail ? userDetail.currentWeek : null;
    const currentDay = userDetail ? userDetail.currentDay : null;
    console.log(currentDay, currentWeek)
    const dayDetail = weekDetail.days[dayNumber-1]
    const data = dayDetail.details

    const isCurrentDay = parseInt(weekNumber) === currentWeek && parseInt(dayNumber) === currentDay;

    return (
        <div className="flex flex-col md:flex-row flex-grow h-screen">
            {/* Main content area */}
            <div className="flex-grow flex flex-col">
                <div className="sticky top-0 z-30">
                    <HeaderSection weekNumber={weekNumber} dayNumber={dayNumber} currentDay={currentDay} currentWeek={currentWeek} />
                </div>
                <div className="overflow-y-auto flex-grow bg-[#fcfbfb] px-4">
                    <div className="text-sm text-black border-gray-200 border-b-2 mb-4 pb-4 mt-16 w-full md:w-3/4 max-w-4xl mx-auto overflow-y-auto font-"
                    dangerouslySetInnerHTML={{
                        __html: data.replace(/<p>/g, '<p class="mb-[10px]   text-[16px] text-black leading-[1.625] tracking-[-0.00625] text-wrap">')
                        .replace(/<h1>/g, '<h1 class="mb-3 text-[24px] font-bold leading-[1.2] tracking-[-0.00625]">')
                        .replace(/<h2>/g, '<h2 class="text-[19px] font-semibold mt-6 mb-3 leading-[1.2] tracking-[-0.01]">')
                        .replace(/<h3>/g, '<h3 class="text-lg font-semibold mb-2 leading-[1.2] tracking-[-0.00625]">')
                        .replace(/<ul>/g, '<ul class="list-disc list-outside mb-[10px] pl-[27px] leading-[1.2] tracking-[-0.00625]">')
                        .replace(/<ol>/g, '<ol class="list-decimal list-outside mb-[10px] pl-[27px] leading-[1.2] tracking-[-0.00625]">')
                        .replace(/<li>/g, '<li class="mb-[10px]   text-[16px] text-black leading-[1.625] tracking-[-0.00625] text-wrap">')
                        .replace(/<a /g, '<a class="text-purple-600 underline leading-[1.2] tracking-[-0.00625]" ')
                        .replace(/<strong>/g, '<strong class="font-semibold leading-[1.2] tracking-[-0.00625]">')
                        .replace(/<blockquote>/g, '<blockquote class="leading-[1.2] text-[16px] my-[14px] px-8 mr-8 py-4 tracking-[-0.00625] border-l-4 bg-blue-50  border-cta">')
                    }}
                    />
                    <div className="w-full md:w-3/4 max-w-4xl mx-auto">
                        <Footer 
                            isCurrentDay={isCurrentDay}
                            weekNumber={weekNumber}
                            dayNumber={dayNumber}
                        />
                    </div>
                </div>
            </div>

            {/* Right sidebar */}
            <div className="w-full md:w-64 hidden md:block">
                <SidebarSteps weekNumber={weekNumber} dayNumber={dayNumber} weekDetail={weekDetail} currentWeek={currentWeek} currentDay={currentDay} />
            </div>
        </div>
    )
}

export default DayInfo;
