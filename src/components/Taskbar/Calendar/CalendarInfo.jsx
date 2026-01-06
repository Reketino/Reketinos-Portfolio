import { isNorwegianHoliday } from "@/lib/norwegianHolidays";

export default function CalendarInfo({ year, month, day, onClose }) {
  const holiday = isNorwegianHoliday(month, day);
  const date = new Date(year, month, day);

  return (
    <main
      className="
      relative rounded-tr-4xl
      inline-flex items-start
      gap-4 px-3 py-1.5
    bg-amber-400/50 backdrop-blur-3xl  
      border border-white/10
      text-xs shadow-lg
    "
    >
      <section>
        <p
          className="
          uppercase tracking-wide text-white
            "
        >
          {date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
        </p>

        {holiday ? (
          <p className="mt-1 text-red-500">{holiday.name} 🇳🇴</p>
        ) : (
          <p className="mt-1 text-neutral-400">No public holiday</p>
        )}
      </section>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="
        ml-auto px-2 py-1
        rounded-xl
        text-white
        hover:bg-white/15
        hover:text-amber-400
        leading-none
        transition
        "
      >
        X
      </button>
    </main>
  );
}
