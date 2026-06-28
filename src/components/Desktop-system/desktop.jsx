"use client";
import { React, useState } from "react";
import Fullscreen from "../Window-system/fullscreen";
import Taskbar from "../Taskbar/taskbar";
import TechStack from "../AboutMe/TechStack/techstack";
import AboutMe from "../AboutMe/aboutme";
import Contact from "../AboutMe/Contact/contact";
import BgWindow from "../Window-system/background/bgwindow";
import DesktopIcon from "./desktopicon";
import MenuItem from "./menuitem";
import BearWebWindow from "../BearWeb/BearWebWindow";
import BearWebFrame from "../BearWeb/BearWebFrame";
import TrashWindow from "../RecycleBin/trashwindow";
import Error from "../RecycleBin/error";
import BearCodeWindow from "../BearCode/bearcodewindow";
import ChatBear from "../BearChat/chatbear";


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
      label: "BEARME.md",
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
        "backgrounds/desktop.webp",
        "backgrounds/desktop2.webp",
        "backgrounds/desktop3.webp",
        "backgrounds/desktop4.webp",
        "backgrounds/desktop5.webp",
        "backgrounds/desktop6.webp",
      ],
      onOpen: () => setOpenFolder(true),
    },
    {
      id: "Spotify",
      startX: 0,
      startY: 360,
      label: "Spotify",
      image: "/icons/spoti.png",
      onOpen: () => setOpenApp("Spotify"),
    },
    {
      id: "Flappy",
      startX: 0,
      startY: 480,
      label: "Flappy Bird",
      image: "/icons/flappy.png",
      onOpen: () => setOpenApp("Flappy"),
    },
    {
      id: "BearWeb",
      startX: 150,
      startY: 0,
      label: "BearWeb",
      image: "/icons/ohmybjorn.png",
      onOpen: () => setOpenApp("BearWeb"),
    },
    {
      id: "recycle",
      startX: 150,
      startY: 120,
      label: "Recycle Bin",
      image: "/icons/trash.png",
      onOpen: () => setOpenApp("RecycleBin"),
    },
    {
      id: "BearCode",
      startX: 150,
      startY: 240,
      label: "BearCode",
      image: "/icons/vsbearcode.png",
      onOpen: () => setOpenApp("BearCode"),
    },
    {
      id: "BearFlights",
      startX: 145,
      startY: 375,
      label: "BearFlights",
      image: "/icons/bearflight.png",
      onOpen: () => setOpenApp("BearFlights")  
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
    Spotify: "/icons/spoti.png",
    Flappy: "/icons/flappy.png",
    BearWeb: "/icons/ohmybjorn.png",
    Error: "/icons/brokenfile.png",
    BearCode: "/icons/vsbearcode.png",
    BearFlights: "/icons/bearflight.png"
  };

  // Minimizing Apps to taskbar event handler
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
    <main className="w-full h-screen overflow-hidden">
      <section
        className="
        relative
        w-full
        
        grid grid-cols-3 gap-6 px-6 pt-10
        
        md:fixed md:left-10 md:top-52 md:w-[300px]
        md:block md:px-0 md:pt-0"
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
          className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-md p-6 z-10 rounded-xl
         bg-[#1f1f1f]/85
         border border-white/10
         shadow-[0_4px_18px_rgba(0,0,0,0.45)]
         text-gray-200
         transition-transform duration-100 hover:scale[1.01]
          "
        >
          <div
            className="
            absolute inset-0 rounded-xl 
            pointer-events-none
          "
          />

          <div className="
          flex justify-between items-center 
          mb-4 relative z-10
          "
          >
            <h2 className="
            absolute left-1/2 -translate-x-1/2 
            text-xl text-center font-semibold 
            pointer-events-none mb-0.5
            "
            >
              {openApp === "About" && "About Me"}
              {openApp === "Projects" && "My Projects"}
            </h2>
            <button
              onClick={() => setOpenApp(null)}
              className="
              text-gray-400 text-xl 
              hover:text-gray-100 hover:scale-105 
                z-10 mb-0.5 ml-auto
              "
            >
              ✕
            </button>
          </div>

          {/* Open about folder */}
          {openApp === "About" && (
            <div className="
            relative justify-items-center 
            grid grid-cols-3 
            gap-6 z-10
            "
            >
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
            <div className="
            relative justify-items-center 
            grid grid-cols-3 
            gap-6 z-10
            "
            >
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
          <Fullscreen
            url="https://fjellturer.vercel.app/"
            title="Hiking Website"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project1")}
          />
        )}

      {openApp === "project2" &&
        !minimizedApps.some((a) => a.id === "project2") && (
          <Fullscreen
            url="https://kjodes-frisor.vercel.app/"
            title="Hairdresser Booking"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project2")}
          />
        )}

      {openApp === "project3" &&
        !minimizedApps.some((a) => a.id === "project3") && (
          <Fullscreen
            url="https://words-of-wisdom-iota.vercel.app/"
            title="Word Of Wisdom"
            onBack={() => setOpenApp("Projects")}
            onMinimize={() => minimizeApp("project3")}
          />
        )}

      {/* Open "About me" Apps */}
      {openApp === "AboutMe" && (
        <Fullscreen
          title="About Me"
          onBack={() => setOpenApp("About")}
          onMinimize={() => minimizeApp("AboutMe")}
        >
          <AboutMe />
        </Fullscreen>
      )}

      {openApp === "TechStack" && (
        <Fullscreen
          title="Tech Stack"
          onBack={() => setOpenApp("About")}
          onMinimize={() => minimizeApp("TechStack")}
        >
          <TechStack />
        </Fullscreen>
      )}

      {openApp === "Contact" && (
        <Fullscreen
          title="Contact"
          onBack={() => setOpenApp("About")}
          onMinimize={() => minimizeApp("Contact")}
        >
          <Contact />
        </Fullscreen>
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
          <Fullscreen
            url="https://open.spotify.com/embed/playlist/0JSMbYLP1XQk0uIsqwdH9g?utm_source=generator&theme=0"
            title="Spotify"
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("Spotify")}
          />
        )}

      {/* Open Flappy Bird */}
      {openApp === "Flappy" &&
        !minimizedApps.some((a) => a.id === "Flappy") && (
          <Fullscreen
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
      
      {/* Open BearCodeWindow */}
      {openApp === "BearCode" &&
        !minimizedApps.some((a) => a.id === "BearCode") && (
          <BearCodeWindow
            onBack={() => setOpenApp(null)}
            onMinimize={() => minimizeApp("BearCode")}
          />
        )}
      
      {/* Open BearFlights */}
      { openApp === "BearFlights" && 
      !minimizedApps.some((a) => a.id === "BearFlights") && (
      <Fullscreen
      url="https://bearflightradar.vercel.app/"
      title="Bear Flights"
      onBack={() => setOpenApp(null)}
      onMinimize={()=> minimizeApp("BearFlights")}
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

      <ChatBear />
    </main>
  );
}
