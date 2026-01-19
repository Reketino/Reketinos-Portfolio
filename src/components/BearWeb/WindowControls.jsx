import Image from 'next/image';
import React from 'react';

export default function WindowControls({
    fullscreen,
    onToggleFullscreen,
    onMinimize,
    onClose
}) {
  return (
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
  );
}
