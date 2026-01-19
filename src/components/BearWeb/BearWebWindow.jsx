"use client";
import { React, useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";


export default function BearWebWindow() {
  const [page, setPage] = useState("home");
 

  const navigate = (value) => {
    if (!value) return;
    const lower = value.toLowerCase().trim();

    if (lower.includes("stock")) return setPage("stocks");
    if (lower.includes("bearstocks")) return setPage("stocks");
    if (lower.includes("holdem")) return setPage("holdem");
    if (lower.includes("bearholdem")) return setPage("holdem");
    if (lower.includes("home")) return setPage("home");

    setPage("unknown");
  };

  return (
      <main className="flex flex-col h-full min-h-0">
      <BearWebTopbar
        currentUrl={page}
        onNavigate={navigate}
        onHome={() => setPage("home")}
        onReload={() => setPage(page)}
       />

      <section className="bw-content min-h-0 overflow-auto">
        {page === "home" && <BearWebStart onOpen={navigate} />}

        {page === "holdem" && (
          <iframe
            src="https://bear-hold-em-frontend.vercel.app/"
            className="bw-iframe"
          />
        )}

        {page === "stocks" && (
          <iframe src="https://bearstocks.vercel.app/" className="bw-iframe" />
        )}
      </section>
    </main>
  );
}
