"use client";
import { useEffect, useState } from "react";

export default function BearWebAddressBar({ onNavigate }) {
  const [input, setInput] = useState("");


const safeURL = typeof currentUrl === "string" ? currentUrl : "";

useEffect(() => {
  setInput(safeURL);
}, [safeURL]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNavigate(input);
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
