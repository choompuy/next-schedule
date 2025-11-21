import { SlotCellProps } from "@/app/types/calendar";

export default function SlotCell({ rowIndex, columnIndex, rowEnd, columnEnd }: SlotCellProps) {
    return (
        <div
            className="h-full border-b border-r border-gray-300 bg-gray-100"
            style={{
                gridArea: `${rowIndex + 1} / ${columnIndex + 2}`,
                borderRight: columnIndex === columnEnd ? "none" : "",
                borderBottom: rowIndex === rowEnd ? "none" : "",
            }}
        />
    );
}
