export function getProjectCardStyles({ bearMode, animations, glass}) {
     const cardTheme = glass
  ? bearMode
  ? "border-amber-200/15 bg-[#253121]/45 backdrop-blur-xl hover:bg-[#31452b]/55"
  : "border-white/10 bg-neutral-800/45 backdrop-blur-xl hover:bg-neutral-700/55"
  : bearMode
    ?"border-[#4c6b2c] bg-[#253121] hover:bg-[#31452b]"
    : "border-neutral-700 bg-neutral-800 hover:bg-neutral-700"

const cardAnimation = animations
? "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
: "";
}