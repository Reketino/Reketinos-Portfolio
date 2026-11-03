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
      relative flex w-full z-10
      max-w-3xl flex-col items-center
      text-center
      transition-all duration-700 ease-out
      ${fade 
        ? "translate-y-0 opacity-100" 
        : "translate-y-3 opacity-0"
      }
      `}
      >
        <p className="
        text-balance text-3xl text-white 
        sm:text-4xl md:text-5xl lg:text-6xl 
        [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]animate-pulse
        "
        >
          Reketino's Portfolio
        </p>

        <p className="mt-4 font-mono text-red-50 text-sm">
          press any button to wake
        </p>
      </header>
    </main>
  );
}
