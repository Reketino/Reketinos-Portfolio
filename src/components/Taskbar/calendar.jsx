"use client";

import React from 'react'

export default function Calendar() {
    const now = new Date();
    const year = now.getFullYear();
    const monthIndex = now.getMonth();

    const monthLabel = now.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    const today = now.getDate();

    const daysInMonth = new Date( year, monthIndex + 1, 0).getDate();

    const firstDay = new Date(year, monthIndex, 1).getDay();

    const mondayOffset = (firstDay + 6) % 7;

  return (
    <main className='flex flex-col gap-3 text-sm text-white
    '>

     <header className='text-center font-semibold capitalize
     '>
        {monthLabel}
        </header> 

        <section className='grid grid-cols-7 gap-1 text-center text-xs opacity-70
        '>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
        <div 
        key={d}>{d}
        </div>
        ))}
        </section>

        <label className='grid grid-cols-7 gap-1 text-center'>
            {Array.from({ length: mondayOffset }).map((_,i) => (
                <div 
                key={`empty-${i}`}
                />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isToday = day === today;

                return (
                    <section
                    key={day}
                    className={`py-1 rounded-md ${
                        isToday
                        ? "bg-amber-500 text-white font-semibold"
                        : "hover:bg-white/10"
                    }`}
                    >
                   {day}
                   </section>
                );
            })}
        </label>
    </main>
  );
}
