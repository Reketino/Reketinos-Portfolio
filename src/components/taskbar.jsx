import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Taskbar() {
  const [time, setTime] = useState(new Date());

  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

 
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = time.toLocaleDateString("nb-NO", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  return (
    <div className="taskbar fixed bottom-0 left-0 w-full backdrop-blur-md bg-white/10 border-t border-white/20 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] text-white px-4 py-2 flex items-center justify-between z-50">
     
      <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-1 rounded-md transition">
        <span className="text-lg">🪟</span>
        <span className="text-sm font-medium hidden sm:block">Start</span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hover:bg-white/20 transition rounded-md">
        <Link href="https://github.com/Reketino" className="mx-2 text-sm">&copy; {new Date().getFullYear()} Reketino</Link>
      </div>

 
      <div className="flex gap-3">
       
      
      </div>

     
      <div className="text-right leading-tight">
        <div className="text-sm font-medium">{formattedTime}</div>
        <div className="text-xs text-white/80">{formattedDate}</div>
      </div>
    </div>
  );
}