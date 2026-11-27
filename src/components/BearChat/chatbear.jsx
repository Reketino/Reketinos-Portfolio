"use client";
import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import Image from "next/image";
import ChatBubble from "./chatbubble";
import BearChat from "./bearchat";

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
      <main
        className="
      fixed bottom-15 right-3
      md:bottom-24 md:right-20
      "
      >
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
            priority
            className="
            hidden
            h-20 w-20
            md:block
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
          absolute bottom-full mb-3 
          right-20 translate-x-1/4

          md:right-0 md:translate-x-0
          md:mb-8

          w-[300px] md:w-[360px] 
          max-w-[95vw]

        bg-neutral-950 border border-neutral-800
          rounded-xl shadow-2xl p-4
          animate-pop-from-bear
          "
          >
            <header className="mb-4 flex items-center justify-between border-b border-neutral-800/80 pb-3">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-amber-400">🐻BearAI</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close BearAi"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-lg
                text-neutral-400
                  transition-all duration-200
                hover:bg-neutral-800
                hover:text-white
                  active:scale-95"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </header>

            <BearChat setIsAnswering={setIsAnswering} />
          </section>
        )}
      </main>
    </>
  );
}
