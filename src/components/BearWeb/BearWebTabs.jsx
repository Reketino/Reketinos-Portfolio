import React from "react";

export default function BearWebTabs({ onNewTab }) {
  return (
    <section className="flex items-center">
      <div className="bw-tab active">
        <img src="/icons/webbear-favicon.png" className="w-4 h-4" />
        <span>BearWeb</span>
      </div>

      <button className="bw-tab" onClick={onNewTab}>
        +
      </button>
    </section>
  );
}
