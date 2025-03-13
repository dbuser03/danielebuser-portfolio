import { useState, useEffect, useRef } from "react";
import { useHeaderStore } from "@/store/layout/headerStore";
import { useFooterStore } from "@/store/layout/footerStore";
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
  const [isHoveringPageNumber, setIsHoveringPageNumber] = useState(false);
  const [isHoveringLocation, setIsHoveringLocation] = useState(false);
  const [isHoveringMenuItem, setIsHoveringMenuItem] = useState(false);
  const titleRef = useHeaderStore((state) => state.titleRef);
  const pageNumberRef = useFooterStore((state) => state.pageNumberRef);
  const locationRef = useFooterStore((state) => state.locationRef);
  const menuItemsRef = useHeaderStore((state) => state.menuItemsRef);

  const labelWidthRef = useRef<number>(0);
  const isClickLabel = label === LABEL_CLICK;

  useEffect(() => {
    const updatePosition = (e: { clientX: number; clientY: number; }) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const cursorSize = isClickLabel ? CURSOR_EXPANDED_SIZE : CURSOR_DEFAULT_SIZE;
      const cursorRadius = cursorSize / 2;

      const labelOffset = isClickLabel ? CLICK_LABEL_OFFSET : DEFAULT_LABEL_OFFSET;
      const labelWidth = labelWidthRef.current || 0;

      const dotLeftEdge = e.clientX - cursorRadius;
      const dotRightEdge = e.clientX + cursorRadius;
      const dotTopEdge = e.clientY - cursorRadius;
      const dotBottomEdge = e.clientY + cursorRadius;

      const labelRightEdge = e.clientX + labelOffset + labelWidth;

      if (titleRef) {
        const titleRect = titleRef.getBoundingClientRect();

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

      if (pageNumberRef) {
        const pageNumberRect = pageNumberRef.getBoundingClientRect();

        const isDotHovering =
          dotRightEdge >= pageNumberRect.left &&
          dotLeftEdge <= pageNumberRect.right &&
          dotBottomEdge >= pageNumberRect.top &&
          dotTopEdge <= pageNumberRect.bottom;

        const isLabelHovering =
          !!label &&
          e.clientX + labelOffset <= pageNumberRect.right &&
          labelRightEdge >= pageNumberRect.left &&
          e.clientY >= pageNumberRect.top &&
          e.clientY <= pageNumberRect.bottom;

        setIsHoveringPageNumber(isDotHovering || isLabelHovering);
      }

      if (locationRef) {
        const locationRect = locationRef.getBoundingClientRect();

        const isDotHovering =
          dotRightEdge >= locationRect.left &&
          dotLeftEdge <= locationRect.right &&
          dotBottomEdge >= locationRect.top &&
          dotTopEdge <= locationRect.bottom;

        const isLabelHovering =
          !!label &&
          e.clientX + labelOffset <= locationRect.right &&
          labelRightEdge >= locationRect.left &&
          e.clientY >= locationRect.top &&
          e.clientY <= locationRect.bottom;

        setIsHoveringLocation(isDotHovering || isLabelHovering);
      }

      if (menuItemsRef && menuItemsRef.length > 0) {
        let isHovering = false;

        for (const menuItemRef of menuItemsRef) {
          if (menuItemRef) {
            const menuItemRect = menuItemRef.getBoundingClientRect();

            const isDotHovering =
              dotRightEdge >= menuItemRect.left &&
              dotLeftEdge <= menuItemRect.right &&
              dotBottomEdge >= menuItemRect.top &&
              dotTopEdge <= menuItemRect.bottom;

            const isLabelHovering =
              !!label &&
              e.clientX + labelOffset <= menuItemRect.right &&
              labelRightEdge >= menuItemRect.left &&
              e.clientY >= menuItemRect.top &&
              e.clientY <= menuItemRect.bottom;

            if (isDotHovering || isLabelHovering) {
              isHovering = true;
              break;
            }
          }
        }

        setIsHoveringMenuItem(isHovering);
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
  }, [titleRef, pageNumberRef, locationRef, menuItemsRef, label, isClickLabel]);

  return {
    position,
    rotation,
    isHoveringTitle,
    isHoveringPageNumber,
    isHoveringLocation,
    isHoveringMenuItem
  };
};