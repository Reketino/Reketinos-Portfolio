"use client";
import Image from "next/image";
import { React, useState } from "react";
import BearWebAddressBar from "./BearWebAddressBar";
import ThreeDotMenu from "./ThreeDotMenu";

export default function BearWebTopbar({
  currentUrl,
  onNavigate,
  onReload,
  onHome,
  onClose,
}) {
  const [backDisabled] = useState(true);
  const [forwardDisabled] = useState(true);

  return (
    <header className="bw-topbar">
      <section className="bw-toolbar flex items-center gap-2">
        <nav className="bw-nav shrink-0">
          <button disabled={backDisabled} className="bw-nav-btn">
            ←
          </button>
          <button disabled={forwardDisabled} className="bw-nav-btn">
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
          <div className="w-full max-w[640px]">
            <BearWebAddressBar
              currentUrl={currentUrl}
              onNavigate={onNavigate}
            />
          </div>
        </header>

        <button
          className=" 
        ml-4 p-2
        rounded-full shrink-0 
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
