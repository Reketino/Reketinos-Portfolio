"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function BearWebStart({ onOpen, settings }) {
  const [query, setQuery] = useState("");

  const shortcuts = [
    { label: "Google", page: "google", icon: "/icons/google.png" },
    { label: "BearStocks", page: "stocks", icon: "/icons/bearicon.png" },
    { label: "Bear HoldEm", page: "holdem", icon: "/icons/bearholdem.png" },
    { label: "Github", page: "github", icon: "/icons/github.png" },
    { label: "Linkedin", page: "linkedin", icon: "/icons/linkedin.png" },
  ];

  return (
    <section
      className={`
    bw-start 
    relative 
    overflow-hidden
    ${
      settings.bearMode
        ? "bg-linear-to-br from-[#0f1c12] via-[#1d2418] to-[#2b1e16]"
        : ""
    }
    `}
    >
      {settings.bearMode && (
        <img
          src="/icons/bearchrome.png"
          alt=""
          className="
        absolute
        left-1/2
        top-1/2
        w-[550px]
        -translate-x-1/2
        -translate-y-1/2
        opacity-10
        pointer-events-none
        select-none
        blur-[1px]
        "
          draggable={false}
        />
      )}

      {settings.bearMode && (
        <div 
        className="
        absolute
        inset-0
        bg-linear-to-b
        from-transparent 
        via-black/10
        to-black/30
        pointer-events-auto
        "
        />
      )}

      <section className="relative z-10 flex flex-col items-center">
        <h1
          className={`
        text-6xl 
        font-bold 
        tracking-tight 
        text-center
        ${
          settings.bearMode
            ? "drop-shadow-[0_0_20_px_rgba(245,180,60,.35)]"
            : ""
        }
        `}
        >
          {settings.bearMode ? (
            <>
              <span className="text-amber-300">BearWeb</span>
            </>
          ) : (
            <>
              <span className="text-red-400">B</span>
              <span className="text-yellow-400">e</span>
              <span className="text-green-400">a</span>
              <span className="text-blue-400">r</span>
              <span className="text-purple-400">W</span>
              <span className="text-pink-400">e</span>
              <span className="text-cyan-400">b</span>
            </>
          )}
        </h1>

        <p className="mt-1 text-xl font-semibold text-neutral-200 text-center">
          Your gateway to projects, code and creative experiments
        </p>

        <header className="flex justify-center mt-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onOpen(query);
            }}
            className={`
      flex items-center gap-2
      px-4 py-2 
      rounded-full 
      shadow-md
      w-[500px]
      transition-all
      ${
        settings.bearMode
          ? "bg-[#243120] border border-[#5c7b45] focus-within:border-amber-400"
          : "bg-neutral-800/80 border border-neutral-700 focus-within:border-neutral-500"
      }
      `}
          >
            <FaSearch className="text-neutral-400 text-sm" />

            <input
              type="text"
              placeholder={
                settings.bearMode
                  ? "Search the forest..."
                  : "Search the BearWeb"
              }
              className="
        bg-transparent text-neutral-200 placeholder-neutral-500
        focus:outline-none text-sm w-full
        "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </header>

        <section className="mt-6 flex flex-wrap justify-center gap-6">
          {shortcuts.map((item) => (
            <button
              key={item.label}
              onClick={() => onOpen(item.page || item.url)}
              className={`
            flex flex-col 
            items-center justify-center
             w-25 h-23
             rounded-full
             shadow-md
             hover:shadow-lg
             hover:scale-105
             transition-all
             ${
               settings.bearMode
                 ? "bg-[#253121] border border-[#4c6b2c] hover:bg-[#31452b]"
                 : "bg-neutral-800 hover:bg-neutral-700"
             }
            `}
            >
              {typeof item.icon === "string" ? (
                <img
                  src={item.icon}
                  alt=""
                  className={`
                  w-10 h-10 object-contain mb-1
                  ${settings.bearMode ? "drop-shadow-[0_0_8px_rgba(255,200,80,.25)]" : ""}
                  `}
                  draggable="false"
                />
              ) : (
                <div className="text-3xl mb-1">{item.icon}</div>
              )}

              <span className={`
                text-xs
                ${
                  settings.bearMode 
                  ? "text-amber-100"
                  : "text-neutral-200"
                }
                `}
                >
                  {item.label}
                  </span>
            </button>
          ))}
        </section>

        <p className="bw-start-sub mt-8">
          Your Bearowser - powered by Bear Even 🐻
        </p>
      </section>
    </section>
  );
}
