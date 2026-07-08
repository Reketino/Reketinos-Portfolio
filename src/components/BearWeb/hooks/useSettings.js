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
        try {
        const saved = localStorage.getItem("bearweb-settings");

        if (saved) {
            setSettings(JSON.parse(saved));
        }
    } catch (error) {
        console.error("Error loading BearWeb settings:", error);
    }
    }, []);

    useEffect(() => {
        try {
        localStorage.setItem(
            "bearweb-settings",
            JSON.stringify(settings),
        );
        } catch (error) {
            console.error("Error saving BearWeb settings:", error);
        }
    }, [settings])

    const updateSetting = (key, value) => {
        setSettings((prev) => ({
            ...prev, 
            [key]: value,
        }));
    };

    return {
        settings,
        updateSetting,
    }
}