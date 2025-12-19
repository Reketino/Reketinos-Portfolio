"use client";

import { useState, useEffect } from "react";

export default function Clock({ clockFormat, showTimezone, onClick }) {
  const [time, setTime] = useState(new Date());

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

  const formattedDate = time.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <time
      onClick={onClick}
      className="
      flex flex-col
    text-right leading-tight
    text-[10px] cursor-pointer
    hover:bg-white/10
    px-2 py-1 rounded-md
    transition
    "
    >
      <span className="text-sm font-medium">{formattedTime}</span>
      <small className="text-xs text-white/70">{formattedDate}</small>
      
      <small className={`
      block h-1 leading-2
      text-[10px] text-white/50
      transition-opacity
      ${showTimezone ? "opacity-100" : "opacity-0"}
        `}
        >
      {timezone}
        </small>
    </time>
  );
}
