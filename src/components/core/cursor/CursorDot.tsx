import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CursorDotProps } from "@/types/core/cursorType";
import {
  CURSOR_DEFAULT_SIZE,
  CURSOR_EXPANDED_SIZE,
  TRANSITION_DURATION,
} from "@/constants/cursor";
import { SPRING_CONFIG } from "@/constants/shared";

const CursorDot: React.FC<CursorDotProps> = ({
  position,
  rotation,
  isClickLabel,
}) => {
  const cursorSize = isClickLabel ? CURSOR_EXPANDED_SIZE : CURSOR_DEFAULT_SIZE;

  const cursorAnimation = {
    width: cursorSize,
    height: cursorSize,
  };

  const arrowAnimation = {
    scale: 2,
    rotate: rotation,
  };

  return (
    <motion.div
      className="pointer-events-none fixed z-50 flex items-center justify-center rounded-full bg-[var(--cursor)]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
      initial={{ width: CURSOR_DEFAULT_SIZE, height: CURSOR_DEFAULT_SIZE }}
      animate={cursorAnimation}
      transition={{ duration: TRANSITION_DURATION }}
    >
      {isClickLabel && (
        <motion.div
          initial={{ scale: 1 }}
          animate={arrowAnimation}
          transition={{
            duration: TRANSITION_DURATION,
            rotate: SPRING_CONFIG,
          }}
        >
          <MdOutlineArrowOutward />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CursorDot;
