import React from 'react'
import ContactForm from './contactform'
import { FaPhoneAlt, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion";
import TechEmailBg from './techemailbg';


export default function Contact() {
  return (
    <main className='relative w-full max-2xl mx-auto'>
      
      <TechEmailBg />

      <motion.div
      initial={{ opacity: 0, y: 25}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.4}}
      className=' relative z-10 text-white p-6 rounded-2xl
      bg-white/10 backdrop-blur-xl border border-white/10
      shadow-[0_0_30px_rgba(0,0,0,0.5)]  space-y-10'
      >

<h1 className=' text-4xl font-semibold text-center'> Get In Touch With Me</h1>

<section className='grid grid-cols-2 gap-4'>

<a
href='tel:+4798666484'
className='flex flex-col items-center p-4 rounded-xl bg bg-neutral-900/40
border border-neutral-700 hover:border-blue-400
hover:bg-neutral-900/60 transition shadow-md'
>
    <FaPhoneAlt size={28} className='mb-2 text-blue-400' />
    <span>Call Me</span>
</a>

<a
href='mailto:bjornevensk8@gmail.com'
target='_blank'
className='flex flex-col items-center p-4 rounded-xl bg bg-neutral-900/40
border border-neutral-700 hover:border-blue-400
hover:bg-neutral-900/60 transition shadow-md'
>
    <FaEnvelope size={28} className='mb-2 text-blue-400' />
    <span>Email</span>
</a>

<a
href='https://github.com/Reketino'
target='_blank'
className='flex flex-col items-center p-4 rounded-xl bg bg-neutral-900/40
border border-neutral-700 hover:border-blue-400
hover:bg-neutral-900/60 transition shadow-md'
>
    <FaEnvelope size={28} className='mb-2 text-blue-400' />
    <span>Github</span>
</a>

  <a
            href="https://www.linkedin.com/in/beareven/"
            target="_blank"
            className="flex flex-col items-center p-4 rounded-xl bg-neutral-900/40
                       border border-neutral-700 hover:border-blue-400
                       hover:bg-neutral-900/60 transition shadow-md"
          >
            <FaLinkedin size={28} className="mb-2 text-blue-400" />
            <span>LinkedIn</span>
          </a>
</section>
<ContactForm />
      </motion.div>
    </main>
  )
}
