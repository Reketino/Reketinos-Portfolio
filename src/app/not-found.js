"use client";
import { useEffect, useRef, useState } from 'react'


export default function NotFound() {
  const [bearX, setbearX] = useState(150);
  const [bugs, setBugs] = useState([]);
   const [over,setOver] = useState(false);
   const audioRef = useRef(null);


   useEffect(() => {
     function startMusic() {
      if (!audioRef.current) {
        const audio = new Audio("/audio/beach.mp3")
        audio.loop = true;
        audio.volume = 0.4;

        audio.play().catch(() => {
          console.log("Autoplay is waking up after new interaction");
        });

        audioRef.current = audio;
      }


      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
     }

     window.addEventListener("click", startMusic);
     window.addEventListener("keydown", startMusic);


     return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
     }; 
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
        <main className='relative flex items-center justify-center min-h-screen text-white bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: "url('sprites/background.png')"}}
        >
          
        

        <section className='relative w-[350px] h-[400px] overflow-hidden rounded-xl backdrop-blur-xs bg-amber-100/10 border border-amber-100'>
        

        <div 
        className='absolute bottom-4 transition-all'
        style={{
          left: bearX,
          width: 100,
          height: 100,
          backgroundImage: "url('/sprites/bear.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        />

        {bugs.map((bug) => (
          <div
          key={bug.id}
          className='absolute'
          style={{
            width: 60,
            height: 60,
            top: bug.y,
            left: bug.x,
            backgroundImage:"url('/sprites/bee.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          />
        ))}
        </section>

        {over && (
          <button
          onClick={() => {
            setOver(false);
            setBugs([]);
            audioRef.current?.play();
          }}
          className='absolute bottom-12 px-6 py-3 bg-black/60 border border-white/20 rounded-xl hover:bg-black/80 transition'
          >
            Restart
          </button>
        )}
        </main>
      );
}
