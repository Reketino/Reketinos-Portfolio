import React, { useEffect, useState } from "react";
import Image from "next/image";
import Draggable from "./draggable";

export default function Fullskjerm({
  url,
  title,
  mode,
  onBack,
  onMinimize,
  children,
  fullContent = false,
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isMobile, setIsMobile] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      setIsReady(true);
    }
  }, []);

  const initialPos = isMobile
    ? { x: 10, y: 60 }
    : typeof window !== "undefined"
    ? {
        x: window.innerWidth * 0.5 - (window.innerWidth * 0.96) / 2,
        y: window.innerHeight * 0.5 - (window.innerHeight * 0.95) / 2,
      }
    : { x: 0, y: 0 };

  const [startPos, setStartPos] = useState(initialPos);

  const wrapperWidth = isMobile
    ? "100vw"
    : `${Math.min(1400, Math.round(window.innerWidth * 0.7))}px`;

  const wrapperHeight = isMobile
    ? "100vh"
    : `${Math.min(900, Math.round(window.innerHeight * 0.7))}px`;

  useEffect(() => {
    if (isFullscreen) return;

    if (isMobile) {
      setStartPos({ x: 10, y: 60 });
      return;
    }

    const recalc = () => {
      const w = window.innerWidth * 0.96;
      const h = window.innerHeight * 0.95;

      const x = window.innerWidth / 2 - w / 2;
      const y = window.innerHeight / 2 - h / 2;

      setStartPos({ x: x + 300, y: y + 120 });
    };

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [isFullscreen, isMobile, isReady]);

  if (!isReady) return null;

  const WindowContent = (
    <div
      className={`bg-gray-900 z-50 rounded-lg shadow-2xl flex flex-col 
      transition-all duration-300
      animate-window-pop
      ${isFullscreen || isMobile ? "fixed inset-0 pb-[--taskbar-height]" : ""}
    `}
      style={
        isFullscreen || isMobile
          ? {}
          : { width: wrapperWidth, height: wrapperHeight }
      }
    >
      <div
        className=" relative flex items-center  bg-black px-4 py-2 text-white cursor-move"
        onPointerDown={(e) => {
          if (isFullscreen) e.stopPropagation();
        }}
      >
        <div className=" absolute left-4 flex gap-2">
          <button
            onClick={onBack}
            className="p-1 rounded-transition hover:bg-gray-700"
          >
            <Image
              src="/fscreenicon/back.png"
              alt="Back"
              width={20}
              height={20}
            />
          </button>
        </div>

        <h2 className="mx-auto text-center font-semibold">{title}</h2>

        <div className=" absolute right-4 flex gap-2">
          <button
            onClick={onMinimize}
            className="p-1 hover:bg-gray-700 rounded-transition"
          >
            <Image
              src="/fscreenicon/minimize.png"
              alt="Minimize"
              width={16}
              height={16}
            />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 hover:bg-gray-700 rounded-transition"
          >
            <Image
              src={
                isFullscreen
                  ? "/fscreenicon/restoredown.png"
                  : "/fscreenicon/maximize.png"
              }
              alt="Maximize"
              width={16}
              height={16}
            />
          </button>

          <button
            onClick={onBack}
            className="p-1 hover:bg-red-600 rounded-transition"
          >
            <Image
              src="/fscreenicon/close.png"
              alt="Close"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      <div
        className={`
          flex-1 w-full min-h-0
          ${
            url
              ? title === "Flappy Bird"
                ? "bg-linear-to-b from-sky-400 to-green-500 overflow-hidden"
                : "bg-black overflow-hidden"
              : mode === "browser"
              ? "bg-black p-0 overflow-y-auto"
              : "bg-black rounded-b-lg overflow-y-auto"
          }
        `}
      >
        {url ? (
          <iframe
            id="iframe-fullscreen"
            src={url}
            className=" w-full h-full border-none"
            title={title}
            style={{
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
        ) : fullContent ? (
          <div className="w-full h-full overflow-hidden">{children}</div>
        ) : (
          <div className="p-6">{children}</div>
        )}
      </div>
    </div>
  );

  if (isFullscreen || isMobile) return WindowContent;

  return (
    <Draggable
      id={title}
      startX={startPos.x}
      startY={startPos.y}
      width={wrapperWidth}
      height={wrapperHeight}
    >
      {WindowContent}
    </Draggable>
  );
}
