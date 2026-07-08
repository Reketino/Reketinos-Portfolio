"use client";

import { useEffect, useState } from "react";

const DEFAULT_SETTINGS = {
    startupNewTab: true,
    searchEngine: "google",
    animations: true,
    glass: true,
    bearMode: false,
};

export default function useSettings() {
    const [settings, setSettings] = useState(DEFAULT_SETTINGS)

    useEffect(() => {
        const saved = localStorage.getItem("bearweb-settings");

        if (saved) {
            setSettings(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "bearweb-settings",
            JSON.stringify(settings),
        );
    }, [settings])
}