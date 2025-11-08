"use client"
import Image from 'next/image'
import Fullskjerm from './fullskjerm'
import Taskbar from './taskbar'
import React, {useState} from 'react'

export default function Desktop() {
  const [openApp, setOpenApp] = useState(null);

  return (
    <main>

      <div className="grid grid-cols-2 gap-6 items-center mt-20 
       md:flex md:flex-col md:items-start md:gap-8 md:fixed md:left-10 md:top-1/4
      ">
        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("about")}
        >
          <span className="text-6xl">📖</span>
          <p className="mt-2 text-sm">Beareven.txt</p>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("prosjekter")}
        >
          <span className="text-6xl">📂</span>
          <p className="mt-2 text-sm">Prosjekter</p>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("Spotify")}
        >
          <Image
            src="/spoti.png"
            alt="Spotify Icon"
            width={64}
            height={64}
            className="hover-glow rounded-lg"
          />
          <p className="mt-2 text-sm text-center">Spotify</p>
        </div>

        <div
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setOpenApp("Flappy Bird")}
        >
          <Image
            src="/flappy.png"
            alt="Flappy Bird Icon"
            width={64}
            height={64}
            className="hover-glow rounded-lg"
          />
          <p className="mt-2 text-sm text-center">Flappy Bird</p>
        </div>
      </div>

      {openApp && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-xl shadow-2xl w-[90%] max-w-md  p-6 z-10 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {openApp === "about" && "Om Meg"}
              {openApp === "prosjekter" && "Mine Prosjekter"}
            </h2>
            <button
              onClick={() => setOpenApp(null)}
              className="text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {openApp === "about" && (
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Hei 👋 Jeg heter Bjørn Even Lyngstad.</p>
              <p>
                Jeg har hoppet inn i kodingens verden og elsker å skape ting på
                nettet.
              </p>
              <p>
                På denne siden kan du utforske noen av mine prosjekter og
                interesser.
              </p>
              <p>
                Jeg har erfaring med flere programmeringsspråk og rammeverk.
              </p>
            </div>
          )}

          {openApp === "prosjekter" && (
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project1")}
              >
                <span className="text-5xl">⛰️</span>
                <p className="mt-1 text-sm text-center">
                  Planlegger du en fjelltur?
                </p>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project2")}
              >
                <span className="text-5xl">💇🏻</span>
                <p className="mt-1 text-sm text-center">
                  Eller kanskje du skulle vært hos frisøren?
                </p>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setOpenApp("project3")}
              >
                <span className="text-5xl">🔮</span>
                <p className="mt-1 text-sm text-center">
                  Hva med et visdomsord før du bestemmer deg?
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      {openApp === "project1" && (
        <Fullskjerm
          url="https://fjellturer.vercel.app/"
          title="Fjellturer Nettside"
          onBack={() => setOpenApp("prosjekter")}
        />
      )}

      {openApp === "project2" && (
        <Fullskjerm
          url="https://kjodes-frisor.vercel.app/"
          title="Frisør Booking"
          onBack={() => setOpenApp("prosjekter")}
        />
      )}

      {openApp === "project3" && (
        <Fullskjerm
          url="https://reketino-s-word-of-wisdom-31dr.vercel.app/"
          title="Visdomsord"
          onBack={() => setOpenApp("prosjekter")}
        />
      )}

      {openApp === "Spotify" && (
        <Fullskjerm
          url="https://open.spotify.com/embed/playlist/0JSMbYLP1XQk0uIsqwdH9g?utm_source=generator" 
          title="Spotify"
          onBack={() => setOpenApp(null)}
        />
      )}

      {openApp === "Flappy Bird" && (
        <Fullskjerm
          url="https://flappy-bird-ruby-nine.vercel.app/"
          title="Flappy Bird"
          onBack={() => setOpenApp(null)}
        />
      )}
      <Taskbar />
    </main>
  );
}
