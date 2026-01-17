"use client";
import { useEffect, useState } from 'react'

export  function useSleepScreen() {
 const [active, setActive] = useState(false);
  const [fade, setFade] = useState(false);

  //   Trigger functions globally
  useEffect(() => {
    window.enterSleep = () => {
      if (window.closeStartMenu) window.closeStartMenu();
      window.disableStartMenuClick = true
      setActive(true);
    };

    window.exitSleep = () => {
      setFade(false);

      setTimeout(() => {
        window.disableStartMenuClick = false;
        setActive(false);
      }, 300);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    setTimeout(() => setFade(true), 10);
    const wake = () => {
      window.exitSleep();
    };

    window.addEventListener("keydown", wake, { once: true });
    window.addEventListener("pointerdown", wake, { once: true });

    return () => {
      window.removeEventListener("keydown", wake);
      window.removeEventListener("pointerdown", wake);
    };
  }, [active]);

  

  return {
    active,
    fade
   }
  };
