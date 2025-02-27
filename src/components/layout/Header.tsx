"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/store/layout/store";

const Header = () => {
  const menuItems = useStore((state) => state.menuItems);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = useStore((state) => state.loaded);

  useEffect(() => {
    setIsLoaded(loaded);
  }, [loaded]);

  return (
    <div className="items-top fixed top-0 left-0 z-10 flex w-full justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          DANIELE BUSER
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-[var(--neutral)]"
        >
          Creative Developer
        </motion.div>
      </div>
      {isLoaded && (
        <div className="flex space-x-8 text-sm text-[var(--neutral)]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.5 }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
