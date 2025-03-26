"use client";

import React from "react";
import { CURSOR_STYLES } from "@/constants/customCursor";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { CustomCursorProps } from "@/types/customCursor";

const CustomCursor: React.FC<CustomCursorProps> = () => {
  const { cursorRef, isVisible } = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className={`${CURSOR_STYLES.BASE_CLASS} ${CURSOR_STYLES.SIZE} ${CURSOR_STYLES.COLOR}`}
      style={{
        ...CURSOR_STYLES.INITIAL_POSITION,
        transform: CURSOR_STYLES.getTransform(isVisible),
      }}
      aria-hidden="true"
    />
  );
};

CustomCursor.displayName = "CustomCursor";

export default React.memo(CustomCursor);
