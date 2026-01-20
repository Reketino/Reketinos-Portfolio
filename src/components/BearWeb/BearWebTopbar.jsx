"use client";
import { React, useState } from "react";
import BearWebAddressBar from "./BearWebAddressBar";

export default function BearWebTopbar({
  currentUrl,
  onNavigate,
  onReload,
  onHome,
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

        <BearWebAddressBar currentUrl={currentUrl} onNavigate={onNavigate} />

        
      </section>
    </header>
  );
}
