import DayInfo from "@/components/program/days/dayinfo";
import getData from "../../getdata";
import { redirect } from "next/navigation";
import {UserDetail} from "@/utils/userdetail";

export default async function Days({ params }) {
    const day = params.day;
    const week = params.week;
    const weekNumber = parseInt(week.match(/\d+/)[0], 10);
    const dayNumber = parseInt(day.match(/\d+/)[0], 10);
    const data = await getData();
    const userDetails = await UserDetail();
    const currentWeekNumber = userDetails.currentWeek;
    const currentDayNumber = userDetails.currentDay;

    if (weekNumber > currentWeekNumber || (weekNumber === currentWeekNumber && dayNumber > currentDayNumber)) {
        redirect(`/program/week${currentWeekNumber}/day${currentDayNumber}`);
        return null;
    }

    const weekDetail = data[weekNumber - 1];

    return (
        <DayInfo weekDetail={weekDetail} weekNumber={weekNumber} dayNumber={dayNumber} />
        // <Welcome />
    )
}