"use client";

import React, { useState } from 'react'

export default function Calendar() {
    const todayDate = new Date();


    const [year, setYear] = useState(todayDate.getFullYear());
    const [monthIndex, setMonthIndex] = useState(todayDate.getMonth());


    const currentDate = new Date(year, monthIndex, 1);


    function nextMonth() {
        setMonthIndex((prev) => {
            if (prev === 11) {
                setYear((y) => y + 1);
                return 0;
            }
            return prev + 1
        });
    }


    function prevMonth() {
        setMonthIndex((prev) => {
            if (prev === 0) {
                setYear((y) => y - 1);
                return 11;
            }
            return prev - 1
        });
    }


    const monthLabel = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });


    const today = 
    year === todayDate.getFullYear() &&
    monthIndex === todayDate.getMonth()
        ? todayDate.getDate()
        : null;


    const daysInMonth = new Date( year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const mondayOffset = (firstDay + 6) % 7;


  return (
    <main className='
    flex flex-col gap-3 
    text-sm text-white
    '>

     <header className='
     flex items-center justify-between font-semibold
     '>
        <button
        onClick={prevMonth}
        className='px-2 py-1 rounded hover:bg-white/10'
        >
            ‹ 
        </button>

        <span className='capitalize'>{monthLabel}</span>

        <button
        onClick={nextMonth}
        className='px-2 py-1 rounded hover:bg-white/10'
        >
            › 
        </button>
        
        </header> 

        <section className='
        grid grid-cols-7 
        text-center text-xs 
        gap-1 opacity-70
        '>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
        <div 
        key={d}>{d}
        </div>
        ))}
        </section>

        <section className='
        grid grid-cols-7 
        text-center gap-1 
        '>
            {Array.from({ length: mondayOffset }).map((_,i) => (
                <div 
                key={`empty-${i}`}
                />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isToday = day === today;

                const columnIndex = (mondayOffset + i) % 7;
                const isSunday = columnIndex === 6;

                return (
                    <div
                    key={day}
                    className={`py-1 rounded-md ${
                        isToday
                        ? "bg-amber-500 text-white font-semibold"
                        :isSunday
                        ? "text-red-400 hover:bg-red-500/10"
                        : "hover:bg-white/10"
                    }`}
                    >
                   {day}
                   </div>
                );
            })}
        </section>
    </main>
  );
}
