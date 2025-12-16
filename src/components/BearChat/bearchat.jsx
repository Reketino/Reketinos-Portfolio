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
    <div>
      
    </div>
  )
}
