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
   
      return (
        <main className='relative flex items-center justify-center min-h-screen text-white overflow-hidden bg-blue-300'>
          <style>{`
          @keyframes sunPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.85; }
          100% { transform: scale(1); opacity: 1; }
          }
          @keyframes wave {
          0% { background-position: 0 0; }
          100% { background-position: 800px 0; }
          }
          `}</style>


          <div className='absolute top-10 right-10 w-40 h-40 rounded-full bg-yellow-300 opacity-70'
          style={{ animation: "sunPulse 6s infinite ease-in-out" }}
          />


          <h1 className='absolute top-16 text-[3rem] font-bold drop-shadow-xl text-yellow-100 tracking-wide'>
            Bear on Holiday
          </h1>


          <section className='absolute top-0 w-full h-1/3 overflow-hidden opacity-80'>
          <svg
          viewBox='0 0 1440 320'
          className='absolute top-0 w-[200%] h-full animate-[waveSlide_12s_linear_infinite]'
          preserveAspectRatio='none'
          >
            <path
            fill='#4aa3ff'
             d="M0,64L60,69.3C120,75,240,85,360,112C480,139,600,181,720,186.7C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
             />
          </svg>
          </section>


        </main>
      )
}
