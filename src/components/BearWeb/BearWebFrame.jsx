"use client";
import { useState } from "react";


export default function BearWebFrame({ children }) {
  const [fullscreen, setFullScreen] = useState(false);

  const framePosition = fullscreen
    ? "fixed top-0 left-0 right-0 bottom-[var(--taskbar-height)]"
    : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]";

  return (
    <section
      className={`
                ${framePosition}
                bg-black 
                rounded-lg 
                overflow-hidden
                flex flex-col 
                shadow-xl           
                `}
    >
      <main className="flex-1 overflow-hidden">{children}</main>
    </section>
  );
}
