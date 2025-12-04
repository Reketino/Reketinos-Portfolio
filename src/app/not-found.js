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
    
   
}
