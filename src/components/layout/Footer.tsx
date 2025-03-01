import React from "react";
import { motion } from "framer-motion";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";
import { useTimezone } from "@/hooks/layout/useTimezone";

const Footer = () => {
  const { isLoaded, counter, pageNumber } = useLoadingProgress();
  const milanTime = useTimezone({
    timezone: "Europe/Rome",
    updateInterval: 60000,
    format: {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    },
  });

  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full items-end justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col">
        {isLoaded && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center text-base"
            >
              MILANO - <span className="ml-1">{milanTime}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-sm text-[var(--neutral)]"
            >
              45°27′40.68″ N - 9°09′34.20″ E
            </motion.div>
          </>
        )}
      </div>
      {isLoaded ?
        counter === 0 ?
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-sm font-normal"
          >
            {pageNumber}
          </motion.div>
        : <motion.div
            initial={{ opacity: 0, fontSize: "8rem", lineHeight: "1" }}
            animate={{ opacity: 1, fontSize: "0.875rem", lineHeight: "1.25" }}
            transition={{ duration: 0.5 }}
            className="font-normal"
          >
            {pageNumber}
          </motion.div>

      : counter > 0 && (
          <div className="text-foreground text-9xl font-bold">
            {counter.toString().padStart(3, "0")}%
          </div>
        )
      }
    </div>
  );
};

export default Footer;
