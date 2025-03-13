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
    if (label) {
      const charWidth = isClickLabel ? 10 : 7;
      labelWidthRef.current = label.length * charWidth;
    } else {
      labelWidthRef.current = 0;
    }

    const checkElementHover = (
      element: HTMLElement | null,
      cursorInfo: {
        cursorRadius: number,
        x: number,
        y: number,
        labelOffset: number,
        labelWidth: number
      }
    ): boolean => {
      if (!element) return false;

      const { cursorRadius, x, y, labelOffset, labelWidth } = cursorInfo;
      const elementRect = element.getBoundingClientRect();

      const dotLeftEdge = x - cursorRadius;
      const dotRightEdge = x + cursorRadius;
      const dotTopEdge = y - cursorRadius;
      const dotBottomEdge = y + cursorRadius;
      const labelRightEdge = x + labelOffset + labelWidth;

      const isDotHovering =
        dotRightEdge >= elementRect.left &&
        dotLeftEdge <= elementRect.right &&
        dotBottomEdge >= elementRect.top &&
        dotTopEdge <= elementRect.bottom;

      const isLabelHovering =
        !!label &&
        x + labelOffset <= elementRect.right &&
        labelRightEdge >= elementRect.left &&
        y >= elementRect.top &&
        y <= elementRect.bottom;

      return isDotHovering || isLabelHovering;
    };

    const updatePosition = (e: { clientX: number; clientY: number; }) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const cursorSize = isClickLabel ? CURSOR_EXPANDED_SIZE : CURSOR_DEFAULT_SIZE;
      const cursorRadius = cursorSize / 2;
      const labelOffset = isClickLabel ? CLICK_LABEL_OFFSET : DEFAULT_LABEL_OFFSET;
      const labelWidth = labelWidthRef.current;

      const cursorInfo = {
        cursorRadius,
        x: e.clientX,
        y: e.clientY,
        labelOffset,
        labelWidth
      };

      setIsHoveringTitle(checkElementHover(titleRef ?? null, cursorInfo));
      setIsHoveringPageNumber(checkElementHover(pageNumberRef ?? null, cursorInfo));
      setIsHoveringLocation(checkElementHover(locationRef ?? null, cursorInfo));

      if (menuItemsRef && menuItemsRef.length > 0) {
        const isHovering = menuItemsRef.some(menuItem =>
          menuItem && checkElementHover(menuItem, cursorInfo)
        );
        setIsHoveringMenuItem(isHovering);
      }
    };

    const updateRotation = (e: { movementX: number; movementY: number; }) => {
      const { movementX, movementY } = e;

      if (movementX !== 0 || movementY !== 0) {
        const angle = Math.atan2(movementY, movementX) * (180 / Math.PI) + 90;
        setRotation(angle);
      }
    };

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