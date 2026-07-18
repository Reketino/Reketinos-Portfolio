"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";

export default function BearWebStart({ onOpen, settings }) {
  const [query, setQuery] = useState("");

  const shortcuts = [
    { label: "Google", page: "google", icon: "/icons/google.png" },
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

      <section className="relative z-10 flex w-full flex-col items-center pt-16">
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

        <section className="mt-10 w-full max-w-5xl">
         <h2 className="mb-4 text-lg font-semibold text-violet-200">
          Bear Projects
         </h2>

         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
          title="BearFlights"
          description="Aircraft around Sykkylven"
          image="/icons/bearflights.png"
          bearMode={settings.bearMode}
          onClick={() => onOpen("bearflights")}
          />

          <ProjectCard
          title="BearStocks"
          description="Market Dashboard"
          image="/icons/bearstocks.png"
          imageClassName="h-44"
          bearMode={settings.bearMode}
          onClick={() => onOpen("stocks")}
          />
          
          <ProjectCard
          title="Bear Hold'Em"
          description="Texas Hold'em Poker Game"
          image="/icons/bearholdem.png"
          imageClassName="h-44"
          bearMode={settings.bearMode}
          onClick={() => onOpen("holdem")}
          />

         </div>
        </section>

        <section className="mt-8 w-full max-w-5xl">
          <h2 
          className={`mb-4 text-lg font-semibold ${
            settings.bearMode ? "text-amber-200" : "text-violet-200"
          }`}
          >
            Quick Links
          </h2>

          <div className="flex flex-wrap gap-4">
            {shortcuts.map((item) => (
              <button
              key={item.label}
              onClick={() => onOpen(item.page || item.url)}
              className={`
                group flex
                h-20 w-20
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${
                  settings.bearMode
                  ? "border-[#4c6b2c] bg-[#253121] hover:bg-[#31452b] hover:shadow-amber-500/20"
                  : "border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:shadow-cyan-500/20"
                }
                `}
                >
                  
                </button>
            ))}
          </div>
        </section>


        <p className="bw-start-sub mt-8">
          Your Bearowser - powered by Bear Even 🐻
        </p>
      </section>
    </section>
  );
}
