"use client";
import React, { useState } from "react";
import { FaGithub, FaYoutube, FaSearch } from "react-icons/fa";

export default function BearWebStart({ onOpen }) {
  const [query, setQuery] = useState("");

  const shortcuts = [
    { label: "BearStocks", page: "stocks", icon: "/icons/bearicon.png" },
    { label: "Bear HoldEm", page: "holdem", icon: "/icons/bearholdem.png"},
  ];

  return (
    <section className="bw-start">
      <h1 className="text-6xl font-bold tracking-tight text-center">
        <span className="text-red-400">B</span>
        <span className="text-yellow-400">e</span>
        <span className="text-green-400">a</span>
        <span className="text-blue-400">r</span>
        <span className="text-purple-400">W</span>
        <span className="text-pink-400">e</span>
        <span className="text-cyan-400">b</span>
      </h1>
    
    <header className="flex justify-center mt-2">
      <div className="
      flex items-center gap-2
      bg-neutral-800/80 border border-neutral-700
      px-4 py-2 rounded-full shadow-md
      w-[500px]
      focus-within:border-neutral-500
      transition-all
      ">
        <FaSearch className="text-neutral-400 text-sm" />

        <input
        type="text"
        placeholder="Search the BearWeb"
        className="
        bg-transparent text-neutral-200 placeholder-neutral-500
        focus:outline-none text-sm w-full
        "
      value={query}
      onChange={(e) => setQuery (e.target.value)}
      />
      </div>
    </header>


      <p className="bw-start-sub">Your Bearowser - powered by Bear Even 🐻</p>

      <section className="mt-6 flex flex-wrap justify-center gap-6">
        {shortcuts.map((item) => (
          <button
            key={item.label}
            onClick={() => onOpen(item.page || item.url)}
            className="flex flex-col items-center justify-center
             w-25 h-23
             rounded-full
             bg-neutral-800
             hover:bg-neutral-700
             shadow-md
             hover:shadow-lg
             hover:scale-105
             transition-all
             "
          >
            {typeof item.icon === "string" ? (
              <img
                src={item.icon}
                alt=""
                className="w-10 h-10 object-contain mb-1"
                draggable="false"
              />
            ) : (
              <div className="text-3xl mb-1">{item.icon}</div>
            )}

            <span className="text-xs text-neutral-200">{item.label}</span>
          </button>
        ))}
      </section>
    </section>
  );
}
