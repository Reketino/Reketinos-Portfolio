"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SleepScreen() {
  const [active, setActive] = useState(false);
  const [fade, setFade] = useState(false);

  //   Trigger functions globally
  useEffect(() => {
    window.enterSleep = () => {
      if (window.closeStartMenu) window.closeStartMenu();

      window.disableStartMenuClick = true;

      setActive(true);
    };

    window.exitSleep = () => {
      setFade(false);

      setTimeout(() => {
        window.disableStartMenuClick = false;
        setActive(false);
      }, 300);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    setTimeout(() => setFade(true), 10);

    const wake = () => {
      window.exitSleep();
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
      absoulte inset-0
      ">
      <Image
      src="/sleepscreen/sleepscreen.webp"
      alt="Gimsdalstind"
      fill
      className="object-cover"
      />

      <div className="
      absolute inset-0 
      bg-black/90
      backdrop-blur-[0.5px]
      " 
      />
  </section>

      <header className="relative text-center">
        <p className="font-mono text-red-950 text-4xl animate-pulse">
          Reketino's Portfolio
        </p>
        <p className="mt-4 font-mono text-red-50 text-sm">
          press any button to wake
        </p>
      </header>
    </main>
  );
}
