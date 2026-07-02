"use client";

import { useEffect, useMemo, useState } from "react";

export default function useBookmarks(activeTab) {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
    const saved = localStorage.getItem("bearweb-bookmarks");

    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const saveBookmarks = (list) => {
    setBookmarks(list);
    localStorage.setItem("bearweb-bookmarks", JSON.stringify(list));
  };

  const addBookmark = () => {
    if (!activeTab.url) return;

    const exists = bookmarks.some((bookmark) => bookmark.url === activeTab.url);

    if (exists) return;
    saveBookmarks([
      ...bookmarks,
      {
        title: activeTab.title,
        url: activeTab.url,
      },
    ]);
  };

  const removeBookmark = () => {
    saveBookmarks(
      bookmarks.filter((bookmark) => bookmark.url !== activeTab.url),
    );
  };

  const isBookmarked = useMemo(
    () =>
        bookmarks.some(
    (bookmark) => bookmark.url === activeTab?.url,
    )
    [bookmarks, activeTab]
  );

}