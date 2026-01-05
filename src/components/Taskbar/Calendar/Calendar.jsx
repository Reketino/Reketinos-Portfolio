"use client";

import { useCalendar } from "./useCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import CalendarInfo from "./CalendarInfo";

export default function Calendar() {
  const {
    year,
    monthIndex,
    currentDate,
    today,
    daysInMonth,
    mondayOffset,
    selectedDay,
    setSelectedDay,
    changeMonth,
  } = useCalendar();
  return (
    <main
    onMouseDown={(e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }}
    onPointerDown={(e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }}
    className="
    flex flex-col gap-3
    text-white text-sm
    ">
      {selectedDay && (
        <CalendarInfo
        year={year}
        month={monthIndex}
        day={selectedDay}
        onClose={() => setSelectedDay(null)}
        />
      )}


      <CalendarHeader
      label={currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })}
      onPrev={()=> changeMonth(-1)}
      onNext={() => changeMonth(1)}
      />
      
      <section className="
      grid grid-cols-7
      uppercase tracking-wide
      text-[10px] text-center
    text-neutral-400
      ">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",].map((d) => (
          <div 
          key={d}
          className="
          pt-1 pb-1
          ">
            {d}
          </div>
        ))}
      </section>


      <CalendarGrid
      daysInMonth={daysInMonth}
      mondayOffset={mondayOffset}
      today={today}
      monthIndex={monthIndex}
      selectedDay={selectedDay}
      onSelect={setSelectedDay}
      />
    </main>
  )
}
