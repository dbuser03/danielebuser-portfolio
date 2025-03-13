"use client";

import { useEffect, useMemo } from "react";
import { useClickHandler } from "@/hooks/useClickHandler";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";
import { useDeviceDetection } from "@/hooks/core/useDeviceDetection";

export function useHomePageLogic() {
  const {
    handleClick,
    readyForClick,
    hideLabel,
    loaded,
    setLoadingComplete
  } = useClickHandler();

  const { counter, setIsLoaded } = useLoadingProgress();
  const { isTouchDevice } = useDeviceDetection();

  const isLoadingComplete = useMemo(() => counter === 100, [counter]);

  const isClickReady = useMemo(() =>
    readyForClick && isLoadingComplete,
    [readyForClick, isLoadingComplete]
  );

  useEffect(() => {
    if (isLoadingComplete && !loaded) {
      setLoadingComplete(true);
    }
  }, [isLoadingComplete, loaded, setLoadingComplete]);

  useEffect(() => {
    if (loaded) {
      setIsLoaded(true);
    }
  }, [loaded, setIsLoaded]);

  useEffect(() => {
    const shouldAutoClick = readyForClick && isLoadingComplete && !loaded && isTouchDevice;

    if (shouldAutoClick) {
      handleClick();
    }
  }, [readyForClick, isLoadingComplete, loaded, isTouchDevice, handleClick]);

  return {
    handleClick,
    readyForClick: isClickReady,
    hideLabel,
    loaded,
    counter
  };
}