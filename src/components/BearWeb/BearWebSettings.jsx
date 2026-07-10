"use client";

import { MdDarkMode } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { PiFlaskFill } from "react-icons/pi";

export default function BearWebSettings({ onClose, settings, updateSetting }) {
  return (
    <section
      className={`
        absolute right-6 top-18
        z-50 w-80 p-5
        rounded-xl
        border
        border-neutral-700
        bg-neutral-900
        shadow-2xl
        `}
    >
      <header className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <PiFlaskFill />
          BearWeb Settings
        </h2>

        <button
          onClick={onClose}
          className="rounded px-2 py-1 hover:bg-neutral-800"
        >
          ✕
        </button>
      </header>

      <section className="space-y-6 p-6">
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
            <input 
            type="checkbox"
            checked={settings.startupNewTab}
            onChange={(e) =>
              updateSetting("startupNewTab", e.target.checked)
            }
            />
            <span> Open New Tab</span>
          </label>
        </div>

        <hr className="border-neutral-700" />

        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-300">
            <FaSearch />
            Search Engine
          </h3>

          <select 
          value={settings.searchEngine}
          onChange={(e) =>
            updateSetting("searchEngine", e.target.value)
          }
          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none"
          >
            <option value="google">Google</option>
            <option value="duckduckgo">DuckDuckGo</option>
            <option value="bing">Bing</option>
            <option value="brave">Brave</option>
          </select>
        </div>

        <hr className="border-neutral-700" />

        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-300">
            Experimental
          </h3>

          <div className="space-y-2">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={settings.bearMode}
                onChange={(e) => updateSetting("bearMode", e.target.checked)}
              />
              <span>Bear Mode 🐻</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input 
              type="checkbox" 
              checked={settings.glass}
              onChange={(e) =>
                updateSetting("glass", e.target.checked)
              }
              />
              <span>Glass Effect</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input 
              type="checkbox" 
              checked={settings.animations}
              onChange={(e) =>
                updateSetting("animations", e.target.checked)
              }
              />
              <span>Animations</span>
            </label>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-700 px-6 py-4 text-xs text-neutral-500">
        <span>BearWeb v0.1</span>
        <span>Made by Bear Even 🐻</span>
      </footer>
    </section>
  );
}
