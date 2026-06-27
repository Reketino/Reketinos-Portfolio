"use client";
import { useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";
import BearWebTabs from "./BearWebTabs";

export default function BearWebWindow() {
  const HOME_URL = "https://www.google.com/webhp?igu=1";

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "New Tab",
      url: "",
      reloadKey: 0,
      history: [],
      historyIndex: -1,
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
      history: [],
      historyIndex: -1,
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
        tab.id === activeTabId ? { ...tab, ...updates } : tab,
      ),
    );
  };

  const navigateTab = (url, title) => {
    setTabs((prev) =>
      prev.map((tab) => {
        if (tab.id !== activeTabId) return tab;

        const newHistory = [...tab.history.slice(0, tab.historyIndex + 1), url];

        return {
          ...tab,
          url,
          title,
          history: newHistory,
          historyIndex: newHistory.length - 1,
        };
      }),
    );
  };

  const goBack = () => {
    if (activeTab.historyIndex <= 0) return;

    const newIndex = activeTab.historyIndex - 1;

    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              url: tab.history[newIndex],
              historyIndex: newIndex,
            }
          : tab,
      ),
    );
  };

  const goForward = () => {
    if (activeTab.historyIndex >= activeTab.history.length - 1) return;

    const newIndex = activeTab.historyIndex + 1;

    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              url: tab.history[newIndex],
              historyIndex: newIndex,
            }
          : tab,
      ),
    );
  };

  const navigate = (value) => {
    if (!value.trim()) return;

    const input = value.trim();
    const lower = value.toLowerCase().trim();

    if (lower.includes("stock")) {
      navigateTab(
        "https://bearstocks.vercel.app/",
        "BearStocks",
      );
      return;
    }

    if (lower.includes("holdem")) {
      navigateTab(
        "https://bear-hold-em-frontend.vercel.app/",
        "Bear Hold Em",
      );
      return;
    }

    if (lower === "home") {
      navigateTab("", "New Tab");
      return;
    }

    if (lower === "google") {
      navigateTab(HOME_URL, "Google");
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
      const hostname = new URL(input).hostname.replace("www.", "");

      navigateTab(
      input,
      hostname,
      );
      return;
    }

    const finalUrl = `https://${input}`;

    navigateTab(
      finalUrl,
      input,
    );
  };

  const reloadPage = () => {
    updateActiveTab({
      reloadKey: activeTab.reloadKey + 1,
    });
  };

  return (
    <main className="flex flex-col h-full min-h-0">
      <BearWebTabs
        tabs={tabs}
        activeTabId={activeTabId}
        onSwitchTab={switchTab}
        onCloseTab={closeTab}
        onNewTab={createNewTab}
      />

      <BearWebTopbar
        currentUrl={activeTab.url || "Search BearWeb or Type a URL"}
        onNavigate={navigate}
        onHome={() => navigateTab("", "New Tab")}
        onReload={reloadPage}
        onBack={goBack}
        onForward={goForward}
        canGoback={activeTab.historyIndex > 0}
        canGoForward={
          activeTab.historyIndex < activeTab.history.length - 1
        }
      />

      <section className="bw-content min-h-0 overflow-auto">
        {!activeTab.url && <BearWebStart onOpen={navigate} />}

        {activeTab.url && (
          <iframe
            key={activeTab.reloadKey}
            src={activeTab.url}
            title="BearWeb Browser"
            className="bw-iframe"
          />
        )}
      </section>
    </main>
  );
}
