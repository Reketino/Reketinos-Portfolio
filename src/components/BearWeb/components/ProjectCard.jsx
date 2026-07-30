"use client";

import { getProjectCardStyles } from "./projectCardStyles";

export default function ProjectCard({
  title,
  description,
  image,
  imageClassName = "h-56",
  onClick,
  settings,
}) {
  const { 
    cardTheme,
    cardAnimation,
    cardShadow,
    imageBackground,
    imageAnimation,
    titleTheme,
    titleAnimation,
    openProjectAnimation, 
  } = getProjectCardStyles(settings);

  return (
    <button
      onClick={onClick}
      className={`
            group
            overflow-hidden
            rounded-2xl
            border
            text-left
            shadow-md
            ${cardTheme}
            ${cardAnimation}
            ${cardShadow}
            `}
    >
      <div
        className={`
        flex
            h-52
            items-center
            justify-center
            p-6
      ${imageBackground}
      `}
      >
        <img
          src={image}
          alt={title}
          className={`
            ${imageClassName}
        object-contain
        ${
          animations
            ? "transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-1"
            : ""
        }
        `}
          draggable={false}
        />
      </div>

      <div className="flex min-h-[140px] flex-col p-5">
        <h3
          className={`
            text-xl 
            font-bold 
          ${titleTheme}
          ${titleAnimation}
          `}
        >
          {title}
        </h3>

        <p className="text-sm text-neutral-400">{description}</p>
        <div
          className={`
        mt-auto
        flex
        items-center
        pt-5
        text-sm
        font-medium
          ${openProjectAnimation}
        ${
          settings.bearMode 
          ? "text-amber-300" 
          : "text-cyan-200"
        }
        `}
        >
          Open Project →
        </div>
      </div>
    </button>
  );
}
