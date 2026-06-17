"use client";
import { useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";

export default function BearWebWindow() {
  const [url, setUrl] = useState("");

  const navigate = (value) => {
    if (!value.trim()) return;

    const input = value.trim();
    const lower = value.toLowerCase().trim();

    if (lower.includes("stock")) {
       setUrl("https://bearstocks.vercel.app/");
       return;
       }

    if (lower.includes("holdem")) {
       setUrl("https://bear-hold-em-frontend.vercel.app/");
       return;
       }

    if (lower.includes("home")) {
      setUrl("Search BearWeb or Type a URL");
      return;
      }

    if (lower === "google") {
       setUrl("https://www.google.com/webhp?igu=1");
       return;
       }

    if (
      input.startsWidth("http://") ||
      input.startsWidth("https://")
    ) {
      setUrl(input);
      return;
    }
  };

  return (
    <main className="flex flex-col h-full min-h-0">
      <BearWebTopbar
        currentUrl={url || "Search BearWeb or Type a URL"}
        onNavigate={navigate}
        onHome={() => setUrl("")}
        onReload={() => setUrl((u) => u)}
      />

      <section className="bw-content min-h-0 overflow-auto">
        {!url && <BearWebStart onOpen={navigate} />}

        {url && <iframe src={url} className="bw-iframe" />}
      </section>
    </main>
  );
}
