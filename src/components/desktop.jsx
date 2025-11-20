"use client";
import { React, useState } from "react";
import Fullskjerm from "./fullskjerm";
import Taskbar from "./taskbar";
import TechStack from "./techstack";
import AboutMe from "./aboutme";
import Contact from "./contact";
import BgWindow from "./bgwindow";
import DesktopIcon from "./desktopicon";
import MenuItem from "./menuitem";
import BearWebWindow from "./BearWeb/BearWebWindow";


export default function Desktop() {
  const [openFolder, setOpenFolder] = useState(false);
  const [openApp, setOpenApp] = useState(null);
  const [minimizedApps, setMinimizedApps] = useState([]);

  const DesktopIcons = [
    {
      id: "about",
      startX: 0,
      startY: 0,
      label: "BEARME.MD",
      icon: "📖",
      onOpen: () => setOpenApp("About")
    },
    {
      id: "projects",
      startX: 0,
      startY: 120,
      label: "My Projects",
      icon: "📂",
      onOpen: () => setOpenApp("Projects")
    },
    {
      id: "backgrounds",
      startX: 0,
      startY: 240,
      label: "Backgrounds",
      icon: "📂",
      previewImages: [
        "backgrounds/desktop.jpg",
        "backgrounds/desktop2.jpg",
        "backgrounds/desktop3.jpg",
        "backgrounds/desktop4.png",
        "backgrounds/desktop5.png"
      ],
      onOpen: () => setOpenFolder (true),
    },
    {
    id: "Spotify",
    startX: 0,
    startY: 360,
    label: "Spotify",
    image: "/spoti.png",
    onOpen: () => setOpenApp("Spotify")
    },
    {
      id: "Flappy",
      startX: 0,
      startY: 480,
      label: "Flappy Bird",
      image: "/flappy.png",
      onOpen: () => setOpenApp ("Flappy"),
    },
    {
      id: "BearWeb",
      startX: 150,
      startY: 0,
      label: "BearWeb",
      image: "/bearweb.png",
      onOpen: () => setOpenApp("BearWeb")
    },
  ];


  const AboutMenu = [
    { icon: "📝", label: "About Me", app: "AboutMe" },
    { icon: "💻", label: "Tech Stack", app: "TechStack"},
    { icon: "📨", label: "Contact", app: "Contact"}
  ]

  const appIcons = {
    project1: "⛰️",
    project2: "💇🏻",
    project3: "🔮",
    AboutMe: "📝",
    TechStack: "💻",
    Contact: "📨",
    Spotify: "/spoti.png",
    Flappy: "/flappy.png",
    Bearweb: "/bearweb.png",
  };

  const minimizeApp = (id) => {
    setMinimizedApps((prev) =>
      prev.some((a) => a.id === id)
        ? prev
        : [...prev, { id, icon: appIcons[id] }]
    );
    setOpenApp(null);
  };

  return (
    <main className="w-full h-screen overflow-hidden md:overflow-visible">
      <section
        className="md:fixed md:left-10 md:top-52
      relative
      w-full md:w-[300px]
      grid grid-cols-2
      md:block
      place-items-center
      gap-8 pt-10"
      >
        {DesktopIcons.map((icon) => (
          <div key={icon.id}>
            <DesktopIcon {...icon} />
          </div>
        ))}
      </section>

      {openApp && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-[url('/card3.png')] bg-cover bg-center  text-white hover:scale-105 rounded-xl shadow-2xl w-[90%] max-w-md p-6 z-10 "
        >
          <div className="absolute inset-0 bg-black/30 rounded-xl pointer-events-none"></div>

          <div className="flex justify-between items-center mb-4 z-10">
            <h2 className="absolute left-1/2 -translate-x-1/2 text-xl text-center font-semibold pointer-events-none mb-0.5">
              {openApp === "About" && "About Me"}
              {openApp === "Projects" && "My Projects"}
            </h2>
            <button
              onClick={() => setOpenApp(null)}
              className="ml-auto text-gray-400 hover:text-gray-100 hover:scale-105 text-xl z-10 mb-0.5"
            >
              ✕
            </button>
          </div>

          {openApp === "About" && (
            <div className="relative z-10 grid grid-cols-3 gap-6 justify-items-center">
            {AboutMenu.map((item) => (
              <MenuItem
              key={item.app}
              icon={item.icon}
              label={item.label}
              onClick={() => setOpenApp(item.app)}
              />
            ))}
            </div>
            )}

            {openApp === "Projects" && (
              <div className="relative z-10 grid grid-cols-3 gap-6 justify-items-center">
                {projectMenu.map((item) => (
                  <MenuItem
                  key={item.app}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => setOpenApp(item.app)}
                  />
                ))}
                </div>
                )}
              </div>
            )}
        
      
      {openApp === "project1" &&
        !minimizedApps.some((a) => a.id === "project1") && (
          <Fullskjerm
            url="https://fjellturer.vercel.app/"
            title="Hiking Website"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project1")}
          />
        )}

      {openApp === "project2" &&
        !minimizedApps.some((a) => a.id === "project2") && (
          <Fullskjerm
            url="https://kjodes-frisor.vercel.app/"
            title="Hairdresser Booking"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project2")}
          />
        )}

      {openApp === "project3" &&
        !minimizedApps.some((a) => a.id === "project3") && (
          <Fullskjerm
            url="https://reketino-s-word-of-wisdom-31dr.vercel.app/"
            title="Word Of Wisdom"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project3")}
          />
        )}

      {openApp === "AboutMe" && (
        <Fullskjerm
          title="About Me"
          onBack={() => setOpenApp("About")}
          onMinimize={() => minimizeApp("AboutMe")}
        >
          <AboutMe />
        </Fullskjerm>
      )}

      {openApp === "TechStack" && (
        <Fullskjerm
          title="Tech Stack"
          onBack={() => setOpenApp("About")}
          onMinimize={() => minimizeApp("TechStack")}
        >
          <TechStack />
        </Fullskjerm>
      )}

      {openApp === "Contact" && (
        <Fullskjerm
          title="Contact"
          onBack={() => setOpenApp("About")}
          onMinimize={() => minimizeApp("Contact")}
        >
          <Contact />
        </Fullskjerm>
      )}

      {openApp === "Spotify" &&
        !minimizedApps.some((a) => a.id === "Spotify") && (
          <Fullskjerm
            url="https://open.spotify.com/embed/playlist/0JSMbYLP1XQk0uIsqwdH9g?utm_source=generator&theme=0"
            title="Spotify"
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("Spotify")}
          />
        )}

      {openApp === "Flappy" &&
        !minimizedApps.some((a) => a.id === "Flappy") && (
          <Fullskjerm
            url="https://flappy-bird-ruby-nine.vercel.app/"
            title="Flappy Bird"
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("Flappy")}
          />
        )}

        {openApp === "BearWeb" && 
        !minimizedApps.some((a) => a.id === "BearWeb") && (
          <Fullskjerm
          title="Bear Web"
          onBack={() => setOpenApp(null)}
          onMinimize={() => minimizeApp("BearWeb")}
          >
        <BearWebWindow />
          </Fullskjerm>
        )}

      {openFolder && <BgWindow onClose={() => setOpenFolder(false)} />}

      <Taskbar
        minimizedApps={minimizedApps}
        onRestore={(id) => {
          setOpenApp(id);
          setMinimizedApps((prev) => prev.filter((a) => a.id !== id));
        }}
      />
    </main>
  );
}
