"use client";

import { useEffect } from "react";
import { useClickHandler } from "@/hooks/useClickHandler";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";

export function useHomePageLogic() {
  const {
    handleClick,
    readyForClick,
    hideLabel,
    loaded,
    setLoadingComplete
  } = useClickHandler();

  const { counter, setIsLoaded } = useLoadingProgress();

  useEffect(() => {
    if (counter === 100 && !loaded) {
      setLoadingComplete(true);
    }
  }, [counter, loaded, setLoadingComplete]);

  useEffect(() => {
    if (loaded) {
      setIsLoaded(true);
    }
  }, [loaded, setIsLoaded]);

  const isClickReady = readyForClick && counter === 100;

  return {
    handleClick,
    readyForClick: isClickReady,
    hideLabel,
    loaded,
    counter
  };
}