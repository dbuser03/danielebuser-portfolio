"use client";

import { useEffect, useState, useCallback } from "react";
import { CLICK_LABEL_DELAY_MS } from "@/constants/landing";
import { LABEL_DEFAULT } from "@/constants/cursor";
import { ClickState, ClickHandlerResult } from "@/types/clickHandlerType";

export function useClickHandler(): ClickHandlerResult {
  const [state, setState] = useState<ClickState>({
    loaded: false,
    readyForClick: false,
    hideLabel: false,
    loadingComplete: false,
    labelText: null
  });

  const { loaded, readyForClick, hideLabel, loadingComplete, labelText } = state;

  const activateLoaded = useCallback(() => {
    if (readyForClick && !loaded && loadingComplete) {
      setState(prev => ({
        ...prev,
        loaded: true,
        readyForClick: false,
        hideLabel: true,
        labelText: LABEL_DEFAULT
      }));
    }
  }, [readyForClick, loaded, loadingComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(prev => ({ ...prev, readyForClick: true }));
    }, CLICK_LABEL_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      setState(prev => ({
        ...prev,
        readyForClick: false,
        hideLabel: true,
        labelText: LABEL_DEFAULT
      }));
    }
  }, [loaded]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        activateLoaded();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activateLoaded]);

  const setLoaded = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    setState(prev => ({
      ...prev,
      loaded: typeof value === 'function' ? value(prev.loaded) : value
    }));
  }, []);

  const setLoadingComplete = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    setState(prev => ({
      ...prev,
      loadingComplete: typeof value === 'function' ? value(prev.loadingComplete) : value
    }));
  }, []);

  return {
    handleClick: activateLoaded,
    readyForClick,
    hideLabel,
    loaded,
    setLoaded,
    loadingComplete,
    setLoadingComplete,
    labelText
  };
}