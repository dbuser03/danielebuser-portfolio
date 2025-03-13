"use client"

import { useEffect, useState } from "react";
import { COUNTER_INCREMENT, COUNTER_INTERVAL_MS, COUNTER_MAX_VALUE, DEFAULT_PAGE_NUMBER } from "@/constants/landing";
import { LoadingProgressResult } from "@/types/layout/loadingProgressType";

export function useLoadingProgress(): LoadingProgressResult {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (isLoaded) return;

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < COUNTER_MAX_VALUE) {
          return Math.min(prev + COUNTER_INCREMENT, COUNTER_MAX_VALUE);
        } else {
          clearInterval(interval);
          setIsLoaded(true);
          return prev;
        }
      });
    }, COUNTER_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return {
    isLoaded,
    setIsLoaded,
    counter,
    pageNumber: DEFAULT_PAGE_NUMBER,
  };
}