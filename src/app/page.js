import Image from "next/image";
import Desktop from "../components/desktop";
import React from 'react'

export default function homePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/desktop.jpg')" }}
    >
      <h1 className="text-4xl text-amber-100 mix-blend-screen font-bold absolute top-10 transform opacity-90">
        Reketino's Homepage
      </h1>
      <Desktop />



    </main>
  )
}
