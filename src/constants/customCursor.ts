import { Position } from "@/types/customCursor";

export const DEFAULT_POSITION: Position = { x: 0, y: 0 };

export const CURSOR_STYLES = {
  BASE_CLASS: "fixed rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform",
  SIZE: "w-4 h-4",
  COLOR: "bg-[var(--cursor)]",
  INITIAL_POSITION: {
    top: DEFAULT_POSITION.y,
    left: DEFAULT_POSITION.x,
  },
  getTransform: (isVisible: boolean) => 
    `translate(${DEFAULT_POSITION.x}px, ${DEFAULT_POSITION.y}px) translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
};