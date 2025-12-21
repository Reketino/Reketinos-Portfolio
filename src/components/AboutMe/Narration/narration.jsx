import React, { useState } from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export default function Narration() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main>

      <motion.div
      className='flex flex-col items-center mt-12'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      >

      <motion.button
      onClick={toggleAudio}
      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-400/70 backdrop-blur-lg transition-all
      ${isPlaying ? "bg-amber-400/20 shadow-amber-400/50" : "bg-white/10 hover:bg-white/20"}
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
      src='/audio/narrationone.mp3' 
      onEnded={() => setIsPlaying (false)}
      />
      
      <motion.p
      className="text-sm text-gray-300 mt-3 italic"
      animate={{ opacity: isPlaying ? 1 : 0.6 }}
      >
      {isPlaying ? "🎙️ Narration playing..." : "🔊 Hear narration"}
      </motion.p>
      </motion.div>
    </main>
  );
}
