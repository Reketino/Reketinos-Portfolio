"use client";

export default function ProjectCard({
    title,
    description,
    image,
    onClick,
    bearMode
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
            transsition-all
            hover:-translate-y-1
            hover:shadow-xl
            ${
                bearMode
                ? "border-[#4c6b2c] bg-[#253121] hover:bg-[#31452b]"
                : "border-neutral-700 bg-neutral-800 hover:bg-neutral-700"
            }
            `}
        >
            <img
            src={image}
            alt={title}
            className="
            h-40
            w-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
            "
            draggable={false}
            />
        </button>
    )
}