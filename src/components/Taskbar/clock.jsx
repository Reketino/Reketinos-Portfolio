"use client";

import { useState, useEffect} from 'react'

export default function Clock({
    clockFormat,
    showTimezone,
    onClick,
}) {
    const [time, setTime] = useState (new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = 
    clockFormat === "24h"
    ? time.toLocaleTimeString("nb-NO", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    const formattedDate = time.toLocaleDateString("nb-NO", {
        weekday: "short",
        day: "2-digit",
        month: "short",
    });
  return (
    <time
    onClick={onClick}
    className='
    text-right leading-tight
    text-[10px] cursor-pointer
    hover:bg-white/10
    px-2 py-1 rounded-md
    transition
    '
    >
        <label className='text-sm font-medium'>{formattedTime}</label>
        <label className='text-xs text-white/70'>{formattedDate}</label>

        {showTimezone && (
            <section className='text-[10px] text-white/50'>
                {timezone}
            </section>
        )}
    </time>
  );
}
