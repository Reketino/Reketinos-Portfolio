"use client";
import { FaTimes } from 'react-icons/fa';
import React from 'react'
import { useTrashWindow } from './useTrashWindow';

export default function TrashWindow({ onClose, onOpenFile }) { 
  const { handleClick } = useTrashWindow({ onOpenFile});
   

  
  return (
    <main 
    className='
    fixed top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-80 bg-black/70 backdrop-blur-xl
    border border-white/10 rounded-xl
    shadow-2xl p-4 z-9999'
     >
      <header className=' flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'> Recycle Bin</h2>
        <button onClick={onClose}>
            <FaTimes className='text-white hover:text-red-500 transition' />
        </button>
      </header>
      
      <button
      onClick={handleClick}
      className='
      flex items-center gap-3 w-full text-left
      hover:bg-white/10 transition p-2 rounded-lg
      '
      >
        <img src='/icons/brokenfile.png' className='w-8 h-8' alt="Broken File" />
        <span className='text-sm'>system32_critical_error.log</span>
      </button>

    </main>
  )
}
