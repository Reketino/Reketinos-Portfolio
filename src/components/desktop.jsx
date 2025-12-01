"use client";
import { React, useState } from "react";
import Fullskjerm from "./fullskjerm";
import Taskbar from "./taskbar";
import TechStack from "./AboutMe/techstack";
import AboutMe from "./AboutMe/aboutme";
import Contact from "./AboutMe/contact";
import BgWindow from "./bgwindow";
import DesktopIcon from "./desktopicon";
import MenuItem from "./menuitem";
import BearWebWindow from "./BearWeb/BearWebWindow";
import BearWebFrame from "./BearWeb/BearWebFrame";
import TrashWindow from "./RecycleBin/trashwindow";
import Error from "./RecycleBin/error";
import BearCodeWindow from "./BearCode/bearcodewindow";


export default function Desktop() {
  const [openFolder, setOpenFolder] = useState(false);
  const [openApp, setOpenApp] = useState(null);
  const [minimizedApps, setMinimizedApps] = useState([]);

  // Icons on desktop
  const DesktopIcons = [
    {
      id: "about",
      startX: 0,
      startY: 0,
      label: "BEARME.MD",
      icon: "📖",
      onOpen: () => setOpenApp("About"),
    },
    {
      id: "projects",
      startX: 0,
      startY: 120,
      label: "My Projects",
      icon: "📂",
      onOpen: () => setOpenApp("Projects"),
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
        "backgrounds/desktop5.png",
        "backgrounds/desktop6.png",
      ],
      onOpen: () => setOpenFolder(true),
    },
    {
      id: "Spotify",
      startX: 0,
      startY: 360,
      label: "Spotify",
      image: "/spoti.png",
      onOpen: () => setOpenApp("Spotify"),
    },
    {
      id: "Flappy",
      startX: 0,
      startY: 480,
      label: "Flappy Bird",
      image: "/flappy.png",
      onOpen: () => setOpenApp("Flappy"),
    },
    {
      id: "BearWeb",
      startX: 150,
      startY: 0,
      label: "BearWeb",
      image: "/ohmybjorn.png",
      onOpen: () => setOpenApp("BearWeb"),
    },
    {
      id: "recycle",
      startX: 150,
      startY: 120,
      label: "Recycle Bin",
      image: "/trash.png",
      onOpen: () => setOpenApp("RecycleBin"),
    },
    {
    id: "BearCode",
    startX: 150,
    startY: 240,
    label: "BearCode",
    image:"/vsbearcode.png",
    onOpen: () => setOpenApp("BearCode"),
    },
  ];

  // Menu to "Aboutme"
  const AboutMenu = [
    { icon: "📝", label: "About Me", app: "AboutMe" },
    { icon: "💻", label: "Tech Stack", app: "TechStack" },
    { icon: "📨", label: "Contact", app: "Contact" },
  ];

  // Menu to "Projects"
  const projectMenu = [
    { icon: "⛰️", label: "Hiking Website", app: "project1" },
    { icon: "💇🏻", label: "Hairdresser Booking", app: "project2" },
    { icon: "🔮", label: "Word of Wisdom", app: "project3" },
  ];

  // Icons used in the apps
  const appIcons = {
    project1: "⛰️",
    project2: "💇🏻",
    project3: "🔮",
    AboutMe: "📝",
    TechStack: "💻",
    Contact: "📨",
    Spotify: "/spoti.png",
    Flappy: "/flappy.png",
    BearWeb: "/ohmybjorn.png",
    Error: "/brokenfile.png",
    BearCode: "/vsbearcode.png"
  };

  const minimizeApp = (id) => {
    setMinimizedApps((prev) =>
      prev.some((a) => a.id === id)
        ? prev
        : [...prev, { id, icon: appIcons[id] }]
    );
    setOpenApp(null);
  };

  // Main page
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

      {/* Background when opening apps */}
      {(openApp === "About" || openApp === "Projects") && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-md p-6 z-10 rounded-xl
         bg-[#1f1f1f]/85
         border border-white/10
         shadow-[0_4px_18px_rgba(0,0,0,0.45)]
         text-gray-200
         transition-transform duration-100 hover:scale[1.01]
          "
        >
          <div
            className="absolute inset-0  rounded-xl pointer-events-none
          "
          />

          <div className="flex justify-between items-center mb-4 relative z-10">
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

          {/* Open about folder */}
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

          {/* Open projects folder */}
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

      {/* Open projects Apps */}
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
            url="https://words-of-wisdom-iota.vercel.app/"
            title="Word Of Wisdom"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project3")}
          />
        )}

      {/* Open "About me" Apps */}
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

      {/* Open Recycle Bin + file */}
      {openApp === "RecycleBin" && (
        <TrashWindow
          onClose={() => setOpenApp(null)}
          onOpenFile={() => setOpenApp("Error")}
        />
      )}

      {openApp === "Error" && !minimizedApps.some((a) => a.id === "Error") && (
        <Error
          onBack={() => setOpenApp("RecycleBin")}
          onMinimize={() => minimizeApp("Error")}
        />
      )}

      {/* Open Spotify */}
      {openApp === "Spotify" &&
        !minimizedApps.some((a) => a.id === "Spotify") && (
          <Fullskjerm
            url="https://open.spotify.com/embed/playlist/0JSMbYLP1XQk0uIsqwdH9g?utm_source=generator&theme=0"
            title="Spotify"
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("Spotify")}
          />
        )}

      {/* Open Flappy Bird */}
      {openApp === "Flappy" &&
        !minimizedApps.some((a) => a.id === "Flappy") && (
          <Fullskjerm
            url="https://flappy-bird-ruby-nine.vercel.app/"
            title="Flappy Bird"
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("Flappy")}
          />
        )}

      {/* Open BearWeb */}
      {openApp === "BearWeb" &&
        !minimizedApps.some((a) => a.id === "BearWeb") && (
          <BearWebFrame
            title="Bear Web"
            mode="browser"
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("BearWeb")}
          >
            <BearWebWindow />
          </BearWebFrame>
        )}

        {openApp === "BearCode" &&
          !minimizedApps.some((a) => a.id === "BearCode") && (
          <BearCodeWindow
          onBack={() => setOpenApp(null)}
          onMinimize={() => minimizeApp("BearCode")}
          />
          )}

      {/* Backgrounds folder */}
      {openFolder && <BgWindow onClose={() => setOpenFolder(false)} />}

      {/* Taskbar */}
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
