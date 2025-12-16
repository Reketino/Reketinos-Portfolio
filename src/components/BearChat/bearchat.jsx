import React from 'react'
import { useState } from 'react'

export default function BearChat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([])
    const [mode, setMode] = useState("professional")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function askBear() {
      if (!input.trim() || loading) return;
      
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
            process.env.NEXT_PUBLIC_BEAR_AI_URL,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    question: input,
                    mode, 
                }),
            }
        );

        if (res.status === 429) {
            setError("BearAI is out of breath!🐻")
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
      }
    }


  return (
    <main className="max-w-xl mx-auto space-y-3">
      <select
      value={mode}
      onChange={(e) => setMode(e.target.value)}
      className="bg-neutral-900 p-2 rounded text-sm"
      >
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
        <option value="fun">Fun</option>
        <option value="story">Story</option>
        </select> 

        <section className='bg-black/40 rounded p-4 h-64 overflow-y-auto text-sm space-y-2'>
        {messages.map((m, i) => (
          <p key={i} className={m.role === "bear" ? "text-cyan-300" : ""}>
            <strong>{m.role === "bear" ? "🐻BearAI" : "You"}:</strong>{" "}
            {m.text}
          </p>
        ))}

        {loading && (
          <p className='text-neutral-400'>BearAI is summoning...</p>
        )}

        {error && (
          <p className='text-red-400'>{error}</p>
        )}
        </section>

        <section className="flex gap-2">
          <input
          className="flex-1 bg-neutral-900 p-2 rounded text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Ask Bear something...'
          onKeyDown={(e) => e.key === "Enter" && askBear()}
          />
          <button
          onClick={askBear}
          disabled={loading}
          className='bg-cyan-500 text-black px-4 rounded disabled:opacity-50'
          >
            Ask
          </button>
        </section>
    </main>
  );
}
