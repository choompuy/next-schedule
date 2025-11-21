"use client";

import { useEffect, useState } from "react";
import { CalendarView, Schedule, Lesson } from "@/app/types/calendar";
import { SchedulesData } from "./data/schedules";
import { LessonsData } from "./data/lessons";
import Calendar from "@/app/components/Calendar";

export default function Home() {
    const [view, setView] = useState<CalendarView>('day');
    const [startDate, setStartDate] = useState(new Date());
    const [schedule, setSchedule] = useState<Schedule[]>([]);
    const [lessons, setLessons] = useState<Lesson[]>([]);

    const onSlotSelect = () => {
        console.log('click');
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                setView("week");
                setStartDate(new Date(SchedulesData[0].startTime));
                setSchedule(SchedulesData);
                setLessons(LessonsData);
            } catch (error) {
                console.error(error);
            }
        };

        loadData();
    }, []);

    return (
        <main className="w-screen h-screen flex p-4">
            <div className="flex-1 flex flex-col p-4 gap-4 rounded-xl bg-white shadow-2xl overflow-hidden">
                <h1 className="text-2xl">Schedule</h1>
                <Calendar view={view} startDate={startDate} schedule={schedule} lessons={lessons} onSlotSelect={onSlotSelect} />
            </div>
        </main>
    );
}
