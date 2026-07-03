"use client";

import { useState } from "react";

const HOME_URL = "https://www.google.com/webhp?igu=1"

export default function useBearWebTabs() {
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

  

    const reloadPage = () => {
    updateActiveTab({
      reloadKey: activeTab.reloadKey + 1,
    });
  };

}