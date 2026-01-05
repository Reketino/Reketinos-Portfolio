import { useState } from "react";

export function useCalendar() {
  const todayDate = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
  );

  const [selectedDay, setSelectedDay] = useState(null);

  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  function changeMonth(offset) {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1)
    );
    setSelectedDay(null);
  }

  const today =
    year === todayDate.getFullYear() && monthIndex === todayDate.getMonth()
      ? todayDate.getDate()
      : null;

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const mondayOffset = (firstDay + 6) % 7;

  return {
    year,
    monthIndex,
    currentDate,
    today,
    daysInMonth,
    mondayOffset,
    selectedDay,
    setSelectedDay,
    changeMonth,
  };
}
