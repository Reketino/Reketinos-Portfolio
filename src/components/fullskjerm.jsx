import React, { children, useState } from "react";
import Image from "next/image";

export default function Fullskjerm({ url, title, mode, onBack, onMinimize, children, fullContent=false, }) {
  const [isFullscreen, setIsFullscreen] = useState(false);


const windowSize = isFullscreen
? "fixed inset-0 pb-[--taskbar-height]"
: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96%] h-[95%]"

  return (
    <div
      className={`${windowSize}
     bg-gray-900 z-50 rounded-lg shadow-2xl flex flex-col transition-all duration-500 `}
    >


      <div className=" relative flex items-center  bg-black px-4 py-2 text-white">
        <div className=" absolute left-4 flex gap-2">
          <button onClick={onBack} 
          className="p-1 rounded-transition hover:bg-gray-700">
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
                src={isFullscreen ? "/fscreenicon/restoredown.png" : "/fscreenicon/maximize.png"}
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
      {url ?(
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
          <div className="w-full h-full overflow-hidden">
        {children}
        </div>
        ) : (
        <div className="p-6">{children}</div>
      )}
    </div>
    </div>
  );
}