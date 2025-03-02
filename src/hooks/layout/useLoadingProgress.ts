"use client"

import { useEffect, useState } from "react";
import { useStore } from "@/store/layout/store";
import { COUNTER_INCREMENT, COUNTER_INTERVAL_MS, COUNTER_MAX_VALUE, DEFAULT_PAGE_NUMBER } from "@/constants/landing";

export function useLoadingProgress() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = useStore((state) => state.loaded);
  const [counter, setCounter] = useState(0);
  const pageNumber = DEFAULT_PAGE_NUMBER;
  const menuItems = useStore((state) => state.menuItems);

  useEffect(() => {
    setIsLoaded(loaded);
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (!isLoaded) {
            return Math.min(prev + COUNTER_INCREMENT, COUNTER_MAX_VALUE);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, COUNTER_INTERVAL_MS);

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return {
    isLoaded,
    counter,
    pageNumber,
    menuItems,
  };
}