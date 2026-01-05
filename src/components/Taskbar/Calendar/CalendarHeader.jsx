import React from "react";

export default function CalendarHeader({ label, onPrev, onNext }) {
  return (
    <header
      className="
    flex items-center
    justify-between
    font-semibold
    "
    >
      <button
        onClick={onPrev}
        className="
      px-2 py-1 rounded
      hover:bg-white/10
      "
      >
        ‹
      </button>
      <span
        className="
      capitalize
      "
      >
        {label}
      </span>
      <button
        onClick={onNext}
        className="
      px-2 py-1 rounded
      hover:bg-white/10
      "
      >
        ›
      </button>
    </header>
  );
}
