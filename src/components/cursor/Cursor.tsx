import React from "react";
import { motion } from "framer-motion";
import { useMouseFollower } from "@/hooks/cursor/useMousePosition";

const Cursor: React.FC = () => {
  const { position } = useMouseFollower();

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-[var(--cursor)]"
      animate={{ x: position.x - 8, y: position.y - 8 }}
      initial={{ x: position.x - 8, y: position.y - 8 }}
      transition={{
        duration: 0,
        ease: "linear",
      }}
    />
  );
};

Cursor.displayName = "Cursor";

export default Cursor;
