import React from "react";
import { motion } from "framer-motion";
import { MdArrowUpward } from "react-icons/md";
import { CursorDotProps } from "@/types/core/cursorType";
import {
  CURSOR_DEFAULT_SIZE,
  CURSOR_EXPANDED_SIZE,
  TRANSITION_DURATION,
  LABEL_DEFAULT,
} from "@/constants/cursor";
import { SPRING_CONFIG } from "@/constants/shared";

const CursorDot: React.FC<CursorDotProps> = ({
  position,
  rotation,
  isClickLabel,
  isHoveringTitle = false,
  label,
}) => {
  const cursorSize =
    isClickLabel && isHoveringTitle ? CURSOR_EXPANDED_SIZE / 1.6
    : isClickLabel ? CURSOR_EXPANDED_SIZE
    : label === LABEL_DEFAULT && isHoveringTitle ?
      CURSOR_DEFAULT_SIZE * (10 / 3)
    : CURSOR_DEFAULT_SIZE;

  const cursorAnimation = {
    width: cursorSize,
    height: cursorSize,
    backgroundColor: isHoveringTitle ? "var(--foreground)" : "var(--cursor)",
  };

  const arrowAnimation = {
    scale: 2,
    rotate: rotation,
    opacity: isHoveringTitle ? 0 : 1,
  };

  return (
    <motion.div
      className="pointer-events-none fixed z-50 flex items-center justify-center rounded-full"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
      initial={{
        width: CURSOR_DEFAULT_SIZE,
        height: CURSOR_DEFAULT_SIZE,
        backgroundColor: "var(--cursor)",
      }}
      animate={cursorAnimation}
      transition={{
        duration: TRANSITION_DURATION,
        backgroundColor: { duration: TRANSITION_DURATION },
        width: { duration: TRANSITION_DURATION },
        height: { duration: TRANSITION_DURATION },
      }}
    >
      {isClickLabel && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={arrowAnimation}
          transition={{
            duration: TRANSITION_DURATION,
            rotate: SPRING_CONFIG,
            opacity: { duration: TRANSITION_DURATION },
          }}
        >
          <MdArrowUpward />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CursorDot;
