"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/layout/store";
import { CLICK_LABEL_DELAY_MS } from "@/constants/landing";

export function useClickHandler() {
  const loaded = useStore((state) => state.loaded);
  const setLoaded = useStore((state) => state.setLoaded);

  const [readyForClick, setReadyForClick] = useState(false);
  const [hideLabel, setHideLabel] = useState(false);

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
    }
  }, [loaded]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0 && readyForClick && !loaded) {
        setLoaded(true);
        setReadyForClick(false);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [readyForClick, loaded, setLoaded]);

  const handleClick = () => {
    if (readyForClick && !loaded) {
      setLoaded(true);
      setReadyForClick(false);
    }
  };

  return {
    handleClick,
    readyForClick,
    hideLabel
  };
}