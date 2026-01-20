"use Client";
import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import MenuItem from "../Desktop-system/menuitem";

export default function ThreeDotMenu({ onReload, onHome, onCloseApp }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <section ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded-full hover:bg-neutral-800"
        aria-label="Menu"
      >
        ⋮
      </button>

      {open && (
        <menu
          className="
        absolute right-0 top-full mt-2
        w-44
        bg-neutral-900
        border border-neutral-700
        rounded-full
        shadow-xl
        overflow-hidden
        animate-window-pop
        z-50
        "
        >
          <MenuItem label="Reload" onClick={onReload} />
          <MenuItem label="Home" onClick={onHome} />

          <div className="h-px bg-neutral-700 my-1" />

          <MenuItem label="Close" onClick={onCloseApp} />
        </menu>
      )}
    </section>
  );
}


