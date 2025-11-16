"use client";
import React from "react";
import { useBackground } from "@/app/providers/bgprovider";
import Image from "next/image";

const backgrounds = ["/desktop.jpg", "/desktop2.jpg", "/desktop3.jpg", "/desktop4.png"];

export default function BgWindow({ onClose }) {
  const { setBackground } = useBackground();

  return (
    <section
      className="
    absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    bg-[url('/card3.png')] bg-cover bg-center
    rounded-xl shadow-2xl text-white p-6 w-[90%] max-w-md hover:scale-105 transition 
    z-10
    "
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/30 rounded-xl pointer-events-none"></div>

      <header className="relative z-10 flex justify-between items-center mb-4">
        <h2 className="text-xl text-center font-semibold pointer-events-none">
          Backgrounds
        </h2>

        <nav className="flex gap-2">
          <button
            onClick={onClose}
            aria-label="Close window"
            className="
            ml-auto text-gray-400 hover:text-gray-100 
            hover:scale-105 text-xl z-10 mb.05
            "
          >
            ✕
          </button>
        </nav>
      </header>

      <ul className="grid grid-cols-3 gap-4">
        {backgrounds.map((img) => (
          <li key={img}>
            <button
              onClick={() => {
                setBackground(img);
                onClose();
              }}
              className="flex flex-col items-center hover:scale-105 transition"
            >
              <figure className="flex flex-col items-center">
                <div
                  className="
                w-20 h-20 rounded-xl
                bg-cover bg-center border border-white/30
                "
                  style={{ backgroundImage: `url(${img})` }}
                />
                <figcaption className="text-xs text-white mt-1 text-center">
                  {img.replace("/", "")}
                </figcaption>
              </figure>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
