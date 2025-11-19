import { SlotCellProps } from "@/types/calendar";

export default function SlotCell({ rowIndex, columnIndex, rowEnd, columnEnd }: SlotCellProps) {
    return (
        <div
            className="h-full border-b border-r bg-gray-100 cursor-pointer transition-colors hover:bg-gray-200"
            style={{
                gridArea: `${rowIndex + 1} / ${columnIndex + 2}`,
                borderRight: columnIndex === columnEnd ? "none" : "",
                borderBottom: rowIndex === rowEnd ? "none" : "",
            }}
        />
    );
}
