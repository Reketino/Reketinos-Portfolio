"use client";

import { useState, useRef } from 'react'

export default function ResizeWindow({
    id,
    children,
    startX = 0,
    startY= 0,
    width = 800,
    height = 500,
}) {
    const [pos, setPos] = useState({ x: startX, y: startY });
    const [size, setSize] = useState({ w: width, h: height });


    function onDrag(e) {
        if (e.target.dataset.resize) return;
        if (e.button !== 0) return;

        const startX0 = e.clientX;
        const startY0 = e.clientY
        const initX = pos.x;
        const initY = pos.y;


        function move (ev) {
            setPos({
                x: initX + (ev.clientX - startX0),
                y: initY + (ev.clientY - startY0),
            });
        }

        function up() {
            document.removeEventListener("pointermove", move);
            document.removeEventListener("pointerup", up);
        }

        document.addEventListener("pointermove", move);
        document.addEventListener("pointerup", up);
    }


        function onResizeDown(e, direction) {
            e.stopPropagation();
            resizeDir.current = direction;

            
            const startX0 = e.clientX;
            const startY0 = e.clientY


            const initW = size.w;
            const initH = size.h;
            const initX = pos.x;
            const initY = pos.y;

            
            function move (ev) {
                const dx = ev.clientX - startX0;
                const dy = ev.clientY - startY0;


                let newW = initW;
                let newH = initH;
                let newX = initX;
                let newY = initY;


                if (direction.includes ("right")) newW = initW + dx;
                if (direction.includes ("bottom")) newH = initH + dy;

                if (direction.includes("left")) {
                    newW = initW - dx;
                    newX = initX + dx;
                }

                if (direction.includes("top")) {
                    newH = initH - dy;
                    newY = initY + dy;
                }

                if (newW > 300 && newH > 200) {
                    setSize({ w: newW, h: newH });
                    setPos({ x: newX, y: newY });
                }
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
    onPointerDown={onDrag}
    className='absolute select-none'
    style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
        zIndex: 999,
    }}
    >
        <section className='w-full h-full relative rounded-lg overflow-hidden shadow-xl'>
            {children}
        </section>

    {/* Rezise handling/corners */}
        <div 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "top-left")}
        className='absolute top-0 left-0 w-4 h-4 cursor-nwse-resize'
        />
        <div 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "top-right")}
        className='absolute top-0 right-0 w-4 h-4 cursor-nwse-resize'
        />
        <div 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "bottom-left")}
        className='absolute bottom-0 left-0 w-4 h-4 cursor-nwse-resize'
        />
        <div 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "bottom-right")}
        className='absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize'
        />

    {/* Resize handling edges */}
        <section 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "top")}
        className='absolute top-0 left-4 right-4 h-2 cursor-ns-resize'
        />
        <section 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "bottom")}
        className='absolute bottom-0 left-4 right-4 h-2 cursor-ns-resize'
        />
        <section 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "left")}
        className='absolute left-0 top-4 bottom-4 w-2 cursor-ew-resize'
        />
        <section 
        data-resize
        onPointerDown={(e) => onResizeDown(e, "right")}
        className='absolute right-0 top-4 bottom-4 w-2 cursor-ew-resize'
        />
    </main>
  );
}
