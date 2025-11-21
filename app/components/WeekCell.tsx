import { WeekCellProps } from "@/app/types/calendar";

export default function WeekCell({ date, label }: WeekCellProps) {
    return <div className="flex justify-center items-center border-r border-b border-inherit bg-gray-700 last:border-r-0">{label}</div>;
}
