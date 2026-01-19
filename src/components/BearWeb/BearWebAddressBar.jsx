"use client";
import { React, useState } from 'react'

export default function BearWebAddressBar({ onNavigate }) {
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
      name="SearchBar"
      className="bw-addr-input"
      placeholder="Search or type URL"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

    </form>
  );
}
