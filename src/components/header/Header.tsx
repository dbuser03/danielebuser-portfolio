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
import { HeaderProps } from "@/types/header/header";
import { MAIN_MENU_ITEMS, STYLES } from "@/constants/header/header";

const AuthorInfo: React.FC<{
  preventAnimation: boolean;
  clickable: boolean;
}> = React.memo(({ preventAnimation, clickable }) => {
  const authorInfoContent = (
    <>
      <motion.h1
        className={STYLES.name}
        {...(preventAnimation ? {} : NAME_ANIMATION)}
      >
        DANIELE BUSER
      </motion.h1>
      <motion.p
        className={STYLES.role}
        {...(preventAnimation ? {} : ROLE_ANIMATION)}
        aria-label="Role: Creative Developer"
      >
        Creative Developer
      </motion.p>
    </>
  );

  if (clickable) {
    return (
      <div className="author-info">
        <Link href="/home" className="block" aria-label="Go to homepage">
          {authorInfoContent}
        </Link>
      </div>
    );
  }

  return <div className="author-info">{authorInfoContent}</div>;
});

AuthorInfo.displayName = "AuthorInfo";

const NavigationMenu: React.FC<{
  preventAnimation: boolean;
  hidden: boolean;
}> = React.memo(({ preventAnimation, hidden }) => {
  if (hidden) return null;
  
  return (
    <motion.nav
      className={STYLES.nav}
      {...(preventAnimation ? {} : MENU_ANIMATION)}
      role="navigation"
      aria-label="Main navigation"
    >
      {MAIN_MENU_ITEMS.map((item, index) => (
        <motion.div
          key={item.href}
          {...(preventAnimation ? {} : MENU_ITEM_ANIMATION(index))}
        >
          <Link href={item.href} className={STYLES.menuItem}>
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
});

NavigationMenu.displayName = "NavigationMenu";

const Header: React.FC<HeaderProps> = ({
  preventNameAnimation = false,
  preventMenuAnimation = false,
  hideMenu = false,
  clickableAuthorInfo = true,
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
      />
    </header>
  );
};

export default React.memo(Header);