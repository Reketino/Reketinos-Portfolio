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

    
  return (
    <div>
      
    </div>
  )
}
