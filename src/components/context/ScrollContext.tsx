"use client";

import { createContext, useContext } from "react";
import Lenis from "lenis";
import { ScrollContextProps } from "@/types/context/scrollContext";
import { useLenisScroller } from "@/hooks/context/useLenisScroller";

const SmoothControllerContext = createContext<Lenis | null>(null);

export const ScrollProvider = ({ children }: ScrollContextProps) => {
  const lenis = useLenisScroller();

  return (
    <SmoothControllerContext.Provider value={lenis}>
      {children}
    </SmoothControllerContext.Provider>
  );
};

ScrollProvider.displayName = "ScrollProvider";

export const useSmoothScroller = () => useContext(SmoothControllerContext);

export default ScrollProvider;
