"use client";
import { useEffect, useRef, useState } from 'react'


export default function NotFound() {
  const [bearX, setbearX] = useState(150);
  const bearXRef = useRef(150);

  
   const [over,setOver] = useState(false);
   const [score, setScore] = useState(0);
   const [highscore, setHighscore] = useState(0);

   const lastScoreRef = useRef (performance.now());
   const audioRef = useRef(null);
   const bugsRef = useRef([]);
   const animationRef = useRef(null);



   useEffect(() => {
    bearXRef.current = bearX;
   }, [bearX]);



   useEffect(() => {
    const saved = localStorage.getItem("bear_highscore");
    if (saved) setHighscore(number(saved));
   }, []);


   useEffect(() => {
     function startMusic() {
      if (!audioRef.current) {
        const audio = new Audio("/audio/beach.mp3")
        audio.loop = true;
        audio.volume = 0.4;
        audio.play().catch(() => {});
        audioRef.current = audio;
      }
      window.removeEventListener("click", startMusic);
      window.removeEventListener("keydown", startMusic);
     }
     window.addEventListener("click", startMusic);
     window.addEventListener("keydown", startMusic);
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
          bugsRef.current.push({
            id: crypto.randomUUID(),
            x: Math.random() * 300,
            y: 0,
          });
        }, 700);

        return () => clearInterval(spawn);
        }, [over]);


        function startGameLoop() {
          let lastTime = performance.now();

          function loop(now) {
            const delta = now - lastTime;
            lastTime = now;

          if (now - lastScoreRef.current > 150) {
            setScore((s) => s + 1);
            lastScoreRef.current = now;
          }

            bugsRef.current.forEach((bug) => {
              bug.y += 0.15 * delta;
            });


            bugsRef.current = bugsRef.current.filter((bug) => bug.y < 420);


            for (let bug of bugsRef.current) {
              const hitX = Math.abs(bug.x - bearXRef.current) < 40;
              const hitY = bug.y > 320 && bug.y < 360;
              if (hitX && hitY) {
                return gameOver();
              }
            }

            animationRef.current = requestAnimationFrame(loop);
          }

          animationRef.current = requestAnimationFrame(loop);
        }


        function gameOver() {
          cancelAnimationFrame(animationRef.current);
          setOver(true);

          setHighscore((prev) => {
            const best = Math.max(prev, score);
            localStorage.setItem("bear_holidayscore", best);
            return best;
          });

          audioRef.current?.pause();
        }


        useEffect(() => {
          if (!over) {
            bugsRef.current = [];
            setScore(0);
            startGameLoop();
          }
        }, [over]);

      return (
        <main className='relative flex items-center justify-center min-h-screen text-white bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: "url('sprites/background.png')"}}
        >
          

          <div className='absolute top-4 left-4 text-2xl font-bold drop-shadow-lg'>
            Score: {score}
          </div>

          <div className='absolute top-4 right-4 text-2xl font-bold drop-shadow-lg'>
            Highscore: {highscore}
          </div>
        

        <section className='relative w-[350px] h-[400px] overflow-hidden rounded-xl backdrop-blur-xs bg-amber-100/10 border border-amber-100 shadow-xl'>
        

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

        {bugsRef.current.map((bug) => (
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
