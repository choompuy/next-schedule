import { memo } from "react";
import { WeekCellProps } from "@/app/types/calendar";

const WeekCell = ({ date, label }: WeekCellProps) => {
    return <div className="flex justify-center items-center border-r border-b border-inherit bg-gray-700 text-center last:border-r-0">{label}</div>;
};

export default memo(WeekCell);
