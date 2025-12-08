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

    const resizeDir = useRef("");


    function onDrag(e) {
        if (e.target.dataset.resize);
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

                if (newH > 300 && newH > 200) {
                    setSize({ w: newH, h: newH });
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
    <main>
      
    </main>
  )
}
