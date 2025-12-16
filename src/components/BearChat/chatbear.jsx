"use client";
import { useState } from "react";
import BearChat from "./bearchat";

export default function ChatBear() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50
                bg-cyan-500 text-black
                w-14 h-14 rounded-full
                flex items-center justify-center
                shadow-lg hover:scale-105 transition"
        aria-label="Open BearAI chat"
      >
        🐻
      </button>

      {open && (
        <section
          className="fixed bottom-24 right-6 z-50
                   w-[360px] max-w-[90vw]
                   bg-neutral-950 border border-neutral-800
                   rounded-xl shadow-2xl p-4"
        >
          <header className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-cyan-300">BearAI</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-white"
            >
              X
            </button>
          </header>

          <BearChat />
        </section>
      )}
    </>
  );
}
