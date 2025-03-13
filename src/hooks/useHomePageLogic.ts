"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const isReadyToAutoClick = readyForClick && counter === 100 && !loaded && isTouchDevice;
    if (isReadyToAutoClick) {
      handleClick();
    }
  }, [readyForClick, counter, loaded, isTouchDevice, handleClick]);

  const isClickReady = readyForClick && counter === 100;

  return {
    handleClick,
    readyForClick: isClickReady,
    hideLabel,
    loaded,
    counter
  };
}