import React from "react";
import { motion } from "framer-motion";
import { CursorLabelProps } from "@/types/core/cursorType";

const CursorLabel: React.FC<CursorLabelProps> = ({
  position,
  label,
}) => {
  const isClickLabel = label === "( Click )";
  const isLoadingLabel = label === "( Loading )";
  const shouldPulse = isClickLabel || isLoadingLabel;

  return (
    <motion.div
      className={`pointer-events-none fixed z-50 ${isClickLabel ? "ml-8 text-base" : "ml-2 text-xs"}`}
      style={{
        left: `${position.x + (isClickLabel ? 14 : 10)}px`,
        top: `${position.y}px`,
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      initial={{ opacity: 1 }}
      animate={{
        opacity: shouldPulse ? [0.5, 1, 0.5] : 1,
      }}
      transition={shouldPulse ? { duration: 1, repeat: Infinity } : {}}
    >
      {label}
    </motion.div>
  );
};

export default CursorLabel;
