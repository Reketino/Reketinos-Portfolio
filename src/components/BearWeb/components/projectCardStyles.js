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

const cardShadow = bearMode
? "hover:shadow-amber-500/20"
: "hover:shadow-cyan-500/20";

const imageBackground = glass
? bearMode
? "bg-[#305a38]/25"
: "bg-neutral-950/25"
: bearMode
? "bg-linear-to-br from-[#305a38] to-[#1f2f1b]"
: "bg-neutral-900";

const imageAnimation = animations
? "transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-1"
: "";

const titleTheme = bearMode
? "text-amber-200 group-hover:text-amber-100"
: "text-white group-hover:text-cyan-300";

const titleAnimation = animations
    ? "transition-colors duration-300"
    : "";

const openProjectAnimation = animations
? "-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
: "opacity-100";
}