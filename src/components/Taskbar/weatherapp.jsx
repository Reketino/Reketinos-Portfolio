"use client";
import {React, useEffect, useState} from 'react'

export default function WeatherApp() {
    const[weather, setWeather]=useState(null);


// Collecting location from user
useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const res = await fetch("/api/weather", {
method: "POST",
body: JSON.stringify({
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
}),
          });
          
          const data = await res.json();
          setWeather(data);
        });
    }
}, []);


// Error message if data fetch failed
if (!weather) return ( 
<div className="px-3 text-xs text-red-300">
    ⚠️ Reketino ain't fetching the weather today
</div>
);

// Error message if no coordinates
if (weather?.error) {
    return (
        <div className="px-3 text-xs opacity-70">
            🐟 Reketino lost his coordinates and is lost at sea
        </div>
    );
}


// Weathericons & temp in navbar 
  return (
    <main className="flex items-center gap-1 px-3 text-sm">
        <span>{Math.round(weather.temperature)}°</span>

        {weather.icon && (
            <img 
            src={`/yr-icons/${weather.icon}.svg`}
            alt=""
            className="w-5 h-5"
            />
        )}
    </main>
  );
}
