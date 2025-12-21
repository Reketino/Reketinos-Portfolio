import Image from 'next/image';
import { motion } from "framer-motion";
import { Outfit, Inter } from 'next/font/google';
import Narration from './narration';

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function ProfileCard() {
  return (

      <motion.section
        className={`
        ${outfit.className}
        relative w-full max-w-3xl 
        bg-amber-700/10 backdrop-blur-lg 
        rounded-3xl shadow-2xl 
        p-8 md:p-12 mb-12 z-10
        border border-white/10
        `}
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
              className="
              rounded-full object-cover 
              border-4 border-amber-500/40 
              shadow-2xl hover:scale-105 
              transition-transform duration-500
              "
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
     
  )
}
