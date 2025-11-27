"use client";
import Fullskjerm from "../fullskjerm";
import React from 'react'

export default function Error({ onBack, onMinimize }) {
  return (
    <Fullskjerm 
    title="System File Viewer"
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
