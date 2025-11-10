import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <main className='relative bg-cover bg-center min-h-screen text-gray-200 p-8 flex items-center justify-center'
    style={{ backgroundImage: "url('/bak.jpeg')"}}
    >
      <div className='absolute inset-0 bg-linear-to-b from black/70 via-black/80 to-black/90' />
      
      <motion.section className='relative z-10 max-w-3xl bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/10'
      initial={{ opacity: 0, y: 50}}
      animate={{ opacity: 1, y:0}}
      transition={{ duration:0.8}}
      >
        <div className='mt-8 flex justify-center'>
          <Image
          src="/me.jpg"
          width={600}
          height={600}
          alt='Bjorn Even Portrait'
          className='rounded-full  object-cover border-4 border-blue-950 shadow-lg hover:scale-105 transition-transform'
          />
        </div>
      <h1 className='text-4xl font-bold text-center text-amber-500 mb-6'>
        Hi I`m <span className='text-blue-950'>Bjørn Even</span>
      </h1>
      
      <p className='text-center text-sm text-gray-400 mb-8 italic'>
        (Also known as <span className='text-amber-200'>Reketino</span>)
      </p>

      <div className='space-y-5 text-lg leading leading-relaxed text-gray-300'>
        <p>🧔🏻28 years old | 📍 Norway |🎓 Participant at <span className='text-amber-200 font-semibold'>Kodehode</span></p>
      </div>

      <p className='mt-2'>🖥️ I`ve been working with computers for over 20 years with everything from 🎮 gaming to 🎬 video editing in 
         <span className="text-indigo-400">Premiere Pro</span> to 📸 photo editing in <span className="text-blue-400">Photoshop</span>
      </p>

      <p className='mt-2'>🚀 Now I`ve taken a leap of faith into the world of coding through <span className='text-amber-200 font-semibold'>Kodehode</span>,
      where I discovered a new way to channel my creativity. I love building interactive and functional web applications, 
      but I am also curious about backend and eager to sharpen my skills there.
      </p>
      </motion.section>

      <motion.section className='relative z-10 max-w-3xl bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/10'
      initial={{ opacity: 0, y: 50}}
      animate={{ opacity: 1, y:0}}
      transition={{ duration:0.8}}
      >
        <h2 className='text-3xl font-bold text-center text-blue-950 mb-6'>
          🦥 My Hobbies & Interests
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold text-amber-500 mb-2'>Outdoors Activity</h3>
            <ul className='list-disc list-inside text-gray-300'>
              <li>
                🏃‍♂️ Trail running / jogging
                <div className='mt-2'>
                  <Image
                  src='/trailrun.jpg'
                 alt='Jogging'
                 width={500}
                 height={300}
                 className='rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                 />
                </div>
              </li>
             
             <li>
              🚵🏻 Cycling (mountain & Road)
              <div className='mt-2 flex justify-center'>
                 <iframe 
              width="100%" 
              height="200" 
              src="https://youtu.be/Cm_TeuKtgRw?si=h1ZPQmDWLC36R39W" 
              title="Mountain Biking" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen />
              </div>
             </li>
             
             <li>🏋🏻Crossfit</li>
             <li>❄️ Winter sports: snowshoeing, snowboarding and splitboarding</li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h3 className='text-xl font-semibold text-amber-500 mb-2'>Gaming and Editing</h3>
            <ul className='list-disc list-inside text-gray-300'>
            <li>🎮Pc Gaming</li>
            <li>🎬Video Editing</li>
            </ul>
            <div className='mt-2'>
              <iframe 
              width="100%" 
              height="200" 
              src="https://www.youtube.com/embed/D_rQ4fOouk0?si=pHlv52uL3fiegLGx" 
              title="Rocket League Montage" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
