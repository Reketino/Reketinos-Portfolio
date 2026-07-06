"use client";

import { MdDarkMode } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { PiFlaskFill } from "react-icons/pi";


export default function BearWebSettings({ onClose }) {
  return (
    <section
      className="
        absolute right-6 top-18
        z-50 w-80 p-5
        rounded-xl
        border
        border-neutral-700
        bg-neutral-900
        shadow-2xl
        "
    >
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          ⚙ BearWeb Settings
          </h2>

        <button
          onClick={onClose}
          className="rounded px-2 py-1 hover:bg-neutral-800"
        >
          ✕
        </button>
      </header>

      <section className="space-y-5 p-5">

        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <MdDarkMode />
        Appearance
        </h3>

        <button className="flex w-full items-center justify-between rounded-md bg-neutral-800 px-3 py-2 hover">
          <span>Dark Theme</span>
          <span>🌙</span>
        </button>
        </div>

        <hr className="border-neutral-700" />

        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-300">
            <IoRocketSharp />
            Startup
          </h3>

          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-300">
            <input type="checkbox" defaultChecked />
            <span> Open New Tab</span>
          </label>
        </div>

        <hr className="border-neutral-700" />

        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-300">
            <FaSearch />
            Search Engine
          </h3>

          <select className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none">
            <option>Google</option>
            <option>DuckDuckGo</option>
            <option>Bing</option>
            <option>Brave</option>
          </select>
        </div>

        <hr className="border-neutral-700" />

      </section>
      <p className="text-sm text-neutral-400">Work'in on it!</p>
    </section>
  );
}
