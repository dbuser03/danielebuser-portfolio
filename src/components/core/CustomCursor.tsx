"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

interface CustomCursorProps {
  label?: string;
}

const CustomCursor = ({ label }: CustomCursorProps = {}) => {
  const [position, setPosition] = useState({ x: -32, y: -32 });
  const [rotation, setRotation] = useState(0);
  const prevPositionRef = useRef({ x: -32, y: -32 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastUpdateTimeRef = useRef(0);
  const isClickLabel = label === "( Click )";
  const isLoadingLabel = label === "( Loading )";
  const shouldPulse = isClickLabel || isLoadingLabel;

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      const newPosition = { x: e.clientX, y: e.clientY };

      const timeElapsed = currentTime - lastUpdateTimeRef.current;

      if (timeElapsed > 0) {
        const dx = newPosition.x - prevPositionRef.current.x;
        const dy = newPosition.y - prevPositionRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 8) {
          const velocityX = dx / timeElapsed;
          const velocityY = dy / timeElapsed;

          velocityRef.current.x = 0.8 * velocityX + 0.2 * velocityRef.current.x;
          velocityRef.current.y = 0.8 * velocityY + 0.2 * velocityRef.current.y;

          if (
            Math.abs(velocityRef.current.x) > 0.01 ||
            Math.abs(velocityRef.current.y) > 0.01
          ) {
            const angle =
              Math.atan2(velocityRef.current.y, velocityRef.current.x) *
                (180 / Math.PI) +
              45;
            setRotation(angle);
          }

          prevPositionRef.current = newPosition;
          lastUpdateTimeRef.current = currentTime;
        }
      }

      setPosition(newPosition);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
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

      {label && (
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
      )}
    </>
  );
};

export default CustomCursor;
