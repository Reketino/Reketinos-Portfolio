"use client";
import { useState, useEffect, useRef } from "react";

export default function BearChat({ setIsAnswering }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [mode, setMode] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function askBear() {
    if (!input.trim() || loading) return;

    setLoading(true);
    setIsAnswering(true);
    setError(null);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BEAR_AI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: input,
          mode,
        }),
      });

      if (res.status === 429) {
        setError("BearAI is out of breath!🐻");
        setLoading(false);
        return;
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "user", text: input },
        { role: "bear", text: data.answer },
      ]);

      setInput("");
    } catch {
      setError("This went totally wrong. Try one more time.");
    } finally {
      setLoading(false);
      setIsAnswering(false);
    }
  }

  return (
    <main className="max-w-xl mx-auto space-y-3">
      
     <section className="flex gap-2 flex-wrap">
      {["professional", "casual", "fun", "story"].map((m) => (
        <button
        key={m}
        onClick={() => setMode(m)}
        className={`
          px-3 py-1 rounded text-sm
          capitalize transition
          ${
            mode === m
            ? "bg-amber-500 text-black"
            : "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
            }
        `}
        >
          {m}
        </button>
      ))}
     </section>

      <section className="bg-black/40 rounded p-4 h-64 overflow-y-auto text-sm space-y-2">
        {messages.map((m, i) => (
          <p key={i} className={m.role === "bear" ? "text-amber-400" : "text-neutral-200"}>
            <strong>{m.role === "bear" ? "🐻BearAI" : "You"}:</strong> {m.text}
          </p>
        ))}

        {loading && <p className="text-neutral-400">BearAI is typing...</p>}

        {error && <p className="text-red-400">{error}</p>}

        <div ref={bottomRef} />
      </section>

      <section className="flex gap-2">
        <input
          className="
          flex-1 bg-neutral-900 p-2 rounded text-sm
          focus:outline-none
          focus:ring-2 focus:ring-amber-500/40
          "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Bear something..."
          onKeyDown={(e) => e.key === "Enter" && askBear()}
        />
        <button
          onClick={askBear}
          disabled={loading}
          className="
          bg-amber-500 hover:bg-amber-600 
          text-black px-4 rounded 
          disabled:opacity-50
          transition
          "
        >
          Ask
        </button>
      </section>
    </main>
  );
}
