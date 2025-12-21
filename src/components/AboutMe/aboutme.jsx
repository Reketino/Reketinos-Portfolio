import React from "react";
import { Outfit } from "next/font/google";

import ProfileCard from "./profilecard";
import HobbiesSection from "./hobbiessection";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });


export default function AboutMe() {
  return (
    <main
      className={`${outfit.className} 
      relative bg-cover bg-center min-h-screen 
      text-gray-100 
      flex flex-col items-center justify-center 
      px-4 sm:px-6 md:px-12 py-10`}
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="
      absolute inset-0 
      bg-linear-to-b from-black/40 
      via-black/30 to-black/40
      " />

     <section className="
     relative flex flex-col
     items-center gap-12 z-10
     ">
     <ProfileCard />
     <HobbiesSection />
     </section>

    </main>
  );
}
