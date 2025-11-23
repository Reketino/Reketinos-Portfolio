import React from "react";

export default function MenuItem({ icon, label, onClick }) {
  return (
    <main
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <span className="text-5xl">{icon}</span>
      <p className="mt-1 text-sm text-center">{label}</p>
    </main>
  );
}
