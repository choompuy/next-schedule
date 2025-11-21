"use client";

import { memo } from "react";
import { Fragment } from "react/jsx-runtime";
import { CalendarGridProps, SlotStatus } from "@/app/types/calendar";
import { getWeekDays } from "@/app/utils/getWeekDays";
import WeekCell from "./WeekCell";
import TimeCell from "./TimeCell";
import SlotCell from "./SlotCell";

const CalendarGrid = ({ step, days, currentDate, schedule, lessons, onSlotSelect }: CalendarGridProps) => {
    const columnSlots = getWeekDays(currentDate, days);
    const rowSlots = Array.from({ length: (24 * 60) / step });
    const columnEnd = columnSlots.length - 1;
    const rowEnd = rowSlots.length - 1;
    const renderedLessons = new Set<number>();

    const getTime = (time: string) => new Date(time).getTime();

    const getSlotStatus = (slotStart: Date, slotEnd: Date): SlotStatus => {
        const slotTimeStart = slotStart.getTime();
        const slotTimeEnd = slotEnd.getTime();

        const lesson = lessons.find((l) => slotTimeStart >= getTime(l.startTime) && slotTimeEnd <= getTime(l.endTime));

        if (lesson) {
            return { type: "lesson", lesson: lesson, slots: lesson.duration / step };
        }

        const available = schedule.some((s) => slotTimeStart >= getTime(s.startTime) && slotTimeEnd <= getTime(s.endTime));
        if (available) return { type: "available" };

        return { type: "blocked" };
    };

    return (
        <div className="relative w-full h-full overflow-auto">
            <div
                className="sticky top-0 grid w-full h-10 z-1 border-gray-400 font-semibold text-gray-100"
                style={{ gridTemplateColumns: `5rem repeat(${days}, ${days >= 3 ? "minmax(10rem, 1fr)" : "1fr"})` }}
            >
                <div className="sticky left-0 flex justify-center items-center border-r border-b border-inherit bg-gray-800">Time</div>
                {columnSlots.map(({ date, label }, i) => (
                    <WeekCell key={`week-cell-${i}`} date={date} label={label} />
                ))}
            </div>

            <div
                className="grid z-0"
                style={{
                    gridTemplateRows: `repeat(${rowSlots.length}, 1.875rem)`,
                    gridTemplateColumns: `5rem repeat(${days}, ${days >= 3 ? "minmax(10rem, 1fr)" : "1fr"})`,
                }}
            >
                {rowSlots.map((_, rowIndex) => {
                    const slotStartMinutes = rowIndex * step;

                    return (
                        <Fragment key={`row-${rowIndex}`}>
                            <TimeCell key={`time-cell-${rowIndex}`} step={step} rowIndex={rowIndex} rowEnd={rowEnd} />

                            {columnSlots.map(({ date }, columnIndex) => {
                                const slotStart = new Date(date);
                                slotStart.setHours(0, 0, 0, 0);
                                slotStart.setMinutes(slotStartMinutes);
                                const slotEnd = new Date(slotStart);
                                slotEnd.setMinutes(slotEnd.getMinutes() + step - 1);

                                const status = getSlotStatus(slotStart, slotEnd);

                                if (status.lesson) {
                                    if (renderedLessons.has(status.lesson.id)) return;
                                    renderedLessons.add(status.lesson.id);
                                }

                                return (
                                    <SlotCell
                                        key={`cell-${rowIndex}-${columnIndex}`}
                                        status={status}
                                        rowIndex={rowIndex}
                                        columnIndex={columnIndex}
                                        rowEnd={rowEnd}
                                        columnEnd={columnEnd}
                                        onClick={() => status.type !== "blocked" && onSlotSelect?.({ startTime: slotStart, endTime: slotEnd })}
                                    />
                                );
                            })}
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default memo(CalendarGrid);
