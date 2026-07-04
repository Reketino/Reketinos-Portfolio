"use client";
import { useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";
import BearWebTabs from "./BearWebTabs";
import WindowControls from "./WindowControls";
import useBookmarks from "@/components/BearWeb/hooks/useBookmarks";

export default function BearWebWindow({
  onBack,
  onMinimize,
  fullscreen,
  onToggleFullscreen,
}) {
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

  const { bookmarks, isBookmarked, addBookmark, removeBookmark } =
    useBookmarks(activeTab);


  return (
    <main className="flex flex-col h-full min-h-0">
      <header className="flex items-center  justify-between border-b border-white/10 px-2 py-1">
        <BearWebTabs
          tabs={tabs}
          activeTabId={activeTabId}
          onSwitchTab={switchTab}
          onCloseTab={closeTab}
          onNewTab={createNewTab}
        />

        <WindowControls
          fullscreen={fullscreen}
          onToggleFullscreen={onToggleFullscreen}
          onMinimize={onMinimize}
          onClose={onBack}
        />
      </header>

      <BearWebTopbar
        currentUrl={activeTab.url || "Search BearWeb or Type a URL"}
        onNavigate={navigate}
        onReload={reloadPage}
        onHome={() => navigateTab("", "New Tab")}
        onBack={goBack}
        onForward={goForward}
        canGoBack={activeTab.historyIndex > 0}
        canGoForward={activeTab.historyIndex < activeTab.history.length - 1}
        isBookmarked={isBookmarked}
        onBookmark={isBookmarked ? removeBookmark : addBookmark}
        bookmarks={bookmarks}
        onNewTab={createNewTab}
        onClose={onBack}
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
