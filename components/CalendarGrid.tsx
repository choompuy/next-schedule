"use client";

import { Fragment } from "react/jsx-runtime";
import { CalendarProps } from "@/types/calendar";
import WeekRow from "./WeekRow";
import TimeCell from "./TimeCell";
import SlotCell from "./SlotCell";

export default function CalendarGrid({ view }: CalendarProps) {
    const step = 30;
    const totalMinutes = 24 * 60;
    const rowSlots = Array.from({ length: totalMinutes / step });
    const columnSlots = Array.from({ length: view });
    const rowEnd = rowSlots.length - 1;
    const columnEnd = columnSlots.length - 1;

    return (
        <div className="relative overflow-auto" style={{ maxHeight: "50vh" }}>
            <div className="sticky top-0 grid w-full h-10 z-1" style={{ gridTemplateColumns: `90px repeat(${view}, minmax(160px, 1fr))` }}>
                <div className="sticky left-0 flex justify-center items-center border-r border-b font-semibold bg-purple-200">Time</div>
                <WeekRow view={view} />
            </div>

            <div
                className="grid z-0"
                style={{ gridTemplateColumns: `90px repeat(${view}, minmax(160px, 1fr))`, gridTemplateRows: `repeat(${rowSlots.length}, 30px)` }}
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
