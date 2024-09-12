export const dynamic = 'force-dynamic';
import ChatBox from "@/components/home/chatbox";
import ProgressCards from "@/components/home/progress";
import PremiumCard from "@/components/home/task";
import StartProgramCard from "@/components/home/startprogram";
import { UserDetail } from "@/utils/userdetail";

const Home = async() => {
  const data = await UserDetail()
  const hasStartedProgram = data.currentWeek > 1 || (data.currentWeek === 1 && data.currentDay > 1);

  return (
    <div className="min-h-screen bg-white flex flex-col space-y-4 px-4 md:px-8 text-black pb-20 md:mt-4">
      <div className="text-2xl md:text-2xl font-bold mt-4 text-left text-indigo-600">
        👋 Welcome,<span className="text-black">{data.name}!</span> 
      </div>
      <div className="w-full">
        <ChatBox />
      </div>
      {hasStartedProgram ? (
        <>
          <div className="w-full space-y-4">
            <h1 className="font-semibold text-xl md:text-2xl text-bg-primary">Progress</h1>
            <ProgressCards data={data} />
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold text-xl md:text-2xl text-bg-primary">Update</h1>
            <PremiumCard data={data} />
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <h1 className="font-semibold text-xl md:text-2xl text-bg-primary">Get Started</h1>
          <StartProgramCard data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
