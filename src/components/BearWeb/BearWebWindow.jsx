"use client";
import { useState } from "react";
import BearWebTopbar from "./BearWebTopbar";
import BearWebStart from "./BearWebStart";
import BearWebTabs from "./BearWebTabs";
import WindowControls from "./WindowControls";
import useBookmarks from "@/components/BearWeb/hooks/useBookmarks";
import useBearWebTabs from "./hooks/useBearWebTabs";
import BearWebSettings from "./BearWebSettings";


export default function BearWebWindow({
  onBack,
  onMinimize,
  fullscreen,
  onToggleFullscreen,
}) {

  const {
    tabs,
    activeTab,
    activeTabId,

    createNewTab,
    switchTab,
    closeTab,

    navigate,
    navigateTab,

    goBack,
    goForward,

    reloadPage,

    canGoBack,
    canGoForward,
  } = useBearWebTabs();

  const { bookmarks, isBookmarked, addBookmark, removeBookmark } =
    useBookmarks(activeTab);

    const [settingsOpen, setSettingsOpen] = useState(false);

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
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        isBookmarked={isBookmarked}
        onBookmark={isBookmarked ? removeBookmark : addBookmark}
        bookmarks={bookmarks}
        onNewTab={createNewTab}
        onClose={onBack}
        onSettings={() => setSettingsOpen(true)}
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
      {settingsOpen && <BearWebSettings />}
    </main>
  );
}
