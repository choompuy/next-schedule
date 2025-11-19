"use client";

import { CalendarProps } from "@/types/calendar";
import CalendarGrid from "./CalendarGrid";

export default function Calendar(props: CalendarProps) {
    const { view, startDate, schedule, lessons, onSlotSelect } = props;

    return (
        <div className="w-full border rounded-xl bg-background">
            <CalendarGrid view={view} startDate={startDate} schedule={schedule} lessons={lessons} onSlotSelect={onSlotSelect} />
        </div>
    );
}
