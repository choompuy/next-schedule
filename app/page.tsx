"use client";

import { useEffect, useState } from "react";
import { Schedule, Lesson, TimeSlot } from "./types/calendar";
import { useResponsiveView } from "./utils/useResponsiveView";
import { SchedulesData } from "./data/schedules";
import { LessonsData } from "./data/lessons";
import Calendar from "./components/Calendar";

export default function Home() {
    const view = useResponsiveView();
    const [startDate, setStartDate] = useState(new Date());
    const [schedule, setSchedule] = useState<Schedule[]>([]);
    const [lessons, setLessons] = useState<Lesson[]>([]);

    const onSlotSelect = ({ startTime, endTime }: TimeSlot) => {
        alert(`Cell: ${startTime}`);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
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
