"use client";
import { useEffect, useState } from "react";
import BearChat from "./bearchat";
import Image from "next/image";
import ChatBubble from "./chatbubble";

export default function ChatBear() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);

  useEffect(() => {
    // Bubble only pop up first time
    const seen = sessionStorage.getItem("chatBubbleSeen");
    if (!seen) {
      setShowBubble(true);
      sessionStorage.setItem("chatBubbleSeen", "true");

      setTimeout(() => setShowBubble(false), 6000);
    }
  }, []);

  return (
    <>
      <main className="
      fixed bottom-15 right-3

      md:bottom-24 md:right-20
      ">
        <ChatBubble show={showBubble && !open} />

        <button
          onClick={() => setOpen(!open)}
          className={`
                text-black
                w-20 h-20 rounded-full
                flex items-center justify-center
                shadow-lg hover:scale-105 transition group
                ${isAnswering ? "animate-bear-nod" : ""}
                  `}
          aria-label="Open BearAI chat"
        >
          <Image
            src="/BearAI/bearai.png"
            alt="BearAI"
            width={80}
            height={80}
            className="
            hidden md:block
            object-contain 
            transition-transform 
            group-hover:scale-105
            "
          />

          <Image
          src="/BearAI/beariicon.png"
          alt="BearAI Mobile"
          width={48}
          height={48}
          className="
          block md:hidden
          object-contain
          transition-transform
          group-hover:scale-105
          "
          />
        </button>

        {open && (
          <section
            className="
          absolute bottom-full mb-4 
          right-1/2 translate-x-1/3
          md:right-0 md:translate-x-0

          w-[280px] md:w-[360px] 
          max-w-[95vw]

        bg-neutral-950 border border-neutral-800
          rounded-xl shadow-2xl p-4
          animate-pop-from-bear
          "
          >
            <header className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-amber-400">🐻BearAI</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                X
              </button>
            </header>

            <BearChat setIsAnswering={setIsAnswering} />
          </section>
        )}
      </main>
    </>
  );
}
