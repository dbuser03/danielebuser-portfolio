"use client";

import { ReactNode, useEffect, useState, createContext, useContext, useRef } from "react";
import Lenis from "lenis";

const SmoothControllerContext = createContext<Lenis | null>(null);

export const useSmoothScroller = () => {
   return useContext(SmoothControllerContext);
};

interface ScrollContextProps {
  children: ReactNode;
}

export default function ScrollContext({ children }: ScrollContextProps) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();

    function raf(time: number) {
      scroller.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);
    setLenis(scroller);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (scroller) {
        scroller.destroy();
      }
    };
  }, []);

  return (
    <SmoothControllerContext.Provider value={lenisRef}>
      {children}
    </SmoothControllerContext.Provider>
  );
}