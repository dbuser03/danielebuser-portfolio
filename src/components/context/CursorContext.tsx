"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { CursorContextType } from "@/types/context/cursorContext";
import { useCursorState } from "@/hooks/context/useCursorState";

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const cursorState = useCursorState();

  return (
    <CursorContext.Provider value={cursorState}>
      {children}
    </CursorContext.Provider>
  );
};

CursorProvider.displayName = "CursorProvider";

export const useCursor = () => useContext(CursorContext) as CursorContextType;

export default CursorProvider;
