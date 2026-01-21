"use Client";
import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import MenuItem from "../Desktop-system/menuitem";

export default function ThreeDotMenu({ onNewTab, onSettings, onCloseApp }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <section ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded-full text-neutral-300 hover:bg-neutral-800"
        aria-label="Menu"
      >
        ⋮
      </button>

      {open && (
        <menu
          className="
        absolute -right-1.5 top-full mt-3
        w-50
        bg-neutral-900
        border border-neutral-700
        rounded-md
        shadow-xl
        overflow-hidden
        animate-window-pop
        z-50
        "
        >
          <MenuItem label="New Tab" onClick={onNewTab} />
          <MenuItem label="Settings" onClick={onSettings} />

          <div className="h-px bg-neutral-700 my-1" />

          <MenuItem label="Close" onClick={onCloseApp} />
        </menu>
      )}
    </section>
  );
}
