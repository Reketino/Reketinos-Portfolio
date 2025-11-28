import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Narration from "./narration";
import NarrationTwo from "./narrationtwo";
import SteamCard from "./steamcard";
import MediaBox from "./mediabox";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function AboutMe() {
  return (
    <main
      className={`${outfit.className} relative bg-cover bg-center min-h-screen text-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-10`}
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/40" />

      <motion.section
        className="relative z-10 w-full max-w-3xl bg-amber-700/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Image
              src="/me.jpg"
              width={600}
              height={600}
              alt="Bjørn Even Portrait"
              className="rounded-full object-cover border-4 border-amber-500/40 shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl -z-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-amber-400 drop-shadow-lg">
            Hi, I`m <span className="text-white">Bjørn Even</span>
          </h1>

          <p className={`${inter.className} text-sm text-gray-300 mt-2 italic`}>
            (Also known as <span className="text-amber-200">Reketino</span>)
          </p>

          <div
            className={`${inter.className} mt-8 text-gray-200 space-y-4 leading-relaxed`}
          >
            <p>
              🧔🏻 28 years old | 📍 Sykkylven, More & Romsdal, Norway | 🎓
              Participant at{" "}
              <span className="text-amber-300 font-semibold">Kodehode</span>
            </p>
            <p>
              I`ve spent over 20 years around computers — from 🎮 gaming and
              digital creativity to 🎬 video and 📸 photo editing — but it
              wasn`t until{" "}
              <span className="text-amber-300 font-semibold">Kodehode</span>{" "}
              that I discovered how naturally coding fits the way I think and
              create.
            </p>
            <p>
              Today I focus on building clean, responsive and engaging web
              experiences. I work across the full stack, enjoy exploring ⚙️
              backend concepts, and love turning ideas into something{" "}
              <span className="text-indigo-300">functional</span> and{" "}
              <span className="text-blue-300">intuitive</span>.
            </p>
            <p>
              I approach coding like training: progress happens bit by bit, and
              every challenge is an opportunity to build new strength.
              Problem-solving motivates me, and I`m at my best when breaking
              down complexity into clear, structured solutions.
            </p>
            <p>
              On top of that, I`m easy to work with, curious, and highly
              collaborative — I enjoy working with others, sharing ideas, and
              creating something better together.
            </p>
            <Narration />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 w-full max-w-6xl bg-amber-900/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-14 border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-10 drop-shadow-lg">
          🦥 My Hobbies & Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-stretch">
          <section
            className="flex flex-col items-center text-center bg-amber-500/10 p-8 rounded-2xl border border-amber-600/15 shadow-lg 
          hover:shadow-2xl transition-all duration-300">

            <h3 className="text-2xl font-semibold text-amber-600 mb-6">Outdoors & Activity</h3>

            <ul className="space-y-8 text-emerald-300 text-lg">
             
             <section className="bg-white/5 p-4 rounded-xl shadow-lg">
              <li>
                🏃‍♂️ Trail running / <span className="text-white">jogging</span>
                  <MediaBox type="Image"src="/trailrun.jpg"alt="Jogging" />
              </li>
              </section>
            
             <section className="bg-white/5 p-4 rounded-xl shadow-lg">
              <li>🚵🏻 <span className="text-gray-200">Cycling</span> (Mountain & <span className="text-gray-500">Road)</span></li>
                      <MediaBox src="https://www.youtube.com/embed/Cm_TeuKtgRw?si=ungy74VpeyRF-BrO" />
              
              </section>
             <section className="bg-white/5 p-4 rounded-xl shadow-lg">
              <li className="text-white">🏋🏻 Crossfit</li>
              <li className="text-blue-400">
                ❄️ Winter sports: snowshoeing, snowboarding, splitboarding
              </li>
              </section>

            </ul>
          </section>

          <section
            className="flex flex-col items-center text-center bg-amber-500/10 p-8 rounded-2xl border-gray-700/40 shadow-lg 
          hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-amber-600 mb-6">
              Gaming & Editing
            </h3>

            <ul className="space-y-8 text-blue-300 text-lg">
               
               <section className="bg-white/5 p-4 rounded-xl shadow-lg">
              <li>🎮 PC Gaming</li>
              <MediaBox src="https://www.youtube.com/embed/D_rQ4fOouk0?si=pHlv52uL3fiegLGx" />
              <div className="mt-4 flex justify-center">
                <SteamCard steamId="76561198037781673" />
              </div>
              </section>

              <section className="bg-white/5 p-4 rounded-xl shadow-lg">
              <li className="mt-2">🎬 Video Editing
             <MediaBox src="https://www.youtube.com/embed/EVIE_8xvWws?si=4iDvqcDL7Pa79HSQ"/>
             </li>
             </section>
              <NarrationTwo className="mt-4" />
            </ul>
          </section>
        </div>
      </motion.section>
    </main>
  );
}
