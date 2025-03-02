import { COLUMN_BREAKPOINTS } from "@/constants/landing";
import { useState, useEffect } from "react";

export const useColumnCount = () => {
  const [columnCount, setColumnCount] = useState(COLUMN_BREAKPOINTS.default);

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setColumnCount(COLUMN_BREAKPOINTS.xl);
      } else if (width >= 1024) {
        setColumnCount(COLUMN_BREAKPOINTS.lg);
      } else if (width >= 768) {
        setColumnCount(COLUMN_BREAKPOINTS.md);
      } else if (width >= 640) {
        setColumnCount(COLUMN_BREAKPOINTS.sm);
      } else if (width < 640) {
        setColumnCount(COLUMN_BREAKPOINTS.xs);
      }
      else {
        setColumnCount(COLUMN_BREAKPOINTS.default);
      }
    };

    updateColumnCount();

    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  return columnCount;
};