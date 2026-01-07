"use client";

export default function BgThumbnail({
    image,
    active,
    onSelect
}) {
  return (
    <button
            disabled= {active}
              onClick={onSelect}
              className={`
              flex flex-col 
              items-center  
              transition
              ${
                active
                ? "opacity-80 cursor-default"
                : "hover:scale-105"
              }
              `}
            >
              <figure className="
              relative
              flex flex-col 
              items-center
              ">
                <div
                  className={`
                w-20 h-20 rounded-xl
                bg-cover bg-center 
                border 
                ${
                  active
                  ?"border-green-400 ring-2 ring-green-400/40"
                  :"border-white/30"
                }
                `}
                  style={{ backgroundImage: `url(${image})` }}
                />


                {active && (
                  <span className="
                  absolute top-1 right-1
                  text-green-300 text-sm
                  ">
                     ✓
                  </span>
                )}


                <figcaption className="
                text-xs text-white mt-1 text-center
                ">
                  {image.split("/").pop()}
                </figcaption>

              </figure>
              </button>
  )
}
