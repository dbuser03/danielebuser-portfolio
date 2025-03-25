"use client";

import ColumnGrid from "@/components/ColumnGrid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";


import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/footer/footer";
import {
  PROJECT_WIDTH_BY_BREAKPOINT,
  PROJECTS_ANIMATION,
  
} from "@/constants/home/animations";
import { useBreakpoint } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

export default function Home() {
  const currentBreakpoint = useBreakpoint();

  const responsiveAnimation = {
    ...PROJECTS_ANIMATION,
    animate: {
      ...PROJECTS_ANIMATION.animate,
      width: PROJECT_WIDTH_BY_BREAKPOINT[currentBreakpoint as keyof typeof PROJECT_WIDTH_BY_BREAKPOINT],
    },
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <ColumnGrid columnCount={12} showBorder={false} opacity={1} className={""} />
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={false}
        hideMenu={false}
        clickableAuthorInfo={true}
      />
      <motion.div
        className="aspect-video bg-[var(--foreground)]"
        {...responsiveAnimation}
      ></motion.div>
      <Footer
        preventCityAnimation={false}
        preventTimeAnimation={false}
        preventCoordinatesAnimation={false}
        preventPageNumberAnimation={false}
        city={DEFAULT_CITY}
        time={""}
        coordinates={DEFAULT_COORDINATES}
        pageNumber={DEFAULT_PAGE_NUMBER}
        isLoading={false}
        fadeOut={false}
      />
    </div>
  );
}