import { useState, useEffect, useCallback } from "react";

export function usePageNavigation() {
  const [currentPage, setCurrentPageState] = useState(() => localStorage.getItem("currentPage") || "welcome");

  // Notify all listeners on page change
  const setCurrentPage = useCallback((page: string) => {
    localStorage.setItem("currentPage", page);
    setCurrentPageState(page);
    window.dispatchEvent(new CustomEvent("pagechange", { detail: page }));
  }, []);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === "currentPage" && event.newValue) {
        setCurrentPageState(event.newValue);
      }
    };
    const onPageChange = (event: Event) => {
      // @ts-ignore
      setCurrentPageState(event.detail);
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("pagechange", onPageChange);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("pagechange", onPageChange);
    };
  }, []);

  return { currentPage, setCurrentPage };
}
