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

export type TimeSlot = {
    startTime: Date;
    endTime: Date;
};

export type CalendarView = "day" | "3days" | "week";

export type CalendarProps = {
    view: CalendarView;
    startDate: Date;
    schedule: Schedule[];
    lessons: Lesson[];
    onSlotSelect?: (slot: TimeSlot) => void;
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
    schedule: Schedule[];
    lessons: Lesson[];
    onSlotSelect?: (slot: TimeSlot) => void;
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

export type SlotType = "available" | "blocked" | "lesson";

export type SlotStatus = {
    type: SlotType;
    lesson?: Lesson;
    slots?: number;
};

export type SlotCellProps = {
    status: SlotStatus;
    rowIndex: number;
    columnIndex: number;
    rowEnd: number;
    columnEnd: number;
    onClick?: () => void;
};
