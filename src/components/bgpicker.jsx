"use client";
import React from 'react'
import { useBackground } from './bgprovider';

const backgrounds = [
    "/desktop.jpg"
]

export default function BgPicker() {
const { setbackground } = useBackground();

  return (
    <main className='flex flex-col items-center backrop-blur-md p-4 rounded-xl  gap-3 '>
      {backgrounds.map((img) => (
        <button
        key={img}
        onClick={() => setbackground(img)}
        className='w-20 h-20 rounded-lg bg-cover bg-center border border-white/20 hover:scale-105 transition'
        style={{ backgroundImage: `url(${img})` }}
      />
      ))}
    </main>
  );
}
