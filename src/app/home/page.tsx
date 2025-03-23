"use client";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header";
import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/footer/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={false}
        hideMenu={false}
        clickableAuthorInfo={true}
      />
      <motion.div
        className="aspect-video bg-[var(--foreground)]"
        initial={{ width: "40vw", opacity: 0 }}
        animate={{ width: "64vw", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
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
