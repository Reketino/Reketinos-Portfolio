import React from "react";

export default function ChatBubble({ show }) {
  if (!show) return null;
  return (
    <main
      className="
    absolute 
    -top-6 right-4
    md:-top-16 

    bg-neutral-900 text-neutral-100
    text-xs px-3 py-2 rounded-lg
    shadow-lg border border-white/10
    whitespace-nowrap
    animate-fade-in
    "
    >
      Hey👋🏻 got any questions? Ask me
      <section
        className="
      absolute -bottom-1.5 right-4
      w-3 h-3 bg-neutral-900
      rotate-45 border-r border-b border-white/10
      "
      />
    </main>
  );
}
