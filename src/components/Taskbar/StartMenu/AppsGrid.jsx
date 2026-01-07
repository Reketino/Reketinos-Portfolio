"use client";

export default function AppsGrid({ apps }) {
  return (
    <section className="grid grid-cols-3 gap-4 mb-4">
      {apps.map((app) => (
        <button
          key={app.name}
          className="
                 flex flex-col items-center gap-1
                 hover:bg-white/10 p-2 rounded-xl transition
                 "
        >
          <span
            className="
                    w-10 h-10 bg-white/10 rounded-lg
                    flex items-center justify-center text-xs
                    "
          >
            {app.icon}
          </span>
          <span className="text-xs text-white/70">{app.name}</span>
        </button>
      ))}
    </section>
  );
}
