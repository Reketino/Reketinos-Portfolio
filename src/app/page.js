import Image from "next/image";
import Desktop from "../components/desktop";
import React from "react";

export default function homePage() {
  return (
    <main
      className="min-h-screen  bg-cover bg-center text-white relative
      md:bg-cover md:bg-center"
      style={{ backgroundImage: "url('/desktop.jpg')" }}
    >
      <div className="absolute inset" />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center md:items-start md:justify-center">
        <h1
          className=" relative z-20 text-4xl md:text-6xl mt-10 text-amber-100 mb-40 mix-blend-screen font-bold 
      md:absolute md:top-10 md:left-1/2 md:-translate-x-1/2 md:text-center"
        >
          Reketino's Homepage
        </h1>
        <Desktop />
      </div>
    </main>
  );
}
