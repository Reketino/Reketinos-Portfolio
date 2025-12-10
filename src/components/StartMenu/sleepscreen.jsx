"use client";

import { useEffect, useState } from "react";

export default function SleepScreen() {
  const [active, setActive] = useState(false);
  const [fade, setFade] = useState(false);

  //   Trigger functions globally
  useEffect(() => {
    window.enterSleep = () => setActive(true);
    window.exitSleep = () => setActive(false);
  }, []);

  //   Fade handling + wake up behavior
  useEffect(() => {
    if (!active) return;

    // Fade in Trigger
    setTimeout(() => setFade(true), 10);

    const wake = () => {
      setFade(false);
      setTimeout(() => setActive(false), 250);
    };

    window.addEventListener("keydown", wake, { once: true });
    window.addEventListener("pointerdown", wake, { once: true });

    return () => {
      window.removeEventListener("keydown", wake);
      window.removeEventListener("pointerdown", wake);
    };
  }, [active]);

  if (!active) return null;

  return (
    <main
      className={`
        fixed inset-0 z-999999
        flex items-center justify-center
        bg-black transition-opacity duration-300
        ${fade ? "opacity-100" : "opacity-0"}
        `}
    >
      <section
        className="
    absolute inset-0 pointer-events-none
    before:content-[''] before:absolute before:inset-0
    before:bg-[linear-gradient(rgba(255,0,0,0.04)_1px,transparent_1px)]
    "
      />

      <header className="relative text-center">
        <p className="font-mono text-red-950 text-4xl animate-pulse">
          Bear Evens Portfolio
        </p>
        <p className="mt-4 font-mono text-red-50 text-sm">
          press any button to wake
        </p>
      </header>
    </main>
  );
}
