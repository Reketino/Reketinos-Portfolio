"use client";
import { React, useState } from "react";
import Image from "next/image";

export default function BearWebFrame({ title, onBack, onMinimize, children }) {
  const [fullscreen, setFullscreen] = useState(false);

  const handleMinimize = () => {
    if (onMinimize) onMinimize();
  };

  return (
    <section
      className={`
                ${
                  fullscreen
                    ? "fixed inset-0 pb-[--taskbar-height]"
                    : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96%] h-[95%]"
                }
                bg-black text-white rounded-lg flex flex-col shadow-xl z-50             
                `}
    >
      <header className="flex items-center justify-between bg-neutral-900 px-4 py-2">
        <button onClick={onBack} className="hover:bg-neutral-700 px-2 rounded">
          <Image
            src="/fscreenicon/back.png"
            alt="Back"
            width={20}
            height={20}
          />
        </button>

        <h2 className="pointer-events-none">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={onMinimize}
            className="hover:bg-neutral-700 p-1 rounded"
          >
            <Image
              src="/fscreenicon/minimize.png"
              alt="min"
              width={16}
              height={16}
            />
          </button>

          <button
            onClick={() => setFullscreen((f) => !f)}
            className="hover:bg-neutral-700 p-1 rounded"
          >
            <Image
              src={
                fullscreen
                  ? "/fscreenicon/restoredown.png"
                  : "/fscreenicon/maximize.png"
              }
              alt="full"
              width={16}
              height={16}
            />
          </button>

          <button onClick={onBack} className="hover:bg-red-600 p-1 rounded">
            <Image
              src="/fscreenicon/close.png"
              alt="close"
              width={16}
              height={16}
            />
          </button>
        </div>
      </header>

      <div className=" flex-1 min-h-0 overflow-hidden bg-black">{children}</div>
    </section>
  );
}
