import React, { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FADE_TRANSITION_DURATION } from "@/constants/shared";
import {
  MENU_ITEM_DELAY_INCREMENT,
  SUBTITLE_DELAY,
  TITLE_DELAY,
  DEFAULT_MENU_ITEMS,
} from "@/constants/header";
import { useHeaderStore } from "@/store/layout/headerStore";
import { MenuItem } from "@/types/layout/menuTypes";
import { LoadedComponentProps } from "@/types/layout/loadedComponentTypes";

const Header: React.FC<LoadedComponentProps> = ({ loaded = false }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const setTitleRef = useHeaderStore((state) => state.setTitleRef);

  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const setMenuItemsRef = useHeaderStore((state) => state.setMenuItemsRef);

  const showContent = loaded;

  useEffect(() => {
    if (titleRef.current) {
      setTitleRef(titleRef.current);
    }
  }, [titleRef, setTitleRef]);

  useEffect(() => {
    const validRefs = menuItemsRef.current.filter(Boolean);
    if (validRefs.length > 0) {
      setMenuItemsRef(validRefs as HTMLDivElement[]);
    }
  }, [showContent, setMenuItemsRef]);

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    immediate: { opacity: 1, y: 0, transition: { duration: 0 } },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
    immediate: { opacity: 1, y: 0, transition: { duration: 0 } },
  };

  const getTitleTransition = () => {
    return loaded ?
        { duration: 0 }
      : { duration: FADE_TRANSITION_DURATION, delay: TITLE_DELAY };
  };

  const getSubtitleTransition = () => {
    return loaded ?
        { duration: 0 }
      : { duration: FADE_TRANSITION_DURATION, delay: SUBTITLE_DELAY };
  };

  const renderTitleContent = () => (
    <>
      <motion.div
        variants={titleVariants}
        initial={loaded ? "immediate" : "hidden"}
        animate="visible"
        transition={getTitleTransition()}
        className="text-base font-bold md:text-xl"
      >
        DANIELE BUSER
      </motion.div>
      <motion.div
        variants={subtitleVariants}
        initial={loaded ? "immediate" : "hidden"}
        animate="visible"
        transition={getSubtitleTransition()}
        className="text-xs text-[var(--neutral)] md:text-sm"
      >
        Creative Developer
      </motion.div>
    </>
  );

  return (
    <header className="items-top fixed top-0 left-0 z-10 flex w-full justify-between px-4 py-4 mix-blend-difference sm:px-8">
      <div className="flex-col" ref={titleRef}>
        {showContent ?
          <Link href="/" className="block">
            {renderTitleContent()}
          </Link>
        : renderTitleContent()}
      </div>

      {showContent && (
        <nav className="flex h-min flex-wrap items-start space-x-4 text-xs text-[var(--neutral)] md:space-x-12 md:text-sm">
          {DEFAULT_MENU_ITEMS.map((item: MenuItem, index: number) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: FADE_TRANSITION_DURATION,
                delay: SUBTITLE_DELAY + index * MENU_ITEM_DELAY_INCREMENT,
              }}
              ref={(el) => {
                menuItemsRef.current[index] = el;
              }}
            >
              <Link
                href={item.href}
                className="transition-colors duration-200 hover:text-[var(--foreground)]"
                aria-label={`Naviga a ${item.label}`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
