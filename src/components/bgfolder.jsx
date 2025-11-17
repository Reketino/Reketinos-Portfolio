"use client";
import React from "react";


export default function BgFolder({ onOpen }) {
  return (
    <main
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
      onClick={onOpen}
    >
      <span className="text-6xl">📂</span>
      <p className="mt-2 text-sm text-center">Backgrounds</p>
    </main>
  );
}
