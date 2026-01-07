"use client";

import { isNorwegianHoliday } from "@/lib/norwegianHolidays";
import { useEffect, useState, useRef } from "react";

export default function CalendarInfo({ year, month, day, onClose }) {
  

  // Check if date is holiday in Norway
  const holiday = isNorwegianHoliday(month, day);

  // Making Date-object
  const date = new Date(year, month, day);

  // Text fetched from API used as "fact"
  const [fact, setFact] = useState(null);

  // Loading-state shown in UI
  const [loading, setLoading] = useState(false);

  // UseRef for remembering last mont-day
  // w/o triggering re-render
  const lastKeyRef = useRef(null);

  // Funfact from API
  async function fetchFact() {
    try {

      // API endpoint
      const res = await fetch(`/api/calendar-fact?month=${month}&day=${day}`);
      
      // Parsing for JSON-response
      const data = await res.json();
     
      // Facts in state
      setFact(data.fact);
    } catch {
      setFact(null);
    } finally {
      setLoading(false);
    }
  }

  // Useeffect running when day/month is changed
  useEffect(() => {
    // If no date yet do nothing
    if (!day) return;

    // Key for month/day
    const key = `${month}-${day}`;
    
    // If facts already shown on date
    // -> Do not pick new fact
    if (lastKeyRef.current === key) return;
    
    // New date = update ref
    lastKeyRef.current = key;
    
    // Reset old fact
    setFact(null);
    
    // Loading before fetch
    setLoading(true);

    // New fact
    fetchFact();
  }, [month, day]);

  return (
    <main
      className="
      relative rounded-tr-4xl
      inline-flex items-start
      gap-4 px-3 py-1.5
    bg-amber-400/50 backdrop-blur-3xl  
      border border-white/10
      text-xs shadow-lg
    "
    >
      <section>
        <p
          className="
          uppercase tracking-wide text-white
            "
        >
          {date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
        </p>
        

      {/* Showcasing pubilc holiday in Calendar */}
        {holiday ? (
          <p className="mt-1 text-red-500">{holiday.name} 🇳🇴</p>
        ) : (
          <p className="mt-1 text-neutral-400">No public holiday</p>
        )}


      {/* Loading message in funfact window */}
        {loading && (
          <p
            className="
          text-white/75 italic
          mt-1"
          >
            Bear is trying to find a fun fact...
          </p>
        )}
      

      {/* Funfact loaded & showing */}
        {!loading && fact && (
          <p
            className="
         text-white/85 italic
         mt-1 max-w-[200px]
          "
          >
            Fun fact: {fact}
          </p>
        )}

      {/* Message if no fun fact */}
        {!loading && fact === null && (
          <p
            className="
          text-white/65 italic
          mt-1
          "
          >
            Bear failed to find a fun fact
          </p>
        )}
      </section>

    {/* Button to exit Holiday/funfact section */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
        ml-auto px-2 py-1
        rounded-xl
        text-white
        hover:bg-white/15
        hover:text-amber-400
        leading-none
        transition
        "
      >
        X
      </button>
    </main>
  );
}
