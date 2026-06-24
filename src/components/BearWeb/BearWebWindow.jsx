"use client";
import { useEffect, useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";

export default function BearWebWindow() {
  const HOME_URL = "https://www.google.com/webhp?igu=1";

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "New Tab",
      url: "",
      reloadKey: 0,
    },
  ]);

  const [activeTabId, setActiveTabId] = useState(1);

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  const createNewTab = () => {
    const newTab = {
      id: Date.now(),
      title: "New Tab",
      url: "",
      reloadKey: 0,
    };

    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(newTab.id);
  };

  const switchTab = (tabId) => {
    setActiveTabId(tabId);
  };

  const closeTab = (tabId) => {
    if (tabs.length === 1) return;

    const updatedTabs = tabs.filter((tab) => tab.id !== tabId);

    setTabs(updatedTabs);

    if (activeTabId === tabId) {
      setActiveTabId(updatedTabs[0].id);
    }
  };

  const updateActiveTab = (updates) => {
    setTabs((prev) => 
    prev.map((tab) =>
    tab.id === activeTabId
    ? { ...tab, ...updates }
    : tab
    )
    );
  };

  const navigate = (value) => {
    if (!value.trim()) return;

    const input = value.trim();
    const lower = value.toLowerCase().trim();

    if (lower.includes("stock")) {
      updateActiveTab({
      url: "https://bearstocks.vercel.app/",
      title: "BearStocks",
      })
      return;
    }

    if (lower.includes("holdem")) {
      updateActiveTab({
      url: "https://bear-hold-em-frontend.vercel.app/",
      title: "Bear Hold Em",
      })
      return;
    }

    if (lower === "home") {
      updateActiveTab({
      url: "",
      title: "New Tab",
      });
      return;
    }

    if (lower === "google") {
      updateActiveTab({
    url: HOME_URL,
    title: "Google",
    });
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

  return (
    <main className="flex flex-col h-full min-h-0">
      <BearWebTopbar
        currentUrl={url || "Search BearWeb or Type a URL"}
        onNavigate={navigate}
        onHome={() => setUrl("")}
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
