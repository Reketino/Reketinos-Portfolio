"use client";
import { useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";

export default function BearWebWindow() {
  const HOME_URL = "https://www.google.com/webhp?igu=1";

  const [url, setUrl] = useState("");
  const [reloadKey, setReloadKey] = useState(0);

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

    if (lower === "home") {
      setUrl(HOME_URL);
      return;
    }

    if (lower === "google") {
      setUrl("https://www.google.com/webhp?igu=1");
      return;
    }

    if (lower === "github") {
      window.open("https://github.com/Reketino", "_blank");
      return;
    }
    if (lower === "linkedin") {
      window.open("https://www.linkedin.com/in/beareven/", "_blank");
      return;
    }

    if (input.startsWith("http://") || input.startsWith("https://")) {
      setUrl(input);
      return;
    }

    setUrl(`https://${input}`);
  };

  const reloadPage = () => {
    setReloadKey((prev) => prev + 1);
  };

  console.log("Loading:", url);

  return (
    <main className="flex flex-col h-full min-h-0">
      <BearWebTopbar
        currentUrl={url || "Search BearWeb or Type a URL"}
        onNavigate={navigate}
        onHome={() => setUrl(HOME_URL)}
        onReload={reloadPage}
      />

      <section className="bw-content min-h-0 overflow-auto">
        {!url && <BearWebStart onOpen={navigate} />}

        {url && (
          <iframe
            key={reloadKey}
            src={url}
            title="BearWeb Browser"
            className="bw-iframe"
          />
        )}
      </section>
    </main>
  );
}
