"use client";
import { useState, useRef, useEffect } from "react";

export default function Draggable({ id, children, startX = 0, startY = 0 }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: startX, y: startY });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  }, []);

  useEffect(() => {
    console.log(`[Draggable ${id}] pos:`, pos);
  })

  function onPointerDown(e) {
    if (isMobile) return;

    if (e.button !== 0) return;

    e.preventDefault();

    const startClientX = e.clientX;
    const startClientY = e.clientY;
    const initX = pos.x;
    const initY = pos.y;

    function move(ev) {
      const dx = ev.clientX - startClientX;
      const dy = ev.clientY - startClientY;
      setPos({ x: initX + dx, y: initY + dy });
    }

    function up() {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    }
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  }


  const wrapperStyle = isMobile
  ? {}
  : {
    position: "absolute",
    left: pos.x,
    top: pos.y,
    display: "block",
    width: "800px",
    height: "600px",
    zIndex: 50,
  }

  return (
    <section
     ref={ref}
     onPointerDown={onPointerDown}
     className={`select-none ${isMobile ? "static" : ""}`}
     style={wrapperStyle}
     >
      {children}
    </section>
  );
}
