import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";


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
    <div className="taskbar fixed bottom-0 left-0 w-full backdrop-blur-md bg-white/10 border-t
     border-white/20 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] text-white px-4 py-2 flex items-center justify-between z-50 gap-2">
      <div className="flex items-center overflow-x-auto gap-1">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-white/10 px-2 py-1 rounded-md transition">
          <span className="text-lg">🪟</span>
          <span className="text-sm font-medium">Start</span>
        </div>

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
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="https://github.com/Reketino"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:bg-white/20 px-2 py-1 rounded-md inline-block transition"
        >
          &copy; {new Date().getFullYear()} Reketino
        </Link>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <section className="grid grid-cols-2 grid-rows-2 gap-1 bg-white/10 backdrop-blur-md rounded-lg px-2 py-0.5 items-center">
          <a
            href="https://www.linkedin.com/in/beareven/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/Reketino"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.facebook.com/bjorn.e.lyngstad/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105"
          >
            <FaFacebook size={18} />
          </a>

          <a
            href="https://www.instagram.com/beareven/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105"
          >
            <FaInstagram size={18} />
          </a>
        </section>

        <div className="text-right leading-tight text-[10px] ml-1 shrink-0">
          <div className="text-sm font-medium">{formattedTime}</div>
          <div className="text-xs text-white/80">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
}
