import { color } from "framer-motion";
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
  FaNodeJs,
  FaLinux,
  FanNpm,
  FaWindows,
  FaLaptopCode,
  FaNpm,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRender,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiVercel,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPostgresql,
  SiLinuxmint,
  SiDotnet,
  SiGithubactions,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function TechStack() {
  const sections = [
    {
      title: "Frontend",
      items: [
        { Icon: FaHtml5, name: "HTML", color: "text-orange-500" },
        { Icon: FaCss3Alt, name: "CSS", color: "text-blue-600" },
        { Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
        { Icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
        { Icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { Icon: FaReact, name: "React", color: "text-cyan-400" },
        { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { Icon: SiVite, name: "Vite", color: "text-purple-400" },
      ],
    },
    {
      title: "Backend",
      items: [
        { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
        { Icon: FaPython, name: "Python", color: "text-yellow-400" },
        { Icon: SiDotnet, name: ".NET", color: "text-purple-700" },
        { Icon: SiSupabase, name: "Supabase", color: "text-emerald-400" },
        { Icon: SiRender, name: "Render", color: "text-purple-300" },
        { Icon: SiPostgresql, name: "PostgreSQL", color: "text-sky-500" },
      ],
    },
    {
      title: "Tools & DevOps",
      items: [
        { Icon: FaGithub, name: "GitHub", color: "text-white" },
        { Icon: FaGitAlt, name: "Git", color: "text-red-400" },
        { Icon: FaNpm, name: "npm", color: "text-red-500" },
        {
          Icon: SiGithubactions,
          name: "GitHub Actions",
          color: "text-blue-400",
        },
        { Icon: VscVscode, name: "VS Code", color: "text-blue-400" },
        { Icon: SiVercel, name: "Vercel", color: "text-gray-300" },
      ],
    },
    {
      title: "Operating Systems",
      items: [
        { Icon: FaWindows, name: "Windows", color: "text-cyan-300" },
        { Icon: FaLinux, name: "Linux", color: "text-yellow-400" },
        { Icon: SiLinuxmint, name: "Linux Mint", color: "text-green-500" },
      ],
    },
    {
      title: "Creative Work",
      items: [
        { Icon: SiAdobephotoshop, name: "Photoshop", color: "text-blue-500" },
        {
          Icon: SiAdobepremierepro,
          name: "Premiere Pro",
          color: "text-indigo-700",
        },
        { Icon: FaFigma, name: "Figma", color: "text-cyan-300" },
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
      <div className="absolute inset-0 bg-linear-to-b from-green-600/40 via-black/70 to-black/90" />

      <section className="relative z-10 w-full ">
        <header>
          <h2 className="mb-5 mt-5 flex font-supercharge items-center justify-center gap-3 text-3xl font-bold text-white">
            <FaLaptopCode
            className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            aria-hidden="true"
            />
            Tech Stack
          </h2>
        </header>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 px-2 sm:px-4 md:grid-cols-2 lg:gap-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="
            bg-white/5 bg-opacity-30 
            backdrop-blur-md rounded-2xl 
            shadow-xl p-6 
            border-white/20"
            >
              <h3 className="text-2xl font-supercharge text-green-500 mb-4 text-center">
                {section.title}
              </h3>

              <ul className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-6 text-center">
                {section.items.map(({ Icon, color, name }) => (
                  <li key={name} className="group flex min-w-0 flex-col items-center">
                    <div
                      className={`
                    flex items-center justify-center
                    rounded-xl shadow-md p-5 
                  bg-white/15 backdrop-blur-sm 
                    transition-all duration-300 
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(16,255,100,0.5)]
                   `}
                    >
                      <Icon
                        className={`text-5xl ${color}`}
                        title={name}
                        aria-hidden
                      />
                    </div>

                    <span className="
                  mt-2 block w-full min-w-0
                  wrap-break-word px-1
                  text-center text-xs sm:text-sm
                  font-semibold text-gray-300/90
                  tracking-wide transition-colors duration-300
                group-hover:text-green-300
                    "
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
