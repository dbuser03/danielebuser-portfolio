import { useState, useRef, useEffect, useCallback } from "react";
import { CursorDotProps } from "@/types/core/cursorType";
import { calculateVelocity, calculateRotation } from "@/utils/core/cursorUtils";
import { INITIAL_POSITION } from "@/constants/cursor";

export function useCursorPosition(): CursorDotProps {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [rotation, setRotation] = useState(0);

  const prevPositionRef = useRef(INITIAL_POSITION);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastUpdateTimeRef = useRef(0);
  const requestRef = useRef<number | undefined>(undefined);

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    const newPosition = { x: e.clientX, y: e.clientY };
    setPosition(newPosition);

    requestRef.current = requestAnimationFrame(() => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - lastUpdateTimeRef.current;

      if (timeElapsed > 0) {
        const newVelocity = calculateVelocity(
          newPosition,
          prevPositionRef.current,
          velocityRef.current,
          timeElapsed
        );

        velocityRef.current = newVelocity;

        const newRotation = calculateRotation(newVelocity);

        if (newRotation !== null) {
          setRotation(newRotation);
        }
        prevPositionRef.current = newPosition;
        lastUpdateTimeRef.current = currentTime;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateCursorPosition]);

  return { position, rotation };
}