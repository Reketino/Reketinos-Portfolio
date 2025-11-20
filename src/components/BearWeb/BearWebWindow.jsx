"use client";
import { React, useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";
import { Section } from "lucide-react";

export default function BearWebWindow({ startUrl = "bearweb://start" }) {
    const [url, setUrl] = useState(startUrl);
    const [showStart, setShowStart] = useState(startUrl === "bearweb://start");

    const navigate =(value) => {
        if (!value) return;

        const isUrl = value.startsWith("http://") || value.startsWith("https://");
        const next = isUrl
        ? value
        : `https://html.duckduckgo.com/html/?q=${encodeURIComponent(value)}`;

        setShowStart(false);
        setUrl(next);
    };

    const goHome = () => {
        setShowStart(true);
        setUrl("bearweb://start")
    };

  return (
    <section className='bw-window'>
<BearWebTopbar
currentUrl={url}
onNavigate={navigate}
onHome={goHome}
onReload={() => setUrl ((prev) => prev)}
/>
   
    <main className="bw-content">
        {showStart ? (
            <BearWebStart onOpen={navigate} />
            ) : (
                <iframe 
                src={url}
                key={url}
                className="bw-iframe"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups
                allow-popups-to-escape-sandbox"
                />       
        )}
    </main>
     </section>
  );
}
