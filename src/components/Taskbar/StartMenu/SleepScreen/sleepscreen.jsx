"use client";
import Image from "next/image";
import { useSleepScreen } from "./useSleepScreen";

export default function SleepScreen() {
  const { active, fade, bgFade } = useSleepScreen();

  if (!active) return null;

  return (
    <main
      className="
        fixed inset-0 z-999999
        flex min-h-dvh items-center 
        justify-center overflow-hidden 
        bg-neutral-950 px-5 
        py-8 sm:px-8
        "
        role="status"
        aria-label="Sleep screen"
    >
      <section
        className={`
      absolute inset-0
    transition-opacity duration-700
      ${bgFade ? "opacity-100" : "opacity-0"}
      `}
      >
        <Image
          src="/sleepscreen/sleepscreen.webp"
          alt="Gimsdalstind"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="
      absolute inset-0 
      bg-linear-to-b
      from-black/45
      via-black/55
      to-black/80
      "
        />

      <div className="absolute inset-0 
      bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
      />
      </section>

      <header
        className={`
      relative text-center
      transition-opacity duration-300
      ${fade ? "opacity-100" : "opacity-0"}
      `}
      >
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
