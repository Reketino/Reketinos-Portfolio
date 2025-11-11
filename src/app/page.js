import Image from "next/image";
import Title3d from "@/components/title3d";
import Desktop from "../components/desktop";
import React from "react";

export default function homePage() {
  return (
    <main
      className="min-h-screen  bg-cover bg-center text-white relative
      md:bg-cover md:bg-center"
      style={{ backgroundImage: "url('/desktop.jpg')" }}
    >
      <div className="absolute inset bg-black/50" />
      <div className="relative z-10">
        <Title3d />
        </div>
        <Desktop />
    </main>
  );
}
