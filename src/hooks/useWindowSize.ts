import { useMemo, useState, useEffect, useCallback } from 'react';
import { BREAKPOINTS, COLUMNS_BY_BREAKPOINT } from "@/constants/columnGrid";
import { Breakpoint } from "@/types/breakpoint";

function useWindowResizeListener<T>(handler: () => T, initialValue: T): T {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue(handler());
    
    let timeoutId: number | null = null;
    
    const handleResize = () => {
      if (timeoutId === null) {
        timeoutId = window.setTimeout(() => {
          setValue(handler());
          timeoutId = null;
        }, 100);
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [handler]);

  return value;
}

export const useBreakpoint = (): Breakpoint => {
  const getBreakpoint = useCallback((width: number): Breakpoint => {
    if (width >= BREAKPOINTS.xl) return "xl";
    if (width >= BREAKPOINTS.lg) return "lg";
    if (width >= BREAKPOINTS.md) return "md";
    if (width >= BREAKPOINTS.sm) return "sm";
    return "default";
  }, []);

  const getCurrentBreakpoint = useCallback(() => {
    return getBreakpoint(window.innerWidth);
  }, [getBreakpoint]);

  return useWindowResizeListener(
    getCurrentBreakpoint,
    typeof window !== 'undefined' ? getCurrentBreakpoint() : "default"
  );
};

export function useColumnCount() {
  const breakpoint = useBreakpoint();
  
  return useMemo(() => {
    return COLUMNS_BY_BREAKPOINT[breakpoint];
  }, [breakpoint]);
}

export function useWindowSize() {
  const getSize = useCallback(() => ({
    width: window.innerWidth,
    height: window.innerHeight
  }), []);

  return useWindowResizeListener(
    getSize,
    typeof window !== 'undefined' 
      ? getSize()
      : { width: 0, height: 0 }
  );
}

export function useColumnGrid() {
  const columns = useColumnCount();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  return {
    columns,
    initialized
  };
}

