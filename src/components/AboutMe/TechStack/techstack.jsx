
import React from "react";

import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRender,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiVercel,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function TechStack() {
  const sections = [
    {
      title: "Frontend",
      items: [
        { Icon: FaHtml5, color: "text-orange-500", name: "HTML" },
        { Icon: FaCss3Alt, color: "text-blue-600", name: "CSS" },
        { Icon: SiTailwindcss, color: "text-sky-500", name: "Tailwind" },
        { Icon: FaJs, color: "text-amber-300", name: "JavaScript" },
        { Icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
        { Icon: FaReact, color: "text-cyan-500", name: "React" },
        { Icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      ],
    },
    {
      title: "Backend",
      items: [
        { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
        { Icon: FaPython, color: "text-yellow-500", name: "Python" },
        { Icon: SiSupabase, color: "text-green-700", name: "Supabase" },
        { Icon: SiRender, color: "text-purple-300", name: "Render" },
      ],
    },
    {
      title: "Tools",
      items: [
        { Icon: FaGithub, color: "text-white", name: "GitHub" },
        { Icon: FaGitAlt, color: "text-red-400", name: "Git"},
        { Icon: VscVscode, color: "text-blue-400", name: "Vs Code" },
        { Icon: SiVercel, color: "text-gray-300", name: "Vercel" },
      ],
    },
    {
      title: "Creative Work",
      items: [
        { Icon: SiAdobephotoshop, color: "text-blue-700", name: "Photoshop" },
        {
          Icon: SiAdobepremierepro,
          color: "text-indigo-700",
          name: "Premiere Pro",
        },
        { Icon: FaFigma, color: "text-cyan-300", name: "Figma" },
      ],
    },
  ];
  return (
    <main
      className="
      relative bg-cover bg-center 
      min-h-screen p-8 flex 
      items-center justify-center
      text-amber-600
      "
      style={{ backgroundImage: "url('/tech.jpg')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-green-600/40 via-black/70 to-black/90">

      <div className="relative z-10 w-full ">
      <h2 className="
      text-4xl text-center font-bold 
      mb-5 mt-5  
      drop-shadow-[0_0_15px_rgba(16,255,100,0.4)]
      "
      >
        👨🏻‍💻 Tech Stack
        </h2>

      <div className="
      grid grid-cols-1 md:grid-cols-2 
      gap-10 max-w-5xl mx-auto
      "
      >
        {sections.map((section, i) => (
          <div
            key={i}
            className="
            bg-white/5 bg-opacity-30 
            backdrop-blur-md rounded-2xl 
            shadow-xl p-6 
            border-white/20"
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-4 text-center">
              {section.title}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
              {section.items.map(({ Icon, color, name }, j) => (
                <div key={j} className="flex flex-col items-center">
                  <div
                    className={`
                    flex items-center justify-center
                    rounded-xl shadow-md p-5 
                  bg-white/15 backdrop-blur-sm 
                    transition-all duration-300 
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(16,255,100,0.5)]
                   `}
                    style={{
                      boxShadow: `0 0 25px ${color.replace("text-", "")}66`,
                    }}
                  >
                    <Icon className={`text-5xl ${color}`} title={name} />
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </main>
  );
}
