export default function WeekRow({ view }: { view: number }) {
    const slots = Array.from({ length: view });

    return slots.map((value, index) => (
        <div key={index} className="flex justify-center items-center border-r border-b bg-purple-100 font-semibold last:border-r-0">
            Week
        </div>
    ));
}
