"use client";
import Image from "next/image";
import { useSleepScreen } from "./useSleepScreen";

export default function SleepScreen() {
  const { active, fade, bgFade } = useSleepScreen();

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
      absolute inset-0
      ">
      <Image
      src="/sleepscreen/sleepscreen.webp"
      alt="Gimsdalstind"
      fill
      className="object-cover"
      />

      <div className={`
      absolute inset-0 
      bg-black/90
      backdrop-blur-[0.5px]
      transition-opacity duration-700
      ${bgFade ? "opacity-90" : "opacity-10"}
      `}
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
