import { useEffect, useState } from "react";
import type { CalendarView } from "@/app/types/calendar";

export const useResponsiveView = () => {
    const [view, setView] = useState<CalendarView>("day");

    useEffect(() => {
        function update() {
            const w = window.innerWidth;

            if (w < 600) setView("day");
            else if (w < 900) setView("3days");
            else setView("week");
        }

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    return view;
};
