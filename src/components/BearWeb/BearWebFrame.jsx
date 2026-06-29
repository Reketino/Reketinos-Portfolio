"use client";
import React, { useState } from "react";

export default function BearWebFrame({ children, onBack, onMinimize }) {
  const [fullscreen, setFullScreen] = useState(false);
  const toggleFullscreen = () => {
    setFullScreen((prev) => !prev);
  };

  const framePosition = fullscreen
    ? "fixed top-0 left-0 right-0 bottom-[var(--taskbar-height)]"
    : [
      "absolute", 
      "top-1/2", 
      "left-1/2", 
      "-translate-x-1/2", 
      "-translate-y-1/2", 
      "w-[80%]", 
      "h-[80%]", 
    ].join(" ");

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
      {React.cloneElement(children, {
        onBack,
        onMinimize,
        fullscreen,
        onToggleFullscreen: toggleFullscreen
      })}
    </section>
  );
}
