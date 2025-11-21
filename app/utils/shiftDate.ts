export const shiftDate = (date: Date, days: number, direction: 1 | -1) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days * direction);
    return newDate;
};
