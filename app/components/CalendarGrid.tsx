"use client";

import { Fragment } from "react/jsx-runtime";
import { CalendarGridProps } from "@/app/types/calendar";
import { getWeekDays } from "@/app/utils/getWeekDays";
import WeekCell from "./WeekCell";
import TimeCell from "./TimeCell";
import SlotCell from "./SlotCell";

export default function CalendarGrid({ step, days, currentDate, rowSlots, columnSlots }: CalendarGridProps) {
    const rowEnd = rowSlots.length - 1;
    const columnEnd = columnSlots.length - 1;
    const weekRow = getWeekDays(currentDate, days);

    return (
        <div className="relative w-full h-full overflow-auto">
            <div
                className="sticky top-0 grid w-full h-10 z-1 border-gray-400 font-semibold text-gray-100"
                style={{ gridTemplateColumns: `5rem repeat(${days}, minmax(10rem, 1fr))` }}
            >
                <div className="sticky left-0 flex justify-center items-center border-r border-b border-inherit bg-gray-800">Time</div>
                {weekRow.map(({ date, label }, i) => (
                    <WeekCell key={`week-cell-${i}`} date={date} label={label} />
                ))}
            </div>

            <div
                className="grid z-0"
                style={{ gridTemplateColumns: `5rem repeat(${days}, minmax(10rem, 1fr))`, gridTemplateRows: `repeat(${rowSlots.length}, 1.875rem)` }}
            >
                {rowSlots.map((_, rowIndex) => (
                    <Fragment key={`row-${rowIndex}`}>
                        <TimeCell key={`time-cell-${rowIndex}`} step={step} rowIndex={rowIndex} rowEnd={rowEnd} />

                        {columnSlots.map((_, columnIndex) => {
                            return (
                                <Fragment key={`cell-${rowIndex}-${columnIndex}`}>
                                    <SlotCell rowIndex={rowIndex} columnIndex={columnIndex} rowEnd={rowEnd} columnEnd={columnEnd} />
                                </Fragment>
                            );
                        })}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
