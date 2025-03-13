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
  isHoveringPageNumber = false,
  isHoveringLocation = false,
  isHoveringMenuItem = false,
  label,
}) => {
  const isHoveringInteractive: boolean =
    isHoveringTitle ||
    isHoveringPageNumber ||
    isHoveringLocation ||
    isHoveringMenuItem;

  const getCursorSize = (): number => {
    if (isClickLabel && isHoveringInteractive) {
      return CURSOR_EXPANDED_SIZE / 1.6;
    }
    if (isClickLabel) {
      return CURSOR_EXPANDED_SIZE;
    }
    if ((label === LABEL_DEFAULT && isHoveringTitle) || isHoveringMenuItem) {
      return CURSOR_DEFAULT_SIZE * (10 / 3);
    }
    return CURSOR_DEFAULT_SIZE;
  };

  const cursorSize = getCursorSize();

  const transitionConfig = {
    duration: TRANSITION_DURATION,
  };

  const cursorAnimation = {
    width: cursorSize,
    height: cursorSize,
    backgroundColor:
      isHoveringInteractive ? "var(--foreground)" : "var(--cursor)",
  };

  const arrowAnimation = {
    scale: 2,
    rotate: rotation,
    opacity: isHoveringInteractive ? 0 : 1,
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
        ...transitionConfig,
        backgroundColor: transitionConfig,
        width: transitionConfig,
        height: transitionConfig,
      }}
    >
      {isClickLabel && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={arrowAnimation}
          transition={{
            ...transitionConfig,
            rotate: SPRING_CONFIG,
            opacity: transitionConfig,
          }}
        >
          <MdArrowUpward />
        </motion.div>
      )}
    </motion.div>
  );
};

export default React.memo(CursorDot);
