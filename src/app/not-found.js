"use client";
import { useEffect, useRef, useState } from 'react'

export default function NotFound() {
  const [bearX, setbearX] = useState(150);
  const [bugs, setBugs] = useState([]);
   const [over,setOver] = useState(false);
   const audioRef = useRef(null);


   useEffect(() => {
        const audio  = new Audio(
          "https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b30d83836.mp3?filename=happy-day-in-beach-hand-panwav-14755.mp3"
        ); 
        audio.loop = true;
        audio.volume();
        audioRef.current = audio;
        
        return () => audioRef.current?.pause();
       }, []); 


       useEffect(() => {
        const key = (e) => {
          if (e.key === "ArrowLeft" || e.key === "a")
            setbearX((x)=> Math.max(0, x - 20));
          if (e.key === "ArrowRight" || e.key === "d")
            setbearX((x) => Math.min(300, x + 20));
        };
        window.addEventListener("keydown", key);
        return () => window.removeEventListener("keydown", key);
       }, []);
    

       useEffect(() => {
        if (over) return;
        const spawn = setInterval(() => {
          setBugs((b) => [...b, { id: crypto.randomUUID(), x: Math.random() * 300, y: 0 }]);
        }, 650);
        return () => clearInterval (spawn);
       }, [over]);


       useEffect(() => {
        if (over) return;
        const loop = setInterval(() => { 
          setBugs ((b) => 
          b

          .map((bug) => ({ ...bug, y: bug.y + 8 }))
          .filter((bug) => bug.y < 420)
          );

          bugs.forEach((bug) => {
            const hitX = Math.abs(bug.x - bearX) < 40;
            const hitY = bug.y > 320 && bug.y < 360;
            if (hitX && hitY) {
              setOver(true);
              audioRef.current?.pause();
            }
          });
      }, 50);
      return () => clearInterval(loop);
      }, [bugs, bearX, over]);
   
}
