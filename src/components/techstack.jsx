import React from "react";

import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRender,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiVercel,
  SiSupabase,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function TechStack() {
  return (
    <main className="bg-black">
      <div className="p-6 text-amber-600">
        <h2 className="text-2xl font-bold mb-4 text-center">👨🏻‍💻 Tech Stack</h2>
        <div className="grid grid-cols-3 gap-2 text-center text-5xl">
          <FaJs title="Javacript" className="text-amber-300" />
          <FaHtml5 title="HTML" className="text-orange-500" />
          <FaCss3Alt title="CSS" className="text-blue-600" />
          <FaReact title="React" className="text-cyan-500" />
          <SiNextdotjs title="Next" className="text-shadow-indigo-200" />
          <SiVercel title="Vercel" className="text-shadow-white" />
          <SiSupabase title="Supabase" className="text-green-700" />
          <FaPython
            title="Python"
            className="text-transparent bg-clip-text bg-linear-to-r from to-blue-500 to bg-yellow-300"
          />
          <SiRender title="Render" className="text-white" />
          <FaGithub title="Git" className="text-shadow-indigo-100" />
          <VscVscode title="Vscode" className="text-cyan-500" />
          <SiAdobepremierepro title="Premiere Pro" className="text-blue-900" />
          <SiAdobephotoshop title="Photoshop" className="text-blue-950" />
        </div>
      </div>
    </main>
  );
}
