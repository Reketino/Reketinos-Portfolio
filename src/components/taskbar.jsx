import Link from "next/link";
import { React, useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import WeatherApp from "./weatherapp";


export default function Taskbar({ minimizedApps, onRestore }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = time.toLocaleDateString("nb-NO", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  return (
    <footer 
    is="taskbar"
     className="
     fixed bottom-0 left-0 w-full 
     backdrop-blur-md bg-white/10 border-t
     border-white/20 shadow-[0_-2px_10px_rgba(0,0,0,0.2)]
      text-white z-50 flex items-center justify-between px-4 py-2">


      <nav className="flex items-center overflow-x-auto shrink-0">
        <button 
        className="
        relative w-9 h-9
       hover:bg-white/10 
       transition rounded-xl
       flex items-center justify-center">
          <Image
          src="/windows2.png"
          alt="Windows"
         fill
         className="object-contain"
          priority
          />
        </button>

        {minimizedApps.map((app) => (
          <button
            key={app.id}
            onClick={() => onRestore(app.id)}
            className="px-2 py-1 bg-gray-700/50 hover:bg-gray-600 rounded-md flex items-center gap-1 text-xs text-white transition"
          >
            {app.icon.endsWith(".png") ? (
              <img src={app.icon} alt={app.id} className="w-5 h-5 object-contain" />
            ) : (
              <span className="text-lg">{app.icon}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
        <Link
          href="https://github.com/Reketino"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto text-sm hover:bg-white/20 px-3 py-1 rounded-md"
        >
          &copy; {new Date().getFullYear()} Reketino
        </Link>
      </div>

      <section className="flex items-center gap-3 shrink-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-white/10 backdrop-blur-md rounded-lg px-2 py-0.5 items-center">
         
          <SocialIcon href="https://www.linkedin.com/in/beareven/">
            <FaLinkedin size={18} />
          </SocialIcon>

          <SocialIcon href="https://github.com/Reketino">
            <FaGithub size={18} />
          </SocialIcon>

          <SocialIcon href="https://www.facebook.com/bjorn.e.lyngstad/">
            <FaFacebook size={18} />
          </SocialIcon>

          <SocialIcon href="https://www.instagram.com/beareven/">
            <FaInstagram size={18} />
          </SocialIcon>
        </div>
          
       <section className="flex items-center gap-3">
        <WeatherApp />
       </section>

        <time className="text-right leading-tight text-[10px]">
          <div className="text-sm font-medium">{formattedTime}</div>
          <div className="text-xs text-white/70">{formattedDate}</div>
        </time>
      </section>
    </footer>
  );
}

function SocialIcon({ href, children }) { 
  return(
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-105 transition-transform"
    >
      {children}
    </a>
    );
    }
