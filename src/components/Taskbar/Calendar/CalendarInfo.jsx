"use client";

import { isNorwegianHoliday } from "@/lib/norwegianHolidays";
import { useEffect, useState, useRef } from "react";

export default function CalendarInfo({ year, month, day, onClose }) {
  const holiday = isNorwegianHoliday(month, day);
  const date = new Date(year, month, day);

  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const lastKeyRef = useRef(null);

  async function fetchFact() {
    try {
      const res = await fetch(`/api/calendar-fact?month=${month}&day=${day}`);
      const data = await res.json();
      setFact(data.fact);
    } catch {
      setFact(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!day) return;

    const key = `${month}-${day}`;
    if (lastKeyRef.current === key) return;

    lastKeyRef.current = key;
    setFact(null);
    setLoading(true);
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

        {holiday ? (
          <p className="mt-1 text-red-500">{holiday.name} 🇳🇴</p>
        ) : (
          <p className="mt-1 text-neutral-400">No public holiday</p>
        )}

        {loading && (
          <p className="
          text-white/75 italic
          mt-1">
          Bear is trying to find a fun fact...
          </p>
        )}

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

        {!loading && fact === null && (
          <p className="
          text-white/65 italic
          mt-1
          ">
          Bear failed to find a fun fact
          </p>
        )}

      </section>

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
