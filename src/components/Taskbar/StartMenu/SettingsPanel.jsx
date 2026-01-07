"use client";

export default function SettingsPanel({
  brightness,
  setBrightness,
  volume,
  setVolume,
  clockFormat,
  setClockFormat,
  showTimezone,
  setShowTimezone,
}) {
  return (
    <section
      className="
        absolute bottom-14 left-0 w-full
        bg-black/95 backdrop-blur-2xl
        border border-white/10 
        
        animate-in fade-in slide-in-from-bottom-1
        flex flex-col gap-4
        p-4 rounded-xl shadow-xl
        "
    >
      <h3 className="text-lg font-semibold mb-1"> Settings</h3>

      {/* Brightness Settings */}
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

      {/* VOLUME SETTINGS */}
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

      {/* CLOCK FORMAT SETTINGS */}
      <label
        className="
         flex flex-col
         gap-2 pt-2
         border-t border-white/10
         "
      >
        <span className="text-sm opacity-80"> Clock format</span>

        {/* 24 HOUR CLOCK */}
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

          {/* 12 HOUR CLOCK */}
          <button
            onClick={() => setClockFormat("12h")}
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

      {/* TIMEZONE TOGGLE */}
      <label
        className="
         flex items-center justify-between
         pt-2 border-t border-white/10
         "
      >
        <span className="text-sm opacity-80">Show timezone</span>

        <button
          onClick={() => setShowTimezone(!showTimezone)}
          className={`w-10 h-5 rounded-full relative transition
          ${showTimezone ? "bg-green-500/70" : "bg-white/20"}
          `}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition
              ${showTimezone ? "left-5" : "left-0.5"}
              `}
          />
        </button>
      </label>
    </section>
  );
}
