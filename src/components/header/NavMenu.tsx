"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MENU_ANIMATION,
  MENU_ITEM_ANIMATION,
} from "@/constants/header/animations";
import { NavigationMenuProps } from "@/types/header/header";
import { MAIN_MENU_ITEMS, STYLES } from "@/constants/header/header";
import { getConditionalAnimation } from "@/utils/conditionalAnimations";

const NavMenu: React.FC<NavigationMenuProps> = React.memo(
  ({ preventAnimation, hidden, currentPath }) => {
    if (hidden) return null;

    return (
      <motion.nav
        className={STYLES.nav}
        {...getConditionalAnimation(!preventAnimation, MENU_ANIMATION)}
        role="navigation"
        aria-label="Main navigation"
      >
        {MAIN_MENU_ITEMS.map((item, index) => {
          const isActive = currentPath === item.href;
          const menuItemClass =
            isActive ? STYLES.activeMenuItem : STYLES.menuItem;

          return (
            <motion.div
              key={item.href}
              {...getConditionalAnimation(
                !preventAnimation,
                MENU_ITEM_ANIMATION(index)
              )}
            >
              <Link href={item.href} className={menuItemClass}>
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>
    );
  }
);

NavMenu.displayName = "NavigationMenu";

export default NavMenu;
