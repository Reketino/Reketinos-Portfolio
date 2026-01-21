"use client";
import { useEffect, useState } from "react";

export default function BearWebAddressBar({ onNavigate, currentUrl }) {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);

const safeURL = typeof currentUrl === "string" ? currentUrl : "";

useEffect(() => {
  if (!isEditing) setInput(safeURL);
}, [safeURL, isEditing]);

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
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
