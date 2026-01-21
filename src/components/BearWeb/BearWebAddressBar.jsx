"use client";
import { useEffect, useState } from "react";
import { MdOutlineStarRate } from "react-icons/md";

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
      className="bw-addr-form relative w-full"
    >
      <input
        name="SearchBar"
        className="bw-addr-input w-full pr-10"
        placeholder="Search or type URL"
        value={input}
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="button"
        title="Bookmark"
        className="
      absolute right-5 top-1/2 -translate-y-1/2
       rounded-full
      text-neutral-400
      text-xl
      hover:bg-neutral-600
      "
        onClick={() => console.log("bookmark clicked")}
      >
        <MdOutlineStarRate />
      </button>
    </form>
  );
}
