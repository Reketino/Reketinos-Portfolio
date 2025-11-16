"use client";
import React, { useEffect } from "react";
import {createContext, useContext, useState} from "react";

const BackgroundContext = createContext();

export default function BgProvider({ children }) {
    const [background, setBackground] = useState("/desktop.jpg");

useEffect (()=> { 
    const saved = localStorage.getItem("selectedBackground");
    if (saved) {
        setBackground(saved);
    }
   }, []);

   useEffect(() => {
localStorage.setItem("selectedBackground", background);    
}, [background]);

  return (
    <BackgroundContext.Provider value={{background, setBackground}}>
        {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
    return useContext(BackgroundContext);
}



