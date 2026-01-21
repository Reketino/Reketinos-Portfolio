"use client";
import { useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";

export default function BearWebWindow() {
  const [url, setUrl] = useState("");

  const navigate = (value) => {
    if (!value) return;
    const lower = value.toLowerCase().trim();

    if (lower.includes("stock")) return setUrl("https://bearstocks.vercel.app/");
    if (lower.includes("holdem")) return setUrl("https://bear-hold-em-frontend.vercel.app/");
    if (lower.includes("home")) return setUrl("home");

    if(lower.startsWith("http")) return setUrl(value);
  };

  return (
    <main className="flex flex-col h-full min-h-0">
      <BearWebTopbar
        currentUrl={url || "home"}
        onNavigate={navigate}
        onHome={() => setUrl("")}
        onReload={() => setUrl((u) => u)}
      />

      <section className="bw-content min-h-0 overflow-auto">
        {!url  && <BearWebStart onOpen={navigate} />}

        {url && <iframe src={url} className="bw-iframe" />}
      </section>
    </main>
  );
}
