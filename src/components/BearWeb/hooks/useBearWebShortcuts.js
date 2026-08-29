"use client";

import { useEffect } from "react";

export default function useBearWebShortcuts({
    createNewTab,
    closeTab,
    activeTabId,
    goBack,
    goForward,
    reloadPage,
    focusAddressBar,
}) {
    useEffect(() => {
        const handleKey = (event) => {
            const isCtrlOrCmd = event.ctrlKey || event.metaKey;

            if (!isCtrlOrCmd) return;

            switch (event.key.toLowerCase()) {
                case "t":
                    event.preventDefault();
                    createNewTab();
                    break;

                case "w":
                    event.preventDefault();
                    closeTab(activeTabId);
                    break;

                case "l":
                    event.preventDefault();
                    break;

                case "r":
                    event.preventDefault();
                    reloadPage();
                    break;

                case "arrowleft":
                    event.preventDefault();
                    goBack();
                    break;

                case "arrowright":
                    event.preventDefault();
                    goForward();
                    break;

                default:
                    break;
            }
        }
    })
}