import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";
import { FADE_TRANSITION_DURATION } from "@/constants/shared";
import {
  MENU_ITEM_DELAY_INCREMENT,
  SUBTITLE_DELAY,
  TITLE_DELAY,
} from "@/constants/header";

const Header = () => {
  const { isLoaded, menuItems } = useLoadingProgress();

  const renderTitleContent = () => (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: FADE_TRANSITION_DURATION,
          delay: TITLE_DELAY,
        }}
        className="text-xl font-bold"
      >
        DANIELE BUSER
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: FADE_TRANSITION_DURATION,
          delay: SUBTITLE_DELAY,
        }}
        className="text-sm text-[var(--neutral)]"
      >
        Creative Developer
      </motion.div>
    </>
  );

  return (
    <header className="items-top fixed top-0 left-0 z-10 flex w-full justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col">
        {isLoaded ?
          <Link href="/" className="block">
            {renderTitleContent()}
          </Link>
        : renderTitleContent()}
      </div>

      {isLoaded && (
        <nav className="flex space-x-12 text-sm text-[var(--neutral)]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: FADE_TRANSITION_DURATION,
                delay: SUBTITLE_DELAY + index * MENU_ITEM_DELAY_INCREMENT,
              }}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
