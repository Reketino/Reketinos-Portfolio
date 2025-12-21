import { motion } from "framer-motion";
import HobbyCard from "./hobbycard";
import MediaBox from "./mediabox";
import SteamCard from "./steamcard";
import NarrationTwo from "./Narration/narrationtwo";

export default function HobbiesSection() {
  return (
     <motion.section
            className="
            relative w-full max-w-6xl 
            bg-amber-900/10 backdrop-blur-lg 
            rounded-3xl shadow-2xl p-10 z-10 
            md:p-14 border border-white/10
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="
            text-3xl md:text-4xl font-bold text-center 
            text-amber-400 mb-10 drop-shadow-lg
            ">
              🦥 My Hobbies & Interests
            </h2>
    
            <div className="
            grid grid-cols-1 md:grid-cols-2 
            gap-12 items-start md:items-stretch
            ">
              <section
                className="
                flex flex-col items-center text-center 
                bg-amber-500/10 p-8 rounded-2xl 
                border border-amber-600/15 shadow-lg 
                hover:shadow-2xl transition-all duration-300
                ">
                <h3 className="text-2xl font-semibold text-amber-600 mb-6">Outdoors & Activity</h3>
    
                <ul className="space-y-8 text-emerald-300 text-lg">
                 
                 
                  <HobbyCard title="🏃‍♂️ Trail running / jogging">
                      <MediaBox type="Image" src="/trailrun.jpg" alt="Jogging" />
                  </HobbyCard>
                  
                  
                  <HobbyCard title="🚵🏻 Cycling (Mountain & Road)">
                          <MediaBox src="https://www.youtube.com/embed/Cm_TeuKtgRw?si=ungy74VpeyRF-BrO" />
                  </HobbyCard>
    
                 
                  <HobbyCard title="🏋🏻 Crossfit">
                  <p className="text-blue-400">
                    ❄️ Winter sports: snowshoeing, snowboarding, splitboarding
                  </p>
                 </HobbyCard>
                  
    
                </ul>
              </section>
    
              <section
                className="
                flex flex-col items-center 
                text-center bg-amber-500/10 
              border-gray-700/40 p-8 rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all duration-300
                ">
                <h3 className="text-2xl font-semibold text-amber-600 mb-6">
                  Gaming & Editing
                </h3>
    
                <ul className="space-y-8 text-blue-300 text-lg">
                   
                   <HobbyCard title="🎮 PC Gaming">
                  <MediaBox src="https://www.youtube.com/embed/D_rQ4fOouk0?si=pHlv52uL3fiegLGx" />
                  <div className="mt-4 flex justify-center">
                    <SteamCard steamId="76561198037781673" />
                  </div>
                  </HobbyCard>
    
                  <HobbyCard title="🎬 Video Editing">
                 <MediaBox src="https://www.youtube.com/embed/EVIE_8xvWws?si=4iDvqcDL7Pa79HSQ"/>
                 </HobbyCard>
    
                  <NarrationTwo className="mt-4" />
                </ul>
              </section>
            </div>
          </motion.section>
  )
}
