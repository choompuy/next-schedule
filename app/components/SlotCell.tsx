import { memo, useState } from "react";
import { SlotCellProps } from "@/app/types/calendar";

const SlotCell = ({ status, rowIndex, columnIndex, rowEnd, columnEnd, onClick }: SlotCellProps) => {
    let bgColor = "bg-gray-100";
    let cursor = "cursor-default";

    if (status) {
        switch (status.type) {
            case "available":
                bgColor = "bg-green-200 hover:bg-green-300";
                cursor = "cursor-pointer";
                break;
            case "lesson":
                bgColor = "bg-red-300 hover:bg-red-400";
                cursor = "cursor-pointer";
                break;
            default:
                break;
        }
    }

    const getRowSpan = () => {
        return status.slots ? status.slots : 1;
    };

    const getLabel = () => {
        if (!status.lesson) return;
        const l = status.lesson;
        return `${l.student}, duration: ${l.duration}min`;
    };

    const handleClick = () => {
        if (status.type === "blocked") return;
        if (status.type === "available") return onClick?.();

        if (status.lesson) {
            const l = status.lesson;
            alert(`Student: ${l.student}\nDuration: ${l.duration}min`);
        }
    };

    return (
        <div
            className={`h-full flex justify-center items-center p-2 border-b border-r border-gray-300 text-sm text-center text-balance text-gray-800 ${bgColor} ${cursor}`}
            style={{
                gridRowStart: rowIndex + 1,
                gridRowEnd: `span ${getRowSpan()}`,
                gridColumn: columnIndex + 2,
                borderRight: columnIndex === columnEnd ? "none" : "",
                borderBottom: rowIndex === rowEnd ? "none" : "",
            }}
            onClick={handleClick}
            title={getLabel()}
        >
            {getLabel()}
        </div>
    );
};

export default memo(SlotCell);
