"use client";
import { useEffect, useState, useRef } from "react";


export function useTaskbarState() {
 const [openStart, setOpenStart] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [clockFormat, setClockFormat] = useState("24h");
  const [showTimezone, setShowTimezone] = useState(false);

  const calendarRef = useRef(null);

  useEffect(() => {
    const savedFormat = localStorage.getItem("clockFormat");
    const savedTZ = localStorage.getItem("showTimezone");

    if (savedFormat) setClockFormat(savedFormat);
    if (savedTZ) setShowTimezone(savedTZ === "true");
  }, []);


  useEffect(() => {
    localStorage.setItem("clockFormat", clockFormat);
  }, [clockFormat]);


  useEffect(() => {
    localStorage.setItem("showTimezone", showTimezone);
  }, [showTimezone]);


  useEffect(() => {
    const handleClick = (e) => {
      if (calendarRef.current?.contains(e.target)) {
        return;
      }
      setOpenStart(false);
      setCalendarOpen(false);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return {
    openStart,
    setOpenStart,
    calendarOpen,
    setCalendarOpen,
    showTimezone,
    setShowTimezone,
    calendarRef,
  };
}
