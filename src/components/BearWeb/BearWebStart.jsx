import React from 'react'

export default function BearWebStart({ onOpen }) {
    const favorites = [
        { label: "Github", url: "https://github.com" },
    ];


  return (
    <section className='bw-start'>
        <h1 className='bw-start-title'>BearWeb</h1>
        <p className='bw-start-sub'>Your bearowser - powered by Bear Even 🐻</p>

        <section className='bw-start-favorites'>
            {favorites.map((f) => (
             <button key={f.url} className='bw-start-fav' onClick={() => onOpen(f.url)}>
                {f.label}
             </button>   
            ))}
        </section>
    </section>
  );
}
