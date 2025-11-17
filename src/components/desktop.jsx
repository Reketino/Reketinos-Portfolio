"use client"
import Image from 'next/image'
import Fullskjerm from './fullskjerm'
import Taskbar from './taskbar'
import TechStack from './techstack'
import AboutMe from './aboutme'
import React, { useState } from 'react'
import BgFolder from './bgfolder'
import BgWindow from './bgwindow'
import Folder from './folder'
import Draggable from './draggable'

export default function Desktop() {
  const [openFolder, setOpenFolder] = useState(false);
  const [openApp, setOpenApp] = useState(null);
  const [minimizedApps, setMinimizedApps] = useState([]);

  return (
    <main>

      <section 
      className="fixed left-10 top-32 relative w-[300px] h-[700px]">

        <Draggable id="about" startX={0} startY={0}>
        <Folder label="BEARME.MD" icon="📖" onOpen={() => setOpenApp("About")} />
          </Draggable>

         <Draggable id="projects" startX={0} startY={120}>
        <Folder label="My Projects" icon="📂" onOpen={() => setOpenApp("Projects")} />
          </Draggable>

          <Draggable id="backgrounds" startX={0} startY={240}>
        <Folder 
        label="Backgrounds"
        icon="📂"
        previewImages={["/backgrounds/desktop.jpg", "/backgrounds/desktop2.jpg", "/backgrounds/desktop3.jpg", "/backgrounds/desktop4.png"]}
        onOpen={() => setOpenFolder(true)} 
        />
      </Draggable>

      <Draggable id="Spotify" startX={0} startY={360}>
        <Folder 
        label="Spotify"
        image="/spoti.png"
        onOpen={() => setOpenApp("Spotify")}
          />
          </Draggable>

         <Draggable id="Flappy Bird" startX={0} startY={480}>
        <Folder
         label="Flappy Bird"
         image="/flappy.png" 
          onOpen={() => setOpenApp("Flappy Bird")}
        />
        </Draggable>
        
      </section>

      {openApp && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-[url('/card3.png')] bg-cover bg-center  text-white hover:scale-105 rounded-xl shadow-2xl w-[90%] max-w-md p-6 z-10 ">
        <div className='absolute inset-0 bg-black/30 rounded-xl pointer-events-none'></div>

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
              <div 
              className='flex flex-col items-center cursor-pointer hover:scale-105 transition-transform'
              onClick={() => setOpenApp ("AboutMe")}
              >
             <span className='text-5xl'>📝</span>
             <p className='mt-1 text-sm text-center'>
              About Me
             </p>
             </div>

              <div 
              className='flex flex-col items-center cursor-pointer hover:scale-105 transition-transform'
              onClick={() => setOpenApp ("TechStack")}
              >
             <span className='text-5xl'>💻</span>
             <p className='mt-1 text-sm text-center'>
              Tech Stack
             </p>
             </div>

               <div 
              className='flex flex-col items-center cursor-pointer hover:scale-105 transition-transform'
              onClick={() => setOpenApp ("Contact")}
              >
             <span className='text-5xl'>📨</span>
             <p className='mt-1 text-sm text-center'>
              Contact
             </p>
             </div>
             </div>
          )}
          

          {openApp === "Projects" && (
            <div className="relative z-10 grid grid-cols-3 gap-6 justify-items-center">
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project1")}
              >
                <span className="text-5xl">⛰️</span>
                <p className="mt-1 text-sm text-center">
                  Planing a hike?
                </p>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project2")}
              >
                <span className="text-5xl">💇🏻</span>
                <p className="mt-1 text-sm text-center">
                   Maybe a trip to the hairdresser?
                </p>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project3")}
              >
                <span className="text-5xl">🔮</span>
                <p className="mt-1 text-sm text-center">
                  Or a word of wisdom before you decide?
                </p>
              </div>
            </div>
          )}
       </div>
      )}
      {(openApp === "project1" && !minimizedApps.includes("project1")) && (
        <Fullskjerm
          url="https://fjellturer.vercel.app/"
          title="Fjellturer Nettside"
          onBack={() => setOpenApp("Projects")}
            onMinimize={() => {
            setMinimizedApps((prev) =>
              prev.includes("project1") ? prev : [...prev, "project1"]
          );
            setOpenApp(null);
          }}
          isMinimized={minimizedApps.includes("project1")}
        />
      )}

      {(openApp === "project2" && !minimizedApps.includes("project2")) && (
        <Fullskjerm
          url="https://kjodes-frisor.vercel.app/"
          title="Frisør Booking"
          onBack={() => setOpenApp("Projects")}
           onMinimize={() => {
            setMinimizedApps((prev) =>
              prev.includes("project2") ? prev : [...prev, "project2"]
          );
            setOpenApp(null);
          }}
          isMinimized={minimizedApps.includes("project2")}
        />
      )}

      {(openApp === "project3" && !minimizedApps.includes("project3")) && (
        <Fullskjerm
          url="https://reketino-s-word-of-wisdom-31dr.vercel.app/"
          title="Visdomsord"
          onBack={() => setOpenApp("Projects")}
            onMinimize={() => {
            setMinimizedApps((prev) =>
              prev.includes("project3") ? prev : [...prev, "project3"]
          );
            setOpenApp(null);
          }}
          isMinimized={minimizedApps.includes("project3")}
        />
      )}
      
       {openApp === "AboutMe" && (
  <Fullskjerm
    title="About Me"
    onBack={() => setOpenApp("About")}
    onMinimize={() => {
      setMinimizedApps((prev) =>
        prev.includes("AboutMe") ? prev : [...prev, "AboutMe"]
      );
      setOpenApp(null);
    }}
    isMinimized={minimizedApps.includes("AboutMe")}
  >
    <AboutMe />
  </Fullskjerm>
      )}

      {openApp === "TechStack" && (
  <Fullskjerm
    title="Tech Stack"
    onBack={() => setOpenApp("About")}
    onMinimize={() => {
      setMinimizedApps((prev) =>
        prev.includes("TechStack") ? prev : [...prev, "TechStack"]
      );
      setOpenApp(null);
    }}
    isMinimized={minimizedApps.includes("TechStack")}
  >
    <TechStack />
  </Fullskjerm>
      )}
      
      {openApp === "Spotify" && !minimizedApps.includes("Spotify") && (
        <Fullskjerm
          url="https://open.spotify.com/embed/playlist/0JSMbYLP1XQk0uIsqwdH9g?utm_source=generator&theme=0" 
          title="Spotify"
          onBack={() => setOpenApp(null)}
          onMinimize={() => {
            setMinimizedApps([...minimizedApps,"Spotify"]);
            setOpenApp(null);
          }}
        />
      )}

      {openApp === "Flappy Bird" && !minimizedApps.includes("Flappy Bird") &&  (
        <Fullskjerm
          url="https://flappy-bird-ruby-nine.vercel.app/"
          title="Flappy Bird"
          onBack={() => setOpenApp(null)}
           onMinimize={() => {
            setMinimizedApps([...minimizedApps,"Flappy Bird"]);
            setOpenApp(null);
          }}
        />
      )}

      {openFolder && (
        <BgWindow onClose={() => setOpenFolder (false)} />
      )}

      <Taskbar
      minimizedApps={minimizedApps}
      onRestore={(app) => {
        setOpenApp(app);
        setMinimizedApps(minimizedApps.filter(a => a !== app));
      }}
      />

    </main>
  );
}
