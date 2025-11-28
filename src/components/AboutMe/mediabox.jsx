import React from 'react'
import Image from 'next/image';

export default function MediaBox({ src, type = "video", alt }) {
  return (
    <main className='mt-3 w-full max-w-[400px] mx-auto rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300'>
      {type=== "video" ? (
      <iframe
      className='w-full aspect-video'
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      />

     ) : (
        
        <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        className="w-full h-auto object-cover"
        />
     )}
    </main>
  );
}
