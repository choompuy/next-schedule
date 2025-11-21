import { memo } from "react";
import { TimeCellProps } from "@/app/types/calendar";

export const TimeCell = ({ step, rowIndex, rowEnd }: TimeCellProps) => {
    const formatTime = (mins: number) => {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    };

    const mins = rowIndex * step;

    return (
        <div
            className="sticky left-0 flex items-center justify-center p-1 border-b border-r border-gray-400 bg-gray-200 text-xs text-gray-500"
            style={{ gridRow: rowIndex + 1, borderBottom: rowIndex === rowEnd ? "none" : "" }}
        >
            {formatTime(mins)}
        </div>
    );
};

export default memo(TimeCell);
