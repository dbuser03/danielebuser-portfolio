"use client";

import { useEffect, useState } from "react";
import { CLICK_LABEL_DELAY_MS } from "@/constants/landing";
import { LABEL_DEFAULT } from "@/constants/cursor";

export function useClickHandler() {
  const [loaded, setLoaded] = useState(false);
  const [readyForClick, setReadyForClick] = useState(false);
  const [hideLabel, setHideLabel] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [labelText, setLabelText] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyForClick(true);
    }, CLICK_LABEL_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      setReadyForClick(false);
      setHideLabel(true);
      setLabelText(LABEL_DEFAULT);
    }
  }, [loaded]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0 && readyForClick && !loaded && loadingComplete) {
        setLoaded(true);
        setReadyForClick(false);
        setLabelText(LABEL_DEFAULT);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [readyForClick, loaded, loadingComplete]);

  const handleClick = () => {
    if (readyForClick && !loaded && loadingComplete) {
      setLoaded(true);
      setReadyForClick(false);
      setLabelText(LABEL_DEFAULT);
    }
  };

  return {
    handleClick,
    readyForClick,
    hideLabel,
    loaded,
    setLoaded,
    loadingComplete,
    setLoadingComplete,
    labelText
  };
}