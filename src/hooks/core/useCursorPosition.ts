import { useState, useRef, useEffect, useCallback } from "react";

export interface CursorPosition {
  position: { x: number, y: number };
  rotation: number;
}

const INITIAL_POSITION = { x: -32, y: -32 };
const VELOCITY_SMOOTHING = 0.8;
const MOVEMENT_THRESHOLD = 8;
const ROTATION_OFFSET = 45;

export function useCursorPosition(): CursorPosition {
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
        const dx = newPosition.x - prevPositionRef.current.x;
        const dy = newPosition.y - prevPositionRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > MOVEMENT_THRESHOLD) {
          const velocityX = dx / timeElapsed;
          const velocityY = dy / timeElapsed;

          velocityRef.current = {
            x: VELOCITY_SMOOTHING * velocityX + (1 - VELOCITY_SMOOTHING) * velocityRef.current.x,
            y: VELOCITY_SMOOTHING * velocityY + (1 - VELOCITY_SMOOTHING) * velocityRef.current.y
          };

          const { x: vx, y: vy } = velocityRef.current;

          if (Math.abs(vx) > 0.01 || Math.abs(vy) > 0.01) {
            const angle = Math.atan2(vy, vx) * (180 / Math.PI) + ROTATION_OFFSET;
            setRotation(angle);
          }

          prevPositionRef.current = newPosition;
          lastUpdateTimeRef.current = currentTime;
        }
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