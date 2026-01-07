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
import SettingsPanel from "./SettingsPanel";


export default function StartMenu({
  clockFormat,
  setClockFormat,
  showTimezone,
  setShowTimezone,
}) {
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(50);
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
      {/* SEARCHBAR */}
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

      {/* APPS */}
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

      {/* SETTINGS */}
      <footer className="flex justify-between items-center mt-4 pt-3 border-t border-white/10 flex-row-reverse">
        <button
          onClick={() => setSettingsOpen((v) => !v)}
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

      {/* SettingsPanel */}
      {settingsOpen && (
        <SettingsPanel
        brightness={brightness}
        setBrightness={setBrightness}
        volume={volume}
        setVolume={setVolume}
        clockFormat={clockFormat}
        setClockFormat={setClockFormat}
        showTimezone={showTimezone}
        setShowTimezone={setShowTimezone}
        />
        
      )}
    </aside>
  );
}
