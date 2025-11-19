import { TimeCellProps } from "@/types/calendar";

export default function TimeCell({ step, rowIndex, rowEnd }: TimeCellProps) {
    const formatTime = (mins: number) => {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    };

    const mins = rowIndex * step;

    return (
        <div
            className="sticky left-0 flex items-center justify-center p-1 border-b border-r bg-purple-50 text-xs"
            style={{ gridRow: rowIndex + 1, borderBottom: rowIndex === rowEnd ? "none" : "" }}
        >
            {formatTime(mins)}
        </div>
    );
}
