"use client";

import React, { useState } from "react";
import { isNorwegianHoliday } from "@/lib/norwegianHolidays";

export default function Calendar() {
  const todayDate = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
  );

  const [selectedDay, setSelectedDay] = useState(null);

  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  function nextMonth() {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }

  function prevMonth() {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }

  const monthLabel = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const today =
    year === todayDate.getFullYear() && monthIndex === todayDate.getMonth()
      ? todayDate.getDate()
      : null;

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const mondayOffset = (firstDay + 6) % 7;

  const totalCells = 42;
  const usedCells = mondayOffset + daysInMonth;
  const trailingEmptyCells = totalCells - usedCells;

  return (
    <main
      className="
    flex flex-col gap-3 
    text-sm text-white
    ">
      {selectedDay && (
        <section
          className="
          flex items-start justify-between
          rounded-md border border-white/10
          bg-white/5 backdrop-blur 
          px-4 py-3
          text-sm
          ">
          <p
            className="
            text-xs uppercase 
            tracking-wide text-neutral-400
            ">
            {new Date(year, monthIndex, selectedDay).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
              }
            )}
          </p>

          {(() => {
            const holiday = isNorwegianHoliday(monthIndex, selectedDay);

            if (holiday) {
              return (
                <p
                  className="
                  text-red-400 p-2 mt-1
                    ">
                  {holiday.name} 🇳🇴
                </p>
              );
            }

            return (
              <p
                className="
              text-neutral-300 p-3 mt-1
                ">
                No public holiday
              </p>
            );
          })()}
          <button
            onClick={() => setSelectedDay(null)}
            className="
            ml-3 text-sm 
          text-neutral-400 hover:text-white 
          ">
            ✕
          </button>
        </section>
      )}

      <header
        className="
        flex items-center justify-between font-semibold
        ">
        <button
          onClick={prevMonth}
          className="
          px-2 py-1 rounded hover:bg-white/10
          ">
          ‹
        </button>

        <span className="capitalize">{monthLabel}</span>

        <button
          onClick={nextMonth}
          className="
          px-2 py-1 rounded hover:bg-white/10
          ">
          ›
        </button>
      </header>

      <section
        className="
        grid grid-cols-7 
        text-center text-xs 
        gap-1 opacity-70
        ">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </section>

      <section
        className="
        grid grid-cols-7 grid-rows-6
        text-center gap-1 
        ">
        {Array.from({ length: mondayOffset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday = day === today;

          const columnIndex = (mondayOffset + i) % 7;
          const isSunday = columnIndex === 6;

          const holiday = isNorwegianHoliday(monthIndex, day);

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`
                h-6 flex items-center 
                justify-center rounded-md 
                hover:bg-white/10
                ${
                  isToday
                    ? "bg-amber-500 text-white font-semibold"
                    : holiday
                    ? "text-red-400 hover:bg-red-500/10 font-semibold"
                    : isSunday
                    ? "text-red-400 hover:bg-red-500/10"
                    : "hover:bg-white/10"
                }`}
            >
              {day}
            </button>
          );
        })}
        {Array.from({ length: trailingEmptyCells }).map((_, i) => (
          <div key={`trailing-${i}`} />
        ))}
      </section>
    </main>
  );
}
