import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CursorLabelProps } from "@/types/core/cursorType";
import {
  CLICK_LABEL_OFFSET,
  DEFAULT_LABEL_OFFSET,
  LABEL_CLICK,
  LABEL_LOADING,
  PULSE_ANIMATION_DURATION,
  PULSE_OPACITY_VALUES,
} from "@/constants/cursor";

const CursorLabel: React.FC<CursorLabelProps> = ({
  position,
  label,
  isHoveringTitle,
  isHoveringPageNumber,
}) => {
  const isClickLabel = label === LABEL_CLICK;
  const isLoadingLabel = label === LABEL_LOADING;

  const { labelOffset, labelClasses, animateProps, transitionProps } =
    useMemo(() => {
      const shouldPulse = isClickLabel || isLoadingLabel;
      const labelOffset =
        isClickLabel ? CLICK_LABEL_OFFSET : DEFAULT_LABEL_OFFSET;
      const labelClasses = `pointer-events-none fixed z-50 ${
        isClickLabel ? "ml-8 text-base" : "ml-2 text-xs"
      }`;

      const isHovering = isHoveringTitle || isHoveringPageNumber;
      const animateProps =
        isHovering ?
          { opacity: 0 }
        : { opacity: shouldPulse ? PULSE_OPACITY_VALUES : 1 };

      const transitionProps =
        shouldPulse && !isHovering ?
          { duration: PULSE_ANIMATION_DURATION, repeat: Infinity }
        : {};

      const ariaLabel =
        isClickLabel ? "Click indicator"
        : isLoadingLabel ? "Loading indicator"
        : `Cursor label: ${label}`;

      return {
        shouldPulse,
        labelOffset,
        labelClasses,
        animateProps,
        transitionProps,
        ariaLabel,
      };
    }, [
      label,
      isClickLabel,
      isLoadingLabel,
      isHoveringTitle,
      isHoveringPageNumber,
    ]);

  return (
    <motion.div
      className={labelClasses}
      style={{
        left: `${position.x + labelOffset}px`,
        top: `${position.y}px`,
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      initial={{ opacity: 1 }}
      animate={animateProps}
      transition={transitionProps}
      aria-hidden="true"
      role="presentation"
    >
      {label}
    </motion.div>
  );
};

export default React.memo(CursorLabel);
