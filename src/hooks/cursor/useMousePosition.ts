import { useEffect, useRef } from "react";
import { useCursor } from "@/components/context/CursorContext";

export const useMouseFollower = () => {
  const { position, setPosition, isFirstLoad } = useCursor();
  const mousePosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!isFirstLoad) {
      const initialMousePosition = { x: position.x, y: position.y };
      mousePosition.current = initialMousePosition;
      setPosition(initialMousePosition);
    }

    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateCursorPosition);
      }
    };

    const updateCursorPosition = () => {
      setPosition(mousePosition.current);
      rafId.current = null;
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [setPosition, isFirstLoad, position.x, position.y]);

  return { position };
};
