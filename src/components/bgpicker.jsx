"use client";
import React from 'react'
import { useBackground } from './bgprovider';
import { useState } from 'react';
import { MdWallpaper } from "react-icons/md";

const backgrounds = [
    "/desktop.jpg",
    "/desktop2.jpg",
    "/desktop3.jpg"

]

export default function BgPicker() {
  const [open, setOpen] =useState(false);
const { setBackground } = useBackground();

  return (
<section className='relative'>
<button
onClick={() => setOpen (!open)}
className='text-white text-2xl hover:scale-105 transition'
>
  <MdWallpaper />
</button>

    <main className='absolute bottom-12 right-0 flex flex-col items-center bg-black/60 backdrop-blur-md p-4 rounded-xl gap-3 border border-white/20 shadow-xl z-9999'>
      {backgrounds.map((img) => (
        <button
        key={img}
        onClick={() => setBackground(img)}
        className='w-20 h-20 rounded-lg bg-cover bg-center border border-white/20 hover:scale-105 transition'
        style={{ backgroundImage: `url(${img})` }}
      />
      ))}
    </main>

    </section>
  );
}
