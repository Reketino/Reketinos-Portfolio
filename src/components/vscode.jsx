"use client";
import React from 'react'
import Fullskjerm from './fullskjerm';

export default function VSCode({ onBack, onMinimize }) {
  return (
    <Fullskjerm 
    title="Visual Studio Code"
    url="https://stackblitz.com/edit/vitejs-vite-yfyzif?embed=1&file=index.html"
    onBack={onBack}
    onMinimize={onMinimize}
    />
      
    
  )
}
