import React from "react";

export default function BearWebTabs({
  tabs,
  activeTabId,
  onswitchTab,
  onCloseTab,
  onNewTab,
}) {
  return (
    <section className="flex items-center gap-1 overflow-x-auto">
      {tabs.map((tab) => (
        <div
        key={tab.id}
        onClick={() => onswitchTab(tab.id)}
        className={`
          bw-tab flex items-center gap-2 px-3 py-1 cursor-pointer
          ${activeTabId === tab.id ? "active" : ""}
          `}
          >
            
          </div>
      ))}
    </section>
  );
}
