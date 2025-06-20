"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  NAME_ANIMATION,
  ROLE_ANIMATION,
  MENU_ANIMATION,
  MENU_ITEM_ANIMATION,
} from "@/constants/header/animations";
import {
  AuthorInfoProps,
  HeaderProps,
  NavigationMenuProps,
} from "@/types/header/header";
import {
  AUTHOR_NAME,
  AUTHOR_ROLE,
  MAIN_MENU_ITEMS,
  STYLES,
} from "@/constants/header/header";
import { getConditionalAnimation } from "@/utils/conditionalAnimations";

const AuthorInfo: React.FC<AuthorInfoProps> = React.memo(
  ({ preventAnimation, clickable }) => {
    const authorInfoContent = (
      <>
        <motion.h1
          className={STYLES.name}
          {...getConditionalAnimation(!preventAnimation, NAME_ANIMATION)}
        >
          {AUTHOR_NAME}
        </motion.h1>
        <motion.p
          className={STYLES.role}
          {...getConditionalAnimation(!preventAnimation, ROLE_ANIMATION)}
          aria-label={`Role: ${AUTHOR_ROLE}`}
        >
          {AUTHOR_ROLE}
        </motion.p>
      </>
    );

    return (
      <div className="author-info">
        {clickable ?
          <Link href="/about" className="block" aria-label="Go to homepage">
            {authorInfoContent}
          </Link>
        : authorInfoContent}
      </div>
    );
  }
);

AuthorInfo.displayName = "AuthorInfo";

const NavigationMenu: React.FC<NavigationMenuProps> = React.memo(
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

NavigationMenu.displayName = "NavigationMenu";

const Header: React.FC<HeaderProps> = ({
  preventNameAnimation = false,
  preventMenuAnimation = false,
  hideMenu = false,
  clickableAuthorInfo = true,
  currentPath,
}) => {
  return (
    <header className={STYLES.header} role="banner">
      <AuthorInfo
        preventAnimation={preventNameAnimation}
        clickable={clickableAuthorInfo}
      />
      <NavigationMenu
        preventAnimation={preventMenuAnimation}
        hidden={hideMenu}
        currentPath={currentPath}
      />
    </header>
  );
};

Header.displayName = "Header";

export default React.memo(Header);
