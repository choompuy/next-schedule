export type ScheduleItem = {
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

export type CalendarProps = {
    view: number;
    startDate: Date;
    schedule: ScheduleItem[];
    lessons: Lesson[];
    onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void;
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