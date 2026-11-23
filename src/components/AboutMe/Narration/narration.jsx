"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { Play, Pause, LoaderCircle } from 'lucide-react';

export default function Narration() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      setHasError(false);
      await audio.play();
    } catch (error) {
      console.error("Unable to play narration:", error);
      setHasError(true);
    }
  }

  return (
    <section className='mt-12 flex flex-col items-center'>
      <motion.button
      type='button'
      onClick={toggleAudio}
      disabled={isLoading}
      aria-label={isPlaying ? "Pause narration" : "Play narration"}
      aria-pressed={isPlaying}
      className={`   
        flex h-20 w-20 items-center justify-center
        rounded-full border-2 border-amber-400/70
        shadow-lg backdrop-blur-lg transition-all
        disabled:cursor-wait disabled:opacity-60
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-amber-400
        focus-visible:ring-offset-2 focus-visible:ring-offset-black
      ${isPlaying 
        ? "bg-amber-400/20 shadow-amber-400/50" 
        : "bg-white/10 hover:bg-white/20"
      }
       `}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
      >
    {isPlaying ? (
       <Pause className="w-10 h-10 text-amber-300" />
          ) : (
            <Play className="w-10 h-10 text-amber-300 ml-1" />
          )}
      </motion.button>

      <audio 
      ref={audioRef} 
      src='/audio/about me.mp3' 
      onEnded={() => setIsPlaying (false)}
      />
      
      <motion.p
      className="text-sm text-gray-300 mt-3 italic"
      animate={{ opacity: isPlaying ? 1 : 0.6 }}
      >
      {isPlaying ? "🎙️ Narration playing..." : "🔊 Hear narration"}
      </motion.p>
    </section>
  );
}
