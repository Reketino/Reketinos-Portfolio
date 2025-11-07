import React, { useState } from "react";

export default function Fullskjerm({ url, title, onBack }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div
      className={`${
        isFullscreen
          ? "fixed inset-0 pb-(--taskbar-height)"
          : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%]"
      }
     bg-gray-900 z-50 rounded-lg shadow-2xl flex flex-col transition-all duration-500 `}
    >
      <div className=" relative flex items-center  bg-gray-800 px-4 py-2 text-white">
        <div className=" absolute left-4 flex gap-2">
          <button onClick={onBack} className="text-sm text-white underline">
            ⬅
          </button>
        </div>

        <div className=" absolute right-4 flex gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="text-sm text-white underline"
          >
            {isFullscreen ? "⧉" : "🗖"}
          </button>
        </div>

        <h2 className="mx-auto text-xl font-semibold">{title}</h2>
      </div>

      <iframe
        id="iframe-fullscreen"
        src={url}
        className="flex-1 w-full h-full rounded-none border-none z-50"
        title={title}
        style={{ height: "calc(100vh - var(--taskbar-height))" }}
      />
    </div>
  );
}