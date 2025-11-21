"use client";

import { useState } from "react";
import { CalendarProps } from "@/app/types/calendar";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar({ view, startDate, schedule, lessons, onSlotSelect }: CalendarProps) {
    const [currentDate, setCurrentDate] = useState<Date>(startDate);
    const days = view === "day" ? 1 : view === "3days" ? 3 : 7;
    const step = 30;
    const rowSlots = Array.from({ length: (24 * 60) / step });
    const columnSlots = Array.from({ length: days });

    return (
        <div className="flex-1 flex flex-col border border-gray-400 bg-background rounded-md overflow-hidden">
            <CalendarHeader days={days} startDate={startDate} currentDate={currentDate} onChange={setCurrentDate} />

            <CalendarGrid step={step} days={days} currentDate={currentDate} rowSlots={rowSlots} columnSlots={columnSlots} />
        </div>
    );
}
