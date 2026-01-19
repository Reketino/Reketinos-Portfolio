"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

import WeatherApp from "./weatherapp";
import StartMenu from "./StartMenu/startmenu";
import Clock from "./clock";
import Calendar from "./Calendar/Calendar";


export default function Taskbar({ minimizedApps, onRestore }) {
  const [openStart, setOpenStart] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [clockFormat, setClockFormat] = useState("24h");
  const [showTimezone, setShowTimezone] = useState(false);

  const calendarRef = useRef(null);
  

  useEffect(() => {
    const savedFormat = localStorage.getItem("clockFormat");
    const savedTZ = localStorage.getItem("showTimezone");

    if (savedFormat) setClockFormat(savedFormat);
    if (savedTZ) setShowTimezone(savedTZ === "true");
  }, []);


  useEffect(() => {
    localStorage.setItem("clockFormat", clockFormat);
  }, [clockFormat]);

  useEffect(() => {
    localStorage.setItem("showTimezone", showTimezone);
  }, [showTimezone]);


  useEffect(() => {
    const handleClick = (e) => {
      if (calendarRef.current?.contains(e.target)) {
        return;
      }

      setOpenStart(false);
      setCalendarOpen(false);
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <footer
    style={{
      "--taskbar-height": "56px",
    }}
      className="
    fixed bottom-0 left-0 
    h-14 w-full
    backdrop-blur-md bg-white/10 
    border-t border-white/20 
    shadow-[0_-2px_10px_rgba(0,0,0,0.2)]
  text-white z-50 
    flex items-center justify-between 
    px-4 
      "
    >

      {/* WINDOWS BUTTON */}
      <nav className="flex items-center shrink-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenStart(!openStart);
          }}
          className="
        relative w-9 h-9
        
       flex items-center justify-center
       rounded-xl
        hover:bg-white/10 transition 
       "
        >
          <Image
            src="/icons/windows2.png"
            alt="Windows"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
        </button>
        
        {/* Minimized Apps showing up in Taskbar */}
        {minimizedApps.map((app) => (
          <button
            key={app.id}
            onClick={() => onRestore(app.id)}
            className="
            w-10 h-10 mx-1
            text-xs text-white transition
            flex items-center justify-center gap-1 
           bg-gray-700/10  hover:bg-gray-600/30 
            rounded-md overflow-hidden
            "
          >
            {app.icon.endsWith(".png") ? (
              <img
                src={app.icon}
                alt={app.id}
                className="w-6 h-6 object-contain"
              />
            ) : (
              <span className="text-lg">{app.icon}</span>
            )}
          </button>
        ))}
      </nav>

      {/* SIGNATURE W/ LINK TO G/HUB */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
        <Link
          href="https://github.com/Reketino"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1 rounded-md hover:bg-white/20 transition"
        >
          &copy; {new Date().getFullYear()} Reketino
        </Link>
      </div>

      {/* SOCIAL LINKS BOX */}
      <section className="flex items-center gap-3 shrink-0">
        <nav
        aria-label="Social links"
        className="grid grid-cols-2 grid-rows-2 gap-1
         bg-white/10 backdrop-blur-md 
         rounded-lg px-2 py-1"
         >
          <SocialIcon href="https://www.linkedin.com/in/beareven/">
            <FaLinkedin 
            title="LinkedIn"
            size={18} />
          </SocialIcon>

          <SocialIcon href="https://github.com/Reketino">
            <FaGithub
            title="Github" 
            size={18} />
          </SocialIcon>

          <SocialIcon href="https://www.facebook.com/bjorn.e.lyngstad/">
            <FaFacebook 
            title="Facebook"
            size={18} />
          </SocialIcon>

          <SocialIcon href="https://www.instagram.com/beareven/">
            <FaInstagram 
            title="Instagram"
            size={18} />
          </SocialIcon>
        </nav>
        
        {/* WEATHER FROM YR.NO */}
        <section className="flex items-center gap-3">
          <WeatherApp />
        </section>
        
        {/* CLOCK + TIMEZONE & CALENDAR OPEN ON CLICK */}
        <Clock
        clockFormat={clockFormat}
        showTimezone={showTimezone}
        onClick={(e) => {
          e.stopPropagation();
          setCalendarOpen(!calendarOpen);
        }}
        />
        
        {/* CALENDAR IMPORT */}
        {calendarOpen && (
          <div
            ref={calendarRef}
            className="
          absolute bottom-14 right-4

          bg-linear-to-br 
          from-black
          to-black/20 
          backdrop-blur-2xl
          
          border border-white/20
          rounded-br-lg shadow-2xl p-4
          w-64 z-50
          "
          >
            <div className="
            absolute inset-0
            bg-amber-
            rounded-2xl
            pointer-events-none
            "/>
            <Calendar />
          </div>
        )}
      </section>

      {/* STARTMENU W/IMPORT */}
      {openStart && (
        <StartMenu
          clockFormat={clockFormat}
          setClockFormat={setClockFormat}
          showTimezone={showTimezone}
          setShowTimezone={setShowTimezone}
        />
      )}
    </footer>
  );
}

// REUSABLE WRAPPER FOR SOCIALICONS
function SocialIcon({ href, children }) {
  return (
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
