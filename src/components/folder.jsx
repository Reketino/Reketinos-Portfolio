import React from 'react'
import Image from 'next/image'

export default function Folder({
    label,
    icon,
    image,
    previewImages = [],
    onOpen
}) {
  return (
    <button
    onClick={onOpen}
    className='relative flex flex-col items center hover:scale-105 transition cursor-pointer'
    >

      {previewImages.length > 0 && (
     <ul className='absolute -top-3 -right-5 flex gap-1'>
     {previewImages.slice(0, 3).map((src) => (
     <li key={src}>
        <figure className='
        w-6 h-6 rounded-sm bg-cover bg-center
        border border-white/20 shadow
        '
        style={{backgroundImage: `url(${src})`}}
        />
        </li>
     ))}
     </ul>   
    )}

    <figure className='flex flex-col items-center'>
        {image && ( 
         <Image
         src={image}
         alt={label}
         width={64}
         height={64}
         className='rounded-lg pointer-events-none'
         />   
        )}
        
        {!image && ( 
         <span className='text-6xl pointer-events-none'>
            {icon || "📁"}
         </span>   
        )}

        <figcaption className='mt-2 text-sm text-center text-white'>
            {label}
        </figcaption>
    </figure>
    </button>
);
}
    
