"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NAME_ANIMATION, ROLE_ANIMATION } from "@/constants/header/animations";
import { AuthorInfoProps, HeaderProps } from "@/types/header/header";
import { AUTHOR_NAME, AUTHOR_ROLE, STYLES } from "@/constants/header/header";
import { getConditionalAnimation } from "@/utils/conditionalAnimations";
import NavMenu from "./NavMenu";

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
      <NavMenu
        preventAnimation={preventMenuAnimation}
        hidden={hideMenu}
        currentPath={currentPath}
      />
    </header>
  );
};

Header.displayName = "Header";

export default React.memo(Header);
