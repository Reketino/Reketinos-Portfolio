"use client";

import { useState, useEffect, useRef } from "react";
import {Panda, Send, Sparkles } from "lucide-react";

const modes = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "fun", label: "Fun" },
  { value: "story", label: "Story" },
]

export default function BearChat({ setIsAnswering }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [mode, setMode] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ 
      behavior: "smooth", 
      block: "end",
    });
  }, [messages, loading, error]);

  async function askBear() {
    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    setInput("");
    setLoading(true);
    setIsAnswering(true);
    setError(null);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BEAR_AI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userMessage,
          mode,
        }),
      });

      if (res.status === 429) {
        setError("BearAI is out of breath!🐻");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        throw new Error("Something went wrong.")
      }

      const data = await res.json();

      if (!data.answer) {
        throw new Error("BearAi returned an empty response.")
      }

      setMessages((prev) => [...prev, { role: "bear", text: data.answer }]);

      setInput("");
    } catch {
      setError("This went totally wrong. Try one more time.");
    } finally {
      setLoading(false);
      setIsAnswering(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    askBear();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askBear();
    }
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label
        htmlFor="bear-mode"
        className="text-xs font-medium text-neutral-500"
        >
          Convertion style
        </label>

        <select
        id="bear-mode"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        disabled={loading}
        className="
           cursor-pointer rounded-lg
            border border-neutral-800
            bg-neutral-900
            px-3 py-1.5
            text-xs text-neutral-300
            outline-none
            transition-colors
            hover:border-neutral-700
            focus-visible:border-amber-500/50
            disabled:cursor-not-allowed
            disabled:opacity-50
        "
        >
          {modes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <section 
      aria-label="BearAi conversation"
      className="
                flex h-64 flex-col gap-3
          overflow-y-auto overscroll-contain
          rounded-xl
          border border-neutral-800/80
          bg-neutral-900/40
          p-3
          text-sm
      "
      >
        {messages.length === 0 && !loading && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="
                mb-3 flex h-11 w-11 items-center justify-center
                rounded-2xl border border-amber-500/10
                bg-amber-500/5
            "
            >
              <Panda className="h-5 w-5 text-amber-400" />
            </div>

            <p className="mt-1 max-w-52 text-xs leading-relaxed text-neutral-500">
              Ask me anything. I'm ready when your are.
            </p>
          </div>
        )}

        {messages.map((message, index) => {
          const isBear = message.role === "bear";

          return (
            <div 
            key={`${message.role}-${index}`}
            className={`flex items-end gap-2 ${
              isBear ? "justify-start" : "justify-end"
            }`}
            >
              {isBear && (
                <div className="
                    flex h-7 w-7 shrink-0 items-center justify-center
                    rounded-lg border border-amber-500/10
                    bg-amber-500/5
                "
                >
                  <Panda className="h-3.5 w-3.5 text-amber-400" />
                  </div>
              )}

              <div className={`
                  max-w-[85%] rounded-2xl px-3 py-2
                  leading-relaxed whitespace-pre-wrap wrap-break-word
                  ${
                    isBear
                    ? "rounded-bl-md border border-neutral-800 bg-neutral-900 text-neutral-200"
                    : "rounded-br-md bg-amber-500 text-neutral-950"
                  }
              `}
              >
                {message.text}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-end gap-2">
            <div className="
                flex h-7 w-7 shrink-0 items-center justify-center
                rounded-lg border border-amber-500/10
                bg-amber-500/5
            "
            >
              <Panda className="h-3.5 w-3.5 text-amber-400" />
            </div>

            <div className="
              flex items-center gap-1.5
                rounded-2xl rounded-bl-md
                border border-neutral-800
                bg-neutral-900
                px-4 py-3
            "
            >
              
            </div>
          </div>
        )}
      </section>
    </section>
  );
}
