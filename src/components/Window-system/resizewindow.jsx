"use client";

import { useState } from "react";

// Min Width & Height
const MIN_W = 800;
const MIN_H = 200;

// Air around container
const SAFE_LEFT = 0; //Sidebar width
const SAFE_TOP = 0; // Header / taskbar
const SAFE_RIGHT = 0; // Air around container
const SAFE_BOTTOM = 0;

// Width & Height when opening component
export default function ResizeWindow({
  id,
  children,
  startX = 0,
  startY = 0,
  width = 800,
  height = 500,
  disableResize = false,
}) {
  const [pos, setPos] = useState({ x: startX, y: startY });
  const [size, setSize] = useState({ w: width, h: height });

  // Logic behind dragging container around
  function onDrag(e) {
    if (!e.target.closest("[data-drag-handle]")) return;
    if (e.target.closest("[data-resize]")) return;
    if (e.button !== 0) return;

    const startX0 = e.clientX;
    const startY0 = e.clientY;
    const initX = pos.x;
    const initY = pos.y;

    // Scaling of container 
    function move(ev) {
      const nextX = initX + (ev.clientX - startX0);
      const nextY = initY + (ev.clientY - startY0);

      const minX = SAFE_LEFT;
      const minY = SAFE_TOP;

      const maxX = window.innerWidth - size.w - SAFE_RIGHT;
      const maxY = window.innerHeight - size.h - SAFE_BOTTOM;

      setPos({
        x: Math.min(Math.max(nextX, minX), maxX),
        y: Math.min(Math.max(nextY, minY), maxY),
      });
    }

    // Pointer Event
    function up() {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    }

    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  }

  // Resizing container down
  function onResizeDown(e, direction) {
    e.stopPropagation();

    const startX0 = e.clientX;
    const startY0 = e.clientY;

    const initW = size.w;
    const initH = size.h;
    const initX = pos.x;
    const initY = pos.y;

    // Container movement
    function move(ev) {
      const dx = ev.clientX - startX0;
      const dy = ev.clientY - startY0;

      let newW = initW;
      let newH = initH;
      let newX = initX;
      let newY = initY;

      if (direction.includes("right")) newW = initW + dx;
      if (direction.includes("bottom")) newH = initH + dy;
      if (direction.includes("left")) {
        newW = initW - dx;
        newX = initX + dx;
      }
      if (direction.includes("top")) {
        newH = initH - dy;
        newY = initY + dy;
      }

      const maxW = window.innerWidth - SAFE_RIGHT - pos.x;

      const maxH = window.innerHeight - SAFE_BOTTOM - pos.y;

      const clampedW = Math.min(Math.max(newW, MIN_W), maxW);

      const clampedH = Math.min(Math.max(newH, MIN_H), maxH);

      setSize({ w: clampedW, h: clampedH });
      setPos({
        x: direction.includes("left") ? Math.max(newX, SAFE_LEFT) : pos.x,
        y: direction.includes("top") ? Math.max(newY, SAFE_TOP) : pos.y,
      });
    }

    // Pointer Event
    function up() {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    }
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  }

  return (
    <main
      data-window-id={id}
      onPointerDown={onDrag}
      className="absolute select-none"
      style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        zIndex: 999,
      }}
    >
      <div className="w-full h-full relative rounded-lg overflow-hidden shadow-xl">
        {children}
      </div>
      
      {/* Resize disabled for Flappy Bird */}
      {!disableResize && (
        <>

      {/* Rezise handling/corners */}
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "top-left")}
        className="absolute top-0 left-0 w-4 h-4 cursor-nwse-resize z-50"
      />
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "top-right")}
        className="absolute top-0 right-0 w-4 h-4 cursor-nwse-resize z-50"
      />
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "bottom-left")}
        className="absolute bottom-0 left-0 w-4 h-4 cursor-nwse-resize z-50"
      />
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "bottom-right")}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-50"
      />

      {/* Resize handling edges */}
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "top")}
        className="absolute top-0 left-4 right-4 h-2 cursor-ns-resize z-50"
      />
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "bottom")}
        className="absolute bottom-0 left-4 right-4 h-2 cursor-ns-resize z-50"
      />
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "left")}
        className="absolute left-0 top-4 bottom-4 w-2 cursor-ew-resize z-50"
      />
      <div
        data-resize
        onPointerDown={(e) => onResizeDown(e, "right")}
        className="absolute right-0 top-4 bottom-4 w-2 cursor-ew-resize z-50"
      />
      </>
      )}
    </main>
  );
}
