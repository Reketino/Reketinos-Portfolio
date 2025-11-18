"use client";
import { useState, useRef, useEffect } from "react";

export default function Draggable({ id, children, startX = 0, startY = 0 }) {
  const ref = useRef(null);

  const [pos, setPos] = useState({ x: startX, y: startY });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  function onPointerDown(e) {
    if (isMobile) return;

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
    <section
      ref={ref}
      onPointerDown={onPointerDown}
      className={`cursor-pointer active:cursor-grabbing select-none
        ${isMobile ? "static" : "absolute"}
        `}
      style={isMobile ? {} : { left: pos.x, top: pos.y }}
    >
      {children}
    </section>
  );
}
