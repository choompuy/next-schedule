"use client";

import { CalendarHeaderProps } from "@/app/types/calendar";
import { shiftDate } from "@/app/utils/shiftDate";

export default function CalendarHeader({ days, startDate, currentDate, onChange }: CalendarHeaderProps) {
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + (days - 1));

    return (
        <div className="flex items-center justify-between p-2 border-b border-gray-400">
            <button className="p-2 rounded hover:bg-gray-200" onClick={() => onChange(shiftDate(currentDate, days, -1))}>
                {"<"}
            </button>

            <button className="font-semibold text-lg text-center text-balance text-gray-800" onClick={() => onChange(new Date(startDate))}>
                {currentDate.toDateString()} - {endDate.toDateString()}
            </button>

            <button className="p-2 rounded hover:bg-gray-200" onClick={() => onChange(shiftDate(currentDate, days, 1))}>
                {">"}
            </button>
        </div>
    );
}
