import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { CursorDotProps } from "@/types/core/cursorType";

const CursorDot: React.FC<CursorDotProps> = ({
  position,
  rotation,
  isClickLabel,
}) => {
  return (
    <motion.div
      className="pointer-events-none fixed z-50 flex items-center justify-center rounded-full bg-[var(--cursor)]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
      initial={{ width: "12px", height: "12px" }}
      animate={{
        width: isClickLabel ? "64px" : "12px",
        height: isClickLabel ? "64px" : "12px",
      }}
      transition={{ duration: 0.3 }}
    >
      {isClickLabel && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2, rotate: rotation }}
          transition={{
            duration: 0.3,
            rotate: {
              type: "spring",
              stiffness: 50,
              damping: 10,
            },
          }}
        >
          <MdOutlineArrowOutward />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CursorDot;
