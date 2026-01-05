import { isNorwegianHoliday } from "@/lib/norwegianHolidays"

export default function CalendarGrid({
    daysInMonth,
    mondayOffset,
    today,
    monthIndex,
    selectedDay,
    onSelect,
}) {

    const totalCells = 42;
    const trailing = totalCells - (mondayOffset + daysInMonth);


  return (
    <section className="
    grid grid-cols-7
    grid-rows-6 gap-1
    text-center
    ">
      {Array.from({ length: mondayOffset }).map((_, i) => (
        <div
        key={`empty-${i}`} />
      ))}
      
      {Array.from({ length: daysInMonth }).map((_, i) => {
        
        
        const day = i + 1;
        const holiday = isNorwegianHoliday(monthIndex, day);
        const isSelected = day === selectedDay;


        return (
            <button
            key={day}
            onClick={() => onSelect(day)}
            className={`
            flex items-center
            justify-center
            rounded-md h-6
            ${isSelected ? "bg-amber-500 text-amber-200 font-semibold" : ""}
            ${day === today && isSelected ? "bg-amber-500 text-white font-semibold": ""}
            ${holiday ? "text-red-400 font-semibold" : ""}
            hover:bg-white/10
            `}
            >
            {day}
            </button>
        );
      })}

      {Array.from({ length: trailing }).map((_, i) => (
        <div 
        key={`trail-${i}`} />
      ))}
    </section>
  )
}
