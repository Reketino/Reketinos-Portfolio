"use client";
import React, { useState, useEffect } from "react";
import { useBackground } from "@/app/providers/bgprovider";

export default function BgWindow({ onClose }) {
  const { background, setBackground } = useBackground();
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/backgrounds");
      const data = await res.json();
      setImages(data.images || []);
    }
    load();
  }, []);

  return (
    <main
      className="
      absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2
     
      w-[90%] max-w-md rounded-xl
      text-gray-200 bg-[#1f1f1f]/90
     
      border border-white/10
      shadow-[0_4px_18px_rgba(0,0,0,0.45)]
    
      transition-transform duration-100 hover:scale[1.01]
      p-6 z-10
      "
      role="dialog"
      aria-modal="true"
    >

      <div className="
      absolute inset-0 
      bg-black/30 rounded-xl 
      pointer-events-none
      "
      >
      </div>

      <header className="
      relative flex 
      items-center justify-between 
      mb-4 z-10
      "
      >
        <span className="opacity-0 pointer-events-none"></span>

        <h2 className="
        absolute 
        left-1/2 -translate-x-1/2 
        text-xl text-center 
        font-semibold 
        pointer-events-none
        "
        >
          Backgrounds
        </h2>

        <nav className="flex gap-2">
          <button
            onClick={onClose}
            aria-label="Close window"
            className="
            text-xl text-gray-400 
            hover:text-gray-100 
            hover:scale-105 
            z-10 mb.05 ml-auto
            "
          >
            ✕
          </button>
        </nav>
      </header>

      <ul className="
      relative
      grid grid-cols-3 
      gap-4  z-10
      "
      >
        {images.map((img) => (
          <li key={img}>

            <button
            disabled={background === img}
              onClick={() => {
                setBackground(img);
                onClose();
              }}
              className={`
              flex flex-col 
              items-center  
              transition
              ${
                background === img
                ? "opacity-80 cursor-default"
                : "hover:scale-105"
              }
              `}
            >
              <figure className="
              relative
              flex flex-col 
              items-center
              ">
                <div
                  className={`
                w-20 h-20 rounded-xl
                bg-cover bg-center 
                border 
                ${
                  background === img
                  ?"border-green-400 ring-2 ring-green-400/40"
                  :"border-white/30"
                }
                `}
                  style={{ backgroundImage: `url(${img})` }}
                />


                {background === img && (
                  <span className="
                  absolute top-1 right-1
                  text-green-300 text-sm
                  ">
                     ✓
                  </span>
                )}


                <figcaption className="text-xs text-white mt-1 text-center">
                  {img.split("/").pop()}
                </figcaption>

              </figure>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
