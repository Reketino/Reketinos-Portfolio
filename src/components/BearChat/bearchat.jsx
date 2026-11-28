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

        
      </div>
    </section>
  );
}
