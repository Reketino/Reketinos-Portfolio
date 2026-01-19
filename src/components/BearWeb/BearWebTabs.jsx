import Image from 'next/image';
import React from 'react'


export default function BearWebTabs({ fullscreen, onClose, onToggleFullscreen, onMinimize}) {
  return (


    <section className='bw-tabs flex items-center justify-between'>
      <div className='bw-tab active'>
        <img src='/icons/webbear-favicon.png' className='w-4 h-4' />
        <span>BearWeb</span>
      </div>

      <div className='bw-tab'>
        +
      </div>

     <nav className="flex items-center justify-between px-4 py-2">

            <div className="flex gap-2">
              <button
                onClick={onMinimize}
                className="hover:bg-neutral-700 p-1 rounded"
              >
                <Image
                  src="/fscreenicon/minimize.png"
                  alt="min"
                  width={16}
                  height={16}
                />
              </button>
    
              <button
                onClick={onToggleFullscreen}
                className="hover:bg-neutral-700 p-1 rounded"
              >
                <Image
                  src={
                    fullscreen
                      ? "/fscreenicon/restoredown.png"
                      : "/fscreenicon/maximize.png"
                  }
                  alt="full"
                  width={16}
                  height={16}
                />
              </button>
    
              <button onClick={onClose} className="hover:bg-red-600 p-1 rounded">
                <Image
                  src="/fscreenicon/close.png"
                  alt="close"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </nav>
    </section>
  );
}
