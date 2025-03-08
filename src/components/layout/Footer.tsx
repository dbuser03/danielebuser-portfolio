import React from "react";
import { motion } from "framer-motion";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";
import { useTimezone } from "@/hooks/layout/useTimezone";
import {
  CITY_NAME,
  COORDINATES,
  FIRST_ELEMENT_DELAY,
  SECOND_ELEMENT_DELAY,
  TIME_FORMAT,
  TIMEZONE,
} from "@/constants/footer";
import { FADE_TRANSITION_DURATION } from "@/constants/shared";
import { LoadedComponentProps } from "@/types/layout/loadedComponentTypes";

const Footer = ({ loaded = false }: LoadedComponentProps) => {
  const { isLoaded, counter, pageNumber } = useLoadingProgress();
  const milanTime = useTimezone({
    timezone: TIMEZONE,
    updateInterval: 60000,
    format: TIME_FORMAT,
  });

  const showContent = isLoaded || loaded;

  const renderPageNumber = () => {
    if (!showContent) return null;

    if (counter === 0) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: FADE_TRANSITION_DURATION,
            delay: SECOND_ELEMENT_DELAY,
          }}
          className="text-sm font-normal"
        >
          {pageNumber}
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, fontSize: "8rem", lineHeight: "1" }}
        animate={{ opacity: 1, fontSize: "0.875rem", lineHeight: "1.25" }}
        transition={{ duration: FADE_TRANSITION_DURATION }}
        className="font-normal"
      >
        {pageNumber}
      </motion.div>
    );
  };

  const renderLoadingCounter = () => {
    if (showContent || counter <= 0) return null;

    return (
      <div className="text-foreground text-9xl font-bold">
        {counter.toString().padStart(3, "0")}%
      </div>
    );
  };

  return (
    <footer className="fixed bottom-0 left-0 z-10 flex w-full items-end justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col">
        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: FADE_TRANSITION_DURATION,
                delay: FIRST_ELEMENT_DELAY,
              }}
              className="flex items-center text-base"
            >
              {CITY_NAME} - <span className="ml-1">{milanTime}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: FADE_TRANSITION_DURATION,
                delay: SECOND_ELEMENT_DELAY,
              }}
              className="text-sm text-[var(--neutral)]"
            >
              {COORDINATES}
            </motion.div>
          </>
        )}
      </div>

      {renderPageNumber()}
      {renderLoadingCounter()}
    </footer>
  );
};

export default Footer;
