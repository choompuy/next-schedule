export type Schedule = {
    startTime: string;
    endTime: string;
};

export type Lesson = {
    id: number;
    duration: number;
    student: string;
    startTime: string;
    endTime: string;
};

export type CalendarView = "day" | "3days" | "week";

export type CalendarProps = {
    view: CalendarView;
    startDate: Date;
    schedule: Schedule[];
    lessons: Lesson[];
    onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void;
};

export type CalendarHeaderProps = {
    days: number;
    startDate: Date;
    currentDate: Date;
    onChange: (newDate: Date) => void;
};

export type CalendarGridProps = {
    step: number;
    days: number;
    currentDate: Date;
    rowSlots: unknown[];
    columnSlots: unknown[];
};

export type WeekCellProps = {
    date: Date;
    label: string;
};

export type TimeCellProps = {
    step: number;
    rowIndex: number;
    rowEnd: number;
};

export type SlotCellProps = {
    rowIndex: number;
    columnIndex: number;
    rowEnd: number;
    columnEnd: number;
};
