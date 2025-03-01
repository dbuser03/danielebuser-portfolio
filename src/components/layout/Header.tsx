import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";

const Header = () => {
  const { isLoaded, menuItems } = useLoadingProgress();

  return (
    <div className="items-top fixed top-0 left-0 z-10 flex w-full justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          {isLoaded ?
            <Link href="/">DANIELE BUSER</Link>
          : "DANIELE BUSER"}
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
        <div className="flex space-x-12 text-sm text-[var(--neutral)]">
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
