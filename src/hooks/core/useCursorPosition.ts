import { useState, useEffect, useRef } from "react";
import { useTitleStore } from "@/store/layout/titleStore";
import {
  CURSOR_DEFAULT_SIZE,
  CURSOR_EXPANDED_SIZE,
  DEFAULT_LABEL_OFFSET,
  CLICK_LABEL_OFFSET,
  LABEL_CLICK,
  INITIAL_POSITION
} from "@/constants/cursor";

export const useCursorPosition = (label?: string) => {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [rotation, setRotation] = useState(0);
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);
  const titleRef = useTitleStore((state) => state.titleRef);

  const labelWidthRef = useRef<number>(0);
  const isClickLabel = label === LABEL_CLICK;

  useEffect(() => {
    const updatePosition = (e: { clientX: number; clientY: number; }) => {
      setPosition({ x: e.clientX, y: e.clientY });

      if (titleRef) {
        const titleRect = titleRef.getBoundingClientRect();

        const cursorSize = isClickLabel ? CURSOR_EXPANDED_SIZE : CURSOR_DEFAULT_SIZE;
        const cursorRadius = cursorSize / 2;

        const labelOffset = isClickLabel ? CLICK_LABEL_OFFSET : DEFAULT_LABEL_OFFSET;
        const labelWidth = labelWidthRef.current || 0;

        const dotLeftEdge = e.clientX - cursorRadius;
        const dotRightEdge = e.clientX + cursorRadius;
        const dotTopEdge = e.clientY - cursorRadius;
        const dotBottomEdge = e.clientY + cursorRadius;

        const labelRightEdge = e.clientX + labelOffset + labelWidth;

        const isDotHovering =
          dotRightEdge >= titleRect.left &&
          dotLeftEdge <= titleRect.right &&
          dotBottomEdge >= titleRect.top &&
          dotTopEdge <= titleRect.bottom;

        const isLabelHovering =
          !!label &&
          e.clientX + labelOffset <= titleRect.right &&
          labelRightEdge >= titleRect.left &&
          e.clientY >= titleRect.top &&
          e.clientY <= titleRect.bottom;

        setIsHoveringTitle(isDotHovering || isLabelHovering);
      }
    };

    const updateRotation = (e: { movementX: number; movementY: number; }) => {
      const movementX = e.movementX;
      const movementY = e.movementY;

      if (movementX !== 0 || movementY !== 0) {
        const angle = Math.atan2(movementY, movementX) * (180 / Math.PI) + 90;
        setRotation(angle);
      }
    };

    if (label) {
      const charWidth = isClickLabel ? 10 : 7;
      labelWidthRef.current = label.length * charWidth;
    } else {
      labelWidthRef.current = 0;
    }

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateRotation);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateRotation);
    };
  }, [titleRef, label, isClickLabel]);

  return { position, rotation, isHoveringTitle };
};