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
    {isLoading ? (
       <LoaderCircle className="w-10 h-10 animate-spin text-amber-300" />
          ) : isPlaying ? (
            <Pause className="h-10 w-10 text-amber-300" />
          ) : (
            <Play className="ml-1 h-10 w-10 text-amber-300" />
          )}
      </motion.button>

      <audio 
      ref={audioRef} 
      src="/audio/about me.mp3"
      preload="metadata"
      onPlay={() => {
        setIsPlaying(true);
        setIsLoading(false);
      }}
      onPause={() => setIsPlaying(false)}
      onEnded={() => setIsPlaying(false)}
      onWaiting={() => setIsLoading(true)}
      onCanPlay={() => setIsLoading(false)}
      onError={() => {
        setIsPlaying(false);
        setIsLoading(false);
        setHasError(true);
      }}
      />
      
      <motion.p
      className="mt-3 text-sm italic text-gray-300"
      animate={{ opacity: isPlaying ? 1 : 0.6 }}
      aria-live="polite"
      >
      {hasError 
      ? "Unable to load narration" 
      : isLoading
       ? "Loading narration..."
      : isPlaying
      ? "Narration playing..."
    : "Hear narration"}
      </motion.p>
    </section>
  );
}
