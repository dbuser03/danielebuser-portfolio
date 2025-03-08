import React, { useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useLoadingProgress } from "@/hooks/layout/useLoadingProgress";
import { FADE_TRANSITION_DURATION } from "@/constants/shared";
import {
  MENU_ITEM_DELAY_INCREMENT,
  SUBTITLE_DELAY,
  TITLE_DELAY,
  DEFAULT_MENU_ITEMS,
} from "@/constants/header";
import { useTitleStore } from "@/store/layout/titleStore";
import { MenuItem } from "@/types/layout/menuTypes";
import { LoadedComponentProps } from "@/types/layout/loadedComponentTypes";

const Header = ({ loaded = false }: LoadedComponentProps) => {
  const { isLoaded } = useLoadingProgress();
  const titleRef = useRef(null);
  const titleContainerRef = useRef(null);
  const setTitleRef = useTitleStore((state) => state.setTitleRef);

  const showContent = isLoaded || loaded;
  const shouldAnimateTitle = !loaded;

  useEffect(() => {
    if (titleContainerRef.current) {
      setTitleRef(titleContainerRef.current);
    }
  }, [titleContainerRef, setTitleRef]);

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

  const renderTitleContent = () => (
    <div ref={titleRef}>
      <motion.div
        variants={titleVariants}
        initial={shouldAnimateTitle ? "hidden" : "immediate"}
        animate="visible"
        transition={
          shouldAnimateTitle ?
            {
              duration: FADE_TRANSITION_DURATION,
              delay: TITLE_DELAY,
            }
          : { duration: 0 }
        }
        className="text-xl font-bold"
      >
        DANIELE BUSER
      </motion.div>
      <motion.div
        variants={subtitleVariants}
        initial={shouldAnimateTitle ? "hidden" : "immediate"}
        animate="visible"
        transition={
          shouldAnimateTitle ?
            {
              duration: FADE_TRANSITION_DURATION,
              delay: SUBTITLE_DELAY,
            }
          : { duration: 0 }
        }
        className="text-sm text-[var(--neutral)]"
      >
        Creative Developer
      </motion.div>
    </div>
  );

  return (
    <header className="items-top fixed top-0 left-0 z-10 flex w-full justify-between px-8 py-4 mix-blend-difference">
      <div className="flex-col" ref={titleContainerRef}>
        {showContent ?
          <Link href="/" className="block">
            {renderTitleContent()}
          </Link>
        : renderTitleContent()}
      </div>

      {showContent && (
        <nav className="flex space-x-12 text-sm text-[var(--neutral)]">
          {DEFAULT_MENU_ITEMS.map((item: MenuItem, index: number) => (
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
