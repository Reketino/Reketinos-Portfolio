import { isNorwegianHoliday } from "@/lib/norwegianHolidays";

export default function CalendarInfo({ year, month, day, onClose }) {
  const holiday = isNorwegianHoliday(month, day);
  const date = new Date(year, month, day);

  return (
    <main
      className="
    flex items-start justify-between
    backdrop-blur rounded-md 
    border border-white/10
    bg-white/10 px-4
    py-3 text-sm
    "
    >
      <section>
        <p
          className="
            text-xs uppercase 
            tracking-wide text-neutral-400
            "
        >
          {date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
        </p>

        {holiday ? (
          <p className="mt-1 text-red-400">{holiday.name} 🇳🇴</p>
        ) : (
          <p className="mt-1 text-neutral-400">No public holiday</p>
        )}
      </section>

      <button
        onClick={onClose}
        className="
        text-neutral-400 hover:text-white"
      >
        X
      </button>
    </main>
  );
}
