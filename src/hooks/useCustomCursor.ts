import { useEffect, useRef, useCallback, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef<Position>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%) scale(${isVisible ? 1 : 0})`;
    }
    rafRef.current = null;
  }, [isVisible]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateCursorPosition);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible, updateCursorPosition]);

  return {
    cursorRef,
    isVisible
  };
};