"use client";
import { useState } from "react";
import {
  FaPowerOff,
  FaCog,
  FaSearch,
  FaChrome,
  FaDiscord,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function StartMenu({clockFormat, setClockFormat }) {
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(50);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const apps = [
    { name: "VSCode", icon: <VscVscode className="text-sky-400" /> },
    { name: "Chrome", icon: <FaChrome className="text-blue-400" /> },
    { name: "Discord", icon: <FaDiscord className="text-indigo-400" /> },
    { name: "Github", icon: <FaGithub className="text-gray-300" /> },
    { name: "Terminal", icon: <FaTerminal className="text-green-400" /> },
  ];

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className="
    absolute bottom-14 left-2
    w-80 bg-black/90
    backdrop-blur-2xl
    border border-white/20
    rounded-2xl shadow-2xl p-4
    animate-in fade-in slide-in-from-bottom-2
    z-99999
    "
    >
      <label className="relative block mb-4">
        <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-white/10 rounded-lg pl-8 pr-2 py-1.5
        text-sm text-white placeholder-white/50
        outline-none focus:bg-white/30 transition
        "
        />
      </label>

      <section className="grid grid-cols-3 gap-4 mb-4">
        {apps.map((app) => (
          <button
            key={app.name}
            className="
             flex flex-col items-center gap-1
             hover:bg-white/10 p-2 rounded-xl transition
             "
          >
            <span
              className="
                w-10 h-10 bg-white/10 rounded-lg
                flex items-center justify-center text-xs
                "
            >
              {app.icon}
            </span>
            <span className="text-xs text-white/70">{app.name}</span>
          </button>
        ))}
      </section>

      <footer className="flex justify-between items-center mt-4 pt-3 border-t border-white/10 flex-row-reverse">
        <button
          onClick={() => {
            if (!settingsVisible) {
              setSettingsVisible(true);
              setTimeout(() => setSettingsOpen(true), 10);
            } else {
              setSettingsOpen(false);
              setTimeout(() => setSettingsVisible(false), 200);
            }
          }}
          className="flex items-center gap-2 hover:bg-white/10 px-3 py-1.5 rounded-lg transition"
        >
          <FaCog />
          <span className="text-sm">Settings</span>
        </button>

        <button
          onClick={() => window.enterSleep && window.enterSleep()}
          className="flex items-center gap-2 hover:bg-red-500/20 px-3 py-1.5 rounded-lg transition text-red-400"
        >
          <FaPowerOff />
          <span className="text-sm">Power</span>
        </button>
      </footer>

      {settingsOpen && (
        <section
          className="
        absolute bottom-14 left-0 w-full
        bg-black/95 backdrop-blur-2xl
        border border-white/10 p-4 rounded-xl shadow-xl
        animate-in fade-in slide-in-from-bottom-1
        flex flex-col gap-4
        "
        >
          <h3 className="text-lg font-semibold mb-1"> Settings</h3>

          <label>
            <div className="flex justify-between text-sm mb-1">
              <span>Brightness</span>
              <span>{brightness}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              value={brightness}
              onChange={(e) => {
                setBrightness(e.target.value);
                document.documentElement.style.filter = `brightness(${e.target.value}%)`;
              }}
              className="w-full"
            />
          </label>

          <label>
            <div className="flex justify-between text-sm mb-1">
              <span>Volume</span>
              <span>{volume}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full"
            />
          </label>

         <label className="
         flex flex-col
         gap-2 pt-2
         border-t border-white/10
         " 
         >
          <span className="text-sm opacity-80"> Clock format</span>

          <header className="flex gap-2">
            <button 
            onClick={() => setClockFormat("24h")}
            className={`px-3 py-1 rounded-lg text-sm transition
              ${
                clockFormat === "24h"
                ? "bg-white/30"
                : "bg-white/10 hover:bg-white/20"
                }
                `}
            >
              24h
            </button>

            <button
            onClick={()=> setClockFormat("12h")}
             className={`px-3 py-1 rounded-lg text-sm transition
              ${
            clockFormat === "12h"
            ? "bg-white/30"    
            : "bg-white/10 hover:bg-white/20"
            } 
            `}
            >
              12h
            </button>

          </header>
         </label>
        </section>
      )}
    </aside>
  );
}
