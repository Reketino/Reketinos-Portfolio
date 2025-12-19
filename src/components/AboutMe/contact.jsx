import React from "react";
import ContactForm from "./contactform";
import TechEmailBg from "./techemailbg";

import { FaPhoneAlt, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Contact() {
  return (
    <main className="relative w-full max-2xl mx-auto overflow-x-hidden">
      <TechEmailBg />
      
      
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=" 
        relative z-10 text-white p-6 rounded-2xl
      bg-white/5 backdrop-blur-sm border border-white/10
      shadow-[0_0_30px_rgba(0,0,0,0.5)]  space-y-10
      "
      >
        <h1
          className="
        text-4xl font-bold 
        text-center text-blue-400
        drop-shadow-[0_0_15px_rgba(0,102,255,0.7)]
        tracking-wider hover:text-blue-100
        "
        >
          {" "}
          Get In Touch With Me
        </h1>
      
        {/* CONTACT SECTION */}
        <section className="grid grid-cols-2 gap-4">

          {/* TELEPHONE */}
          <a
            href="tel:+4798666484"
            className="flex flex-col items-center p-4 rounded-xl bg bg-neutral-900/40
             border border-neutral-700 hover:border-blue-400
            hover:bg-neutral-900/60 transition shadow-md"
          >
            <FaPhoneAlt size={28} className="mb-2 text-blue-400" />
            <span>Call Me</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:bjornevensk8@gmail.com"
            target="_blank"
            className="
            flex flex-col items-center p-4 rounded-xl bg bg-neutral-900/40
            border border-neutral-700 hover:border-blue-400
          hover:bg-neutral-900/60 transition shadow-md
          "
          >
            <FaEnvelope size={28} className="mb-2 text-blue-400" />
            <span>Email</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Reketino"
            target="_blank"
            className="
            flex flex-col items-center p-4 rounded-xl bg bg-neutral-900/40
            border border-neutral-700 hover:border-blue-400
          hover:bg-neutral-900/60 transition shadow-md
          "
          >
            <FaGithub size={28} className="mb-2 text-blue-400" />
            <span>Github</span>
          </a>
          
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/beareven/"
            target="_blank"
            className="
            flex flex-col items-center p-4 rounded-xl bg-neutral-900/40
            border border-neutral-700 hover:border-blue-400
           hover:bg-neutral-900/60 transition shadow-md
           "
          >
            <FaLinkedin size={28} className="mb-2 text-blue-400" />
            <span>LinkedIn</span>
          </a>

        </section>
        <ContactForm />
      </motion.div>
    </main>
  );
}
