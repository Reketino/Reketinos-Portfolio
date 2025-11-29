"use client";
import Title3d from "@/components/title3d";
import Desktop from "../components/desktop";
import React from "react";
import { useBackground } from "@/app/providers/bgprovider";



export default function HomePage() {
const { background } = useBackground();

  return (
    <main
      className="fixed inset-0 -z-10 bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset bg-black/50" />

      <div className="relative z-10">

        <Title3d />

        </div>
        <Desktop />
    </main>
  );
}
