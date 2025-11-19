"use client";

import Calendar from "@/components/Calendar";
import { useState } from "react";

export default function Home() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <main className="p-4">
            <Calendar view={7} startDate={startDate} schedule={[]} lessons={[]} />
        </main>
    );
}
