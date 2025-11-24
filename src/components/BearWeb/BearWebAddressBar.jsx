"use client";
import { React, useState } from 'react'

export default function BearWebAddressBar({ currentUrl, onNavigate }) {
const [input, setInput] = useState("");


const safeURL = typeof currentUrl === "string" ? currentUrl : "";

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

      {safeURL !== "" && safeURL !== "bearweb://start" && (
        <span className="bw-addr-url">
          {safeURL.toLocaleUpperCase()}
          </span>
      )}
    </form>
  );
}
