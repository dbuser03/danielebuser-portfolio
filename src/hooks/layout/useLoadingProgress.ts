"use client"

import { useEffect, useState } from "react";
import { useStore } from "@/store/layout/store";

export function useLoadingProgress() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = useStore((state) => state.loaded);
  const [counter, setCounter] = useState(0);
  const pageNumber = "001";
  const menuItems = useStore((state) => state.menuItems);

  useEffect(() => {
    setIsLoaded(loaded);
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (!isLoaded) {
            return Math.min(prev + 1, 100);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 20);

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