"use client";
import { useState } from "react";
import BearWebTabs from "./BearWebTabs";
import WindowControls from "./WindowControls";

export default function BearWebFrame({ children, onBack, onMinimize }) {
  const [fullscreen, setFullScreen] = useState(false);

  const framePosition = fullscreen
    ? "fixed top-0 left-0 right-0 bottom-[var(--taskbar-height)]"
    : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]";

  return (
    <section
      className={`
                ${framePosition}
                bg-black text-white rounded-lg flex flex-col shadow-xl z-50             
                `}
    >
      <header className="flex items-center justify-between px-2 py-1 border-b border-white/10">
        <BearWebTabs />

        <WindowControls
          fullscreen={fullscreen}
          onToggleFullscreen={() => setFullScreen((f) => !f)}
          onMinimize={onMinimize}
          onClose={onBack}
        />
      </header>

      <main className="flex-1 overflow-hidden">{children}</main>
    </section>
  );
}
