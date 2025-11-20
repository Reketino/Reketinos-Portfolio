"use client";
import { React, useState } from 'react'

export default function BearWebAddressBar({ currentUrl, onNavigate }) {
const [input, setInput] = useState("");

  return (
    <form 
    onSubmit={(e) => {
        e.preventDefault();
        onNavigate(input);
        setInput("");

    }}
    className="bw-addr-form"
    >
      <input
      className="bw-addr-input"
      placeholder="Search or type URL"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      {currentUrl !== "bearweb://start" && (
        <span className="bw-addr-url">{currentUrl}</span>
      )}
    </form>
  );
}
