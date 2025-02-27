"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/store/layout/store";

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = useStore((state) => state.loaded);
  const [counter, setCounter] = useState(0);
  const pageNumber = "001";

  useEffect(() => {
    setIsLoaded(loaded);
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (!isLoaded) {
            return Math.min(prev + 1, 100);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return (
    <div className="fixed bottom-0 left-0 z-10 flex w-full items-end justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col">
        {isLoaded && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm"
            >
              MILANO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-[var(--neutral)]"
            >
              45°27′40.68″ N - 9°09′34.20″ E
            </motion.div>
          </>
        )}
      </div>
      {isLoaded ?
        <motion.div
          initial={{ opacity: 0, fontSize: "8rem", lineHeight: "1" }}
          animate={{ opacity: 1, fontSize: "0.875rem", lineHeight: "1.25" }}
          transition={{ duration: 0.5 }}
          className="font-normal"
        >
          {pageNumber}
        </motion.div>
      : !isLoaded && (
          <div className="text-foreground text-[8rem] leading-[1] font-bold">
            {counter.toString().padStart(3, "0")}%
          </div>
        )
      }
    </div>
  );
};

export default Footer;
