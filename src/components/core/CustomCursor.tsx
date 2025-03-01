"use client";

import React from "react";
import { useCursorPosition } from "@/hooks/core/useCursorPosition";
import CursorDot from "@/components/core/cursor/CursorDot";
import CursorLabel from "@/components/core/cursor/CursorLabel";
import { CustomCursorProps } from "@/types/core/cursorType";

const CustomCursor = ({ label }: CustomCursorProps = {}) => {
  const { position, rotation } = useCursorPosition();
  const isClickLabel = label === "( Click )";

  return (
    <>
      <CursorDot
        position={position}
        rotation={rotation}
        isClickLabel={isClickLabel}
      />

      {label && <CursorLabel position={position} label={label} />}
    </>
  );
};

export default CustomCursor;
