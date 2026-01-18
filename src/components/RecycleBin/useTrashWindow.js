"use client";
import { useCallback } from "react";

export function useTrashWindow({ onOpenFile }) {
  const playErrorSound = useCallback(() => {
    const audio = new Audio("/audio/error.mp3");
    audio.volume = 0.5;
    audio.play();
  }, []);

  const handleClick = useCallback(() => {
    playErrorSound();
    setTimeout(() => {
      if (onOpenFile) {
        onOpenFile();
      }
    }, 200);
  }, [playErrorSound, onOpenFile]);

  return {
    playErrorSound,
    handleClick,
  };
}
