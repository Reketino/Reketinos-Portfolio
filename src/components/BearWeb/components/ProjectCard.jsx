"use client";

export default function ProjectCard({
  title,
  description,
  image,
  onClick,
  bearMode,
}) {
  return (
    <button
      onClick={onClick}
      className={`
            group
            overflow-hidden
            rounded-2xl
            border
            text-left
            transition-all
            hover:-translate-y-1
            hover:shadow-2xl
            ${
              bearMode
                ? "border-[#4c6b2c] bg-[#253121] hover:bg-[#31452b] hover:shadow-amber-500/20"
                : "border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:shadow-cyan-500/20"
            }
            `}
    >
      <div
        className={`
        flex
            h-52
            items-center
            justify-center
            p-6
      ${
        bearMode
          ? "bg-linear-to-br from-[#305a38] to-[#1f2f1b]"
          : "bg-neutral-900"
      }
      `}
      >
        <img
          src={image}
          alt={title}
          className="
        h-56
        object-contain
        transition-transform
        duration-300
        group-hover:scale-105
        group-hover:-translate-y-1
        group-hover:rotate-1
            "
          draggable={false}
        />
      </div>

      <div className="flex min-h-[140px] flex-col p-5">
        <h3
          className={`text-xl font-bold ${
            bearMode ? "text-amber-200" : "text-white"
          }`}
        >
          {title}
        </h3>

        <p className="text-sm text-neutral-400">{description}</p>
        <div className={`
        mt-auto
        flex
        items-center
        pt-5
        text-sm
        font-medium
        opacity-0
        -translate-x-2
        transition-all
        duration-300
        group-hover:translate-x-1
        group-hover:opacity-100
        
        ${
          bearMode
          ? "text-amber-300"
          :"text-cyan-200"
        }
        `}
        >
          Open Project →
        </div>
      </div>
    </button>
  );
}
