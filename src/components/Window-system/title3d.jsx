"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Title3d({ text = "Reketino`s Homepage" }) {
  return (
    <div className="relative flex justify-center items-center perspective-[1000px]">
      <motion.h1
        initial={{ rotateX: 30, opacity: 0, y: 50 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          rotateY: 8,
          textShadow: `
        0 0 10px rgba(255,180,80,0.4),
        0 0 30px rgba(255,120,40,0.3)
        0 0 60px rgba(255,100,0,0.2)
        `,
          transition: { duration: 0.6 },
        }}
        className="text-5xl md:text-7xl font-extrabold text-center mt-6 select-none tracking-tight"
        style={{
          color: "rgba(255,220,180,0.9)",
          mixBlendMode: "soft-light",
          textShadow: `
        0 2px 6px rgba(0,0,0,0.25),
        0 4px 15px rgba(255,140,40,0.15),
        0 0 40px rgba(255,180,80,0.1)
        
        `,
          filter: "blur(0.3px)",
          transformStyle: "preserve-3d",
        }}
      >
        {text}
      </motion.h1>

      <div className="absolut inset-0 flex justify-center items-center">
        <motion.div
          className="w-[60%] h-[30%] rounded-full blur-3xl bg-graditent-to-t from-orange-500/20 via-amber-400/15 to-yellow-200/10"
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
