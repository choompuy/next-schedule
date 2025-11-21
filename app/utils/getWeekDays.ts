const formatDateLabel = (date: Date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" }); // Mon, Tue…
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");

    return `${weekday} ${day}.${month}`; // Mon 20.11
};

export const getWeekDays = (startDate: Date, days: number) => {
    return Array.from({ length: days }).map((_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        return { date, label: formatDateLabel(date) };
    });
};
