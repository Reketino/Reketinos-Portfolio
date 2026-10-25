"use client";
import Image from "next/image";
import BearWebAddressBar from "./BearWebAddressBar";
import ThreeDotMenu from "./ThreeDotMenu";
import { IoExtensionPuzzle } from "react-icons/io5";

import {
  ChevronLeft,
  ChevronRight,
  Home,
  LoaderCircle,
  Puzzle,
  RotateCw,
} from "lucide-react";

export default function BearWebTopbar({
  currentUrl,
  onNavigate,
  onReload,
  onHome,
  onBack,
  onForward,
  canGoBack,
  canGoForward,
  isBookmarked,
  onBookmark,
  bookmarks,
  onNewTab,
  onClose,
  onSettings,
  settings,
  addressBarRef,
}) {
  return (
    <header className="bw-topbar">
      <section className="bw-toolbar flex items-center gap-2">
        <nav className="flex shrink-0 items-center gap-2">
          <button 
          type="button"
          disabled={!canGoBack} 
          onClick={onBack}
          className="bw-nav-btn"
          title="Back"
          aria-label="Go back" 
         >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            disabled={!canGoForward}
            onClick={onForward}
            className="bw-nav-btn"
            title="Forward"
            aria-label="Go forward"

          >
            <ChevronRight size={19} />
          </button>

          <button 
          type="button"
          onClick={onReload} 
          className="bw-nav-btn"
          title="Reload"
          aria-label="Reload page"
          >
            <RotateCw size={17} />
          </button>

          <button 
          type="button"
          onClick={onHome} 
          className="bw-nav-btn"
          title="Home"
          aria-label="Go home"
          >
            <Home size={17} />
          </button>
        </nav>

        <header className="flex-1 flex justify-center">
          <div className="w-full">
            <BearWebAddressBar
              ref={addressBarRef}
              currentUrl={currentUrl}
              onNavigate={onNavigate}
              isBookmarked={isBookmarked}
              onBookmark={onBookmark}
            />
          </div>
        </header>

        <button
          className="
          flex h-9 w-9 shrink-0 items-center justify-center
          rounded-full text-neutral-400
          transition-colors
        hover:bg-white/10 hover:text-white
          "
          title="Extension"
          aria-label="Extension"
        >
          <Puzzle size={17} />
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
          onNewTab={onNewTab}
          onReload={onReload}
          onHome={onHome}
          onBookmark={onBookmark}
          isBookmarked={isBookmarked}
          bookmarks={bookmarks}
          onNavigate={onNavigate}
          onCloseApp={onClose}
          onSettings={onSettings}
          settings={settings}
        />
      </section>
    </header>
  );
}
