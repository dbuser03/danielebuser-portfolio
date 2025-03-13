import React, { useRef, useEffect } from "react";
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
import { useFooterStore } from "@/store/layout/footerStore";

const Footer = ({ loaded = false }: LoadedComponentProps) => {
  const { counter, pageNumber } = useLoadingProgress();
  const milanTime = useTimezone({
    timezone: TIMEZONE,
    updateInterval: 60000,
    format: TIME_FORMAT,
  });

  const pageNumberRef = useRef(null);
  const setPageNumberRef = useFooterStore((state) => state.setPageNumberRef);

  const locationRef = useRef(null);
  const setLocationRef = useFooterStore((state) => state.setLocationRef);

  const showContent = loaded;

  useEffect(() => {
    if (pageNumberRef.current) {
      setPageNumberRef(pageNumberRef.current);
    }
  }, [pageNumberRef, setPageNumberRef]);

  useEffect(() => {
    if (locationRef.current) {
      setLocationRef(locationRef.current);
    }
  }, [locationRef, setLocationRef]);

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
          className="text-[0.75rem] leading-[1.333] font-normal md:text-sm"
        >
          {pageNumber}
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: FADE_TRANSITION_DURATION }}
        className="page-number-animation text-[0.75rem] leading-[1.333] font-normal md:text-[0.875rem] md:leading-[1.25]"
      >
        {pageNumber}
      </motion.div>
    );
  };

  const renderLoadingCounter = () => {
    if (showContent || counter <= 0) return null;

    return (
      <div className="text-foreground text-5xl font-bold md:text-7xl lg:text-8xl xl:text-9xl">
        {counter.toString().padStart(3, "0")}%
      </div>
    );
  };

  return (
    <footer className="fixed bottom-0 left-0 z-10 flex w-full items-end justify-between px-4 py-4 mix-blend-difference sm:px-8">
      <div className="flex-col" ref={locationRef}>
        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: FADE_TRANSITION_DURATION,
                delay: FIRST_ELEMENT_DELAY,
              }}
              className="flex items-center text-xs md:text-sm"
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
              className="text-xs text-[var(--neutral)] md:text-sm"
            >
              {COORDINATES}
            </motion.div>
          </>
        )}
      </div>

      <div ref={pageNumberRef}>
        {renderPageNumber()}
        {renderLoadingCounter()}
      </div>
    </footer>
  );
};

export default Footer;
