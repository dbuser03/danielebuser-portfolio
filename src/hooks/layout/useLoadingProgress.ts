"use client"

import { useEffect, useState } from "react";
import { COUNTER_INCREMENT, COUNTER_INTERVAL_MS, COUNTER_MAX_VALUE, DEFAULT_PAGE_NUMBER } from "@/constants/landing";

export function useLoadingProgress() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const pageNumber = DEFAULT_PAGE_NUMBER;

  // Remove the automatic timeout that sets isLoaded to true

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev < COUNTER_MAX_VALUE) {
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
    setIsLoaded, // Export the setter so we can control it from outside
    counter,
    pageNumber,
  };
}