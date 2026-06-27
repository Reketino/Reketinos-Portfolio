"use client";
import Image from "next/image";
import { useState } from "react";
import BearWebAddressBar from "./BearWebAddressBar";
import ThreeDotMenu from "./ThreeDotMenu";
import { IoExtensionPuzzle } from "react-icons/io5";

export default function BearWebTopbar({
  currentUrl,
  onNavigate,
  onReload,
  onHome,
  onBack,
  onForward,
  canGoBack,
  canGoForward,
  onClose,
}) {

  return (
    <header className="bw-topbar">
      <section className="bw-toolbar flex items-center gap-2">
        <nav className="bw-nav shrink-0">
          <button 
          disabled={!canGoBack} 
          onClick={onBack}
          className="bw-nav-btn"
          >
            ←
          </button>
          <button 
          disabled={!canGoForward} 
          className="bw-nav-btn"
          >
            →
          </button>
          <button onClick={onReload} className="bw-nav-btn">
            ⟳
          </button>
          <button onClick={onHome} className="bw-nav-btn">
            🏠
          </button>
        </nav>

        <header className="flex-1 flex justify-center">
          <div className="w-full">
            <BearWebAddressBar
              currentUrl={currentUrl}
              onNavigate={onNavigate}
            />
          </div>
        </header>

        <button
          className="
         p-2 rounded-full shrink-0
         text-neutral-500
         hover:bg-neutral-800"
          title="Extension"
        >
          <IoExtensionPuzzle />
        </button>

        <button
          className="
        rounded-full text-neutral-600"
          aria-label="line"
        >
          |
        </button>

        <button
          className=" 
        p-2 rounded-full shrink-0 
        hover:bg-neutral-800"
          title="Bjørn Even (Bear Even)"
        >
          <Image
            src="/chrome.png"
            alt="Chrome Profile"
            width={20}
            height={20}
            className="rounded-full"
          />
        </button>

        <ThreeDotMenu
          onReload={onReload}
          onHome={onHome}
          onCloseApp={onClose}
        />
      </section>
    </header>
  );
}
