import React from 'react'
import Image from 'next/image'
import { FaSteam } from 'react-icons/fa'
import { delay, motion, scale } from 'framer-motion'

export default function SteamCard({ steamUsername = "brukernavn" }) {
  return (
    <main>
    <motion.a
    href={`https://steamcommunity.com/id/${steamUsername}`}
    target='_blank'
    rel='noopener noreferrer'
    className='group relative flex flex-col items-center bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl p-6 md:p-8 w-full max-w-sm
    shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105'
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.8, delay: 0.3 }}
    whileHover={{ scale: 1.05 }}
    >
      <section className='w-20 h-20 rounded-full border-2 border-amber-400 overflow-hidden shadow-md mb-4'>
        <Image
        src="/steam-avatar.jpg"
        width={80}
        height={80}
        alt={`${steamUsername} Steam avatar`}
        className='object-cover w-full h-full'
        />
      </section>

      <h2 className='text-xl font-semibold text-white mb-1'>{steamUsername}</h2>

      <section className='flex items-center gap-2 text-gray-200 mb-4 group-hover:text-amber-400 transition-color duration-200'>
        <FaSteam className="w-5 h-5" />
        <span className='text-sm'>My Steam Profile</span>
      </section>

      <section className='w-full rounded-xl overflow-hidden shadow-inner'>
        <Image
        src={`https://badges.steamprofile.com/profile/default/${steamUsername}.png`}
        alt={`${steamUsername} Steam badge`}
        width={400}
        height={80}
        className='w-full h-auto object-cover'
        />
      </section>

     <div className='absolute inset-0 rounded-3xl bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none'></div>
    </motion.a>
      </main>
    
  )
}
