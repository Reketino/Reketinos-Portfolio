"use client";
import React, { useEffect } from "react";
import {createContext, useContext, useState} from "react";

const BackgroundContext = createContext();

export default function BgProvider({ children }) {
    const [background, setBackground] = useState (null); 
    const [isClient, setIsclient] = useState(false);

useEffect (()=> { 
    const saved = localStorage.getItem("selectedBackground");
      setBackground(saved || "/backgrounds/desktop6.webp");
      setIsclient(true);
   }, []);

   useEffect(() => {
localStorage.setItem("selectedBackground", background);    
}, [background]);

if (!isClient || !background) return null;

  return (
    <BackgroundContext.Provider value={{background, setBackground}}>
        {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
    return useContext(BackgroundContext);
}