"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/layout/store";

export function useClickHandler() {
  const loaded = useStore((state) => state.loaded);
  const setLoaded = useStore((state) => state.setLoaded);
  const [readyForClick, setReadyForClick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyForClick(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      setReadyForClick(false);
    }
  }, [loaded]);

  const handleClick = () => {
    if (readyForClick && !loaded) {
      setLoaded(true);
      setReadyForClick(false);
    }
  };

  const cursorStyle = readyForClick && !loaded ? "pointer" : "default";

  return {
    handleClick,
    cursorStyle,
  };
}