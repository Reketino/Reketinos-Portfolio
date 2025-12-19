"use client";
import Fullskjerm from "../Window-system/fullscreen";
import React from 'react'

export default function Error({ onBack, onMinimize }) {
  return (
    <Fullskjerm 
    title="system32_critical_error.log"
    onBack={onBack}
    onMinimize={onMinimize}
    >
        <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        allow="autoplay"
        allowFullScreen
        />
    </Fullskjerm>
  );
}
