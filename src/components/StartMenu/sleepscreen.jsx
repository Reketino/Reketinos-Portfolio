"use client";

import { useEffect, useState} from 'react'



export default function SleepScreen() {
  const {active, setActive} = useState(false);
  const {fade, setFade} = useState(false); 



  useEffect (() => {
    window.enterSleep = () => setActive(true);
    window.exitSleep = () => setActive(false);
  }, []);

  useEffect(() => {
    if (!active) return;


    setTimeout(() => setFade(true), 10);


    const wake = () => {
        setFade(false);
        setTimeout(() => setActive(false), 250);
    };


    window.addEventListener("keydown", wake, { once: true });
    window.addEventListener("pointerdown", wake, { once: true});

    return () => {
        window.removeEventListener("keydown", wake);
        window.removeEventListener("pointerdown", wake);
    };
  }, [active]);

  if (!active) return null;
  
    return (
    <main
    className={`
        fixed inset-0 z-999999
        flex items-center justify-center
        bg-black transition-opacity duration-300
        ${fade ? "opacity-100" : "opacity-0"}
        `}
    >
      
    </main>
  )
}
