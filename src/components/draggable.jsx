"use client";
import { useState, useRef } from "react";

export default function Draggable({ id, children, startX = 0, startY = 0 }) {
  const ref = useRef(null);

  const [pos, setPos] = useState({ x: startX, y: startY });

  function onPointerDown(e) {
    if (e.button !== 0) return;

    const startX = e.clientX;
    const startY = e.clientY;

    const initX = pos.x;
    const initY = pos.y;

    function move(ev) {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;

      const newPos = {
        x: initX + dx,
        y: initY + dy,
      };

      setPos(newPos);
    }

    function up() {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    }
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  }

  return (
    <main
      ref={ref}
      onPointerDown={onPointerDown}
      className="absolute cursor-pointer active:cursor-grabbing select-none"
      style={{ left: pos.x, top: pos.y }}
    >
      {children}
    </main>
  );
}
