"use client";
import { React, useState } from "react";


export default function BearWebFrame({ children }) {
  const [fullscreen] = useState(false);

  const framePosition = fullscreen
    ? "fixed top-0 left-0 right-0 bottom-[var(--taskbar-height)]"
    : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96%] h-[80%]";

  return (
    <section
      className={`
                ${framePosition}
                bg-black text-white rounded-lg flex flex-col shadow-xl z-50             
                `}
    >
      {children}
    </section>
  );
}
