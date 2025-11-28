import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSteam } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SteamCard({ steamId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchSteamProfile() {
      try {
        const res = await fetch(`/api/steam?steamId=${steamId}`);
        const data = await res.json();
        setProfile(data.response.players[0]);
      } catch (error) {
        console.error("Error fetching Steam profile:", error);
      }
    }

    fetchSteamProfile();
  }, [steamId]);
  if (!profile) {
    return (
      <div className="p-6 bg-white/10 rounded-3xl text-white text-center">
        Loading steam profile...
      </div>
    );
  }

  const statusColors = {
    0: "text-gray-400",
    1: "text-green-400",
    2: "text-green-300",
    3: "text-yellow-400",
    4: "text-blue-400",
    5: "text-purple-400",
    6: "text-red-400",
  };

  const statusText = {
    0: "Offline",
    1: "Online",
    2: "Busy",
    3: "Away",
    4: "Snooze",
    5: "Looking to trade",
    6: "Looking to play",
  };

  return (
    <main>
      <motion.a
        href={profile.profileurl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl p-6 md:p-8 w-full max-w-sm
    shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <section className="w-20 h-20 rounded-full border-2 border-amber-400 overflow-hidden shadow-md mb-4">
          <Image
            src={profile.avatarfull}
            width={80}
            height={80}
            alt={`${profile.personaname}'s Steam avatar`}
            className="object-cover w-full h-full"
            unoptimized
          />
        </section>

        <h2 className="text-xl font-semibold text-white mb-1">
          {profile.personaname}
        </h2>

        <section className="flex items-center gap-2 text-gray-200 mb-4 group-hover:text-amber-400 transition-color duration-200">
          <FaSteam className="w-5 h-5" />
          <span className="text-sm">My Steam Profile</span>
        </section>

        <section
          className={`text-sm font-medium ${statusColors[profile.personastate]}`}>
            {statusText[profile.personastate]}
        </section>

        <div className="absolute inset-0 rounded-3xl bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      </motion.a>
    </main>
  );
}
