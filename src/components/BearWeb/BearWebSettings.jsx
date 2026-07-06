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
        <h2 className="text-lg font-semibold">BearWeb Settings</h2>

        <button
          onClick={onClose}
          className="rounded px-2 py-1 hover:bg-neutral-800"
        >
          ✕
        </button>
      </header>
      <p className="text-sm text-neutral-400">Work'in on it!</p>
    </section>
  );
}
