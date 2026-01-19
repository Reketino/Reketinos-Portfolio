"use client";
import { React, useState } from "react";
import BearWebAddressBar from "./BearWebAddressBar";
import BearWebTabs from "./BearWebTabs";

export default function BearWebTopbar({ 
  currentUrl, 
  onNavigate, 
  onReload, 
  onHome, 
  onMinimize, 
  onClose,
  onToggleFullscreen,
  fullscreen, 
}) {
    const [backDisabled] = useState(true);
    const [forwardDisabled] = useState(true);


  return (
    <header className="bw-topbar">
        <BearWebTabs 
        fullscreen={fullscreen}
        onMinimize={onMinimize}
        onToggleFullscreen={onToggleFullscreen}
        onClose={onClose}
        />
      
      <section className="bw-toolbar">
      <nav className="bw-nav">
        <button disabled={backDisabled} className="bw-nav-btn">←</button>
        <button disabled={forwardDisabled} className="bw-nav-btn">→</button>
        <button onClick={onReload} className="bw-nav-btn">⟳</button>
        <button onClick={onHome} className="bw-nav-btn">🏠</button>
      </nav>

      <BearWebAddressBar 
      currentUrl={currentUrl} 
      onNavigate={onNavigate} 
      />
      </section>
    </header>
  );
}
