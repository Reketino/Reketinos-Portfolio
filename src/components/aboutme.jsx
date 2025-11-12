import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function AboutMe() {
  return (
    <main
      className={`${outfit.className} relative bg-cover bg-center min-h-screen text-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-10`}
      style={{ backgroundImage: "url('/bak.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

      <motion.section
        className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 mb-12"
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

            <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-2xl -z-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-amber-400 drop-shadow-lg">
            Hi, I`m <span className="text-blue-100">Bjørn Even</span>
          </h1>

          <p className={`${inter.className} text-sm text-gray-300 mt-2 italic`}>
            (Also known as <span className="text-amber-200">Reketino</span>)
          </p>

          <div
            className={`${inter.className} mt-8 text-gray-200 space-y-4 leading-relaxed`}
          >
            <p>
              🧔🏻 28 years old | 📍 Norway | 🎓 Participant at{" "}
              <span className="text-amber-300 font-semibold">Kodehode</span>
            </p>
            <p>
              🖥️ I’ve been working with computers for over 20 years — from 🎮
              gaming and 🎬 video editing in{" "}
              <span className="text-indigo-300">Premiere Pro</span> to 📸 photo
              editing in <span className="text-blue-300">Photoshop</span>.
            </p>
            <p>
              🚀 Through{" "}
              <span className="text-amber-300 font-semibold">Kodehode</span>,
              I’ve discovered how coding can channel creativity. I love building
              interactive and meaningful web experiences — and I’m diving deeper
              into backend development to strengthen my craft.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-10 drop-shadow-lg">
          🦥 My Hobbies & Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">
              Outdoors & Activity
            </h3>
            <ul className="space-y-6 text-gray-200">
              <li>
                🏃‍♂️ Trail running / jogging
                <div className="mt-3 flex justify-center">
                  <Image
                    src="/trailrun.jpg"
                    alt="Jogging"
                    width={300}
                    height={100}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-md w-full"
                  />
                </div>
              </li>

              <li>
                🚵🏻 Cycling (Mountain & Road)
                <div className="mt-3 flex justify-center">
                  <div className="w-full max-w-[600px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/Cm_TeuKtgRw?si=ungy74VpeyRF-BrO"
                      title="Cycling Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </li>

              <li>🏋🏻 Crossfit</li>
              <li>
                ❄️ Winter sports: snowshoeing, snowboarding, splitboarding
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">
              Gaming & Editing
            </h3>
            <ul className="space-y-6 text-gray-200">
              <li>🎮 PC Gaming</li>
              <li>🎬 Video Editing</li>
            <li>
            <div className="mt-3 flex justify-center">
              <div className="w-full max-w-[600px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/D_rQ4fOouk0?si=pHlv52uL3fiegLGx"
                  title="Rocket League Montage"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
