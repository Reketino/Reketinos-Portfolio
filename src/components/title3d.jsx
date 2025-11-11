"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function Title3d({ text = "Reketino`s Homepage" }) {
  return (
    <div className="relative flex justify-center items-center perspective-midrange">
    <motion.h1
    initial={{ rotateX: 30, opacity: 0, y: 50 }}
    animate={{ rotateX: 0, opacity: 1, y:0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-5xl md:text-7xl font-extrabold text-center mt-6 text-orange-300 select-none"
    style={{
        textShadow: `
        0 1px 0 #ffb347,
        0 2px 0 #ff9933,
        0 3px 0 #ff8000,
        0 4px 0 #e67300,
        0 5px 10px rgba(255, 115, 0, 0.7),
        0 0 20px rgba(255, 115, 0, 0.6),
        0 0 40px rgba(255, 100, 0, 0.5)
        `,
        transformStyle: "preserve-3d",
    }}
    whileHover={{
        scale: 1.05,
        rotateY: 10,
        textShadow:
        "0 0 20px #ffb347, 0 0 40px #ff9933, 0 0 60px #ff8000",
        transition: { duration: 0.4 },
    }}
        
   >
    {text}
    </motion.h1>
    </div>
  )
}
