"use client";

import React from "react";
import { useCursorPosition } from "@/hooks/core/useCursorPosition";
import CursorDot from "@/components/core/cursor/CursorDot";
import CursorLabel from "@/components/core/cursor/CursorLabel";
import { CustomCursorProps } from "@/types/core/cursorType";
import { LABEL_CLICK } from "@/constants/cursor";

const CustomCursor = ({ label }: CustomCursorProps = {}) => {
  const {
    position,
    rotation,
    isHoveringTitle,
    isHoveringPageNumber,
    isHoveringLocation,
    isHoveringMenuItem,
  } = useCursorPosition(label);
  const isClickLabel = label === LABEL_CLICK;

  return (
    <>
      <CursorDot
        position={position}
        rotation={rotation}
        isClickLabel={isClickLabel}
        isHoveringTitle={isHoveringTitle}
        isHoveringPageNumber={isHoveringPageNumber}
        isHoveringLocation={isHoveringLocation}
        isHoveringMenuItem={isHoveringMenuItem}
        label={label}
      />

      {label && (
        <CursorLabel
          position={position}
          label={label}
          isHoveringTitle={isHoveringTitle}
          isHoveringPageNumber={isHoveringPageNumber}
        />
      )}
    </>
  );
};

export default CustomCursor;
