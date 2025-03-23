"use client";

import React from "react";
import { motion } from "framer-motion";
import { FooterProps } from "@/types/footer/footer";
import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
  STYLES,
} from "@/constants/footer/footer";
import {
  CITY_ANIMATION,
  COORDINATES_ANIMATION,
  PAGE_NUMBER_ANIMATION,
} from "@/constants/footer/animations";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { useLoadingProgress } from "@/hooks/UseLoadingProgress";

const CityInfo: React.FC<{
  preventCityAnimation: boolean;
  preventCoordinatesAnimation: boolean;
  preventTimeAnimation: boolean;
  city: string;
  time: string;
  coordinates: string;
}> = React.memo(
  ({
    preventCityAnimation,
    preventCoordinatesAnimation,
    preventTimeAnimation,
    city,
    time,
    coordinates,
  }) => {
    return (
      <div className="city-info">
        <motion.p
          className={STYLES.cityName}
          {...(preventCityAnimation ? {} : CITY_ANIMATION)}
        >
          {city}
          {!preventTimeAnimation && ` - ${time}`}
        </motion.p>
        <motion.p
          className={STYLES.coordinates}
          {...(preventCoordinatesAnimation ? {} : COORDINATES_ANIMATION)}
          aria-label={`Coordinates: ${coordinates}`}
        >
          {coordinates}
        </motion.p>
      </div>
    );
  }
);

CityInfo.displayName = "CityInfo";

const PageNumber: React.FC<{
  preventPageNumberAnimation: boolean;
  pageNumber: string;
  isLoading: boolean;
  fadeOut?: boolean;
}> = React.memo(
  ({ preventPageNumberAnimation, pageNumber, isLoading, fadeOut }) => {
    const loadingProgress = useLoadingProgress({ isLoading });

    const fadeOutAnimation =
      fadeOut ?
        {
          animate: { opacity: 0 },
          transition: { duration: 0.5 },
        }
      : {};

    return (
      <motion.div
        className={isLoading ? STYLES.loadingPageNumber : STYLES.pageNumber}
        {...(preventPageNumberAnimation ? {} : PAGE_NUMBER_ANIMATION)}
        {...fadeOutAnimation}
        aria-label={
          isLoading ? `Loading ${loadingProgress}%` : `Page ${pageNumber}`
        }
      >
        {isLoading ?
          `${loadingProgress.toString().padStart(3, "0")}%`
        : pageNumber}
      </motion.div>
    );
  }
);

PageNumber.displayName = "PageNumber";

const Footer: React.FC<FooterProps> = ({
  preventCityAnimation = false,
  preventTimeAnimation = false,
  preventCoordinatesAnimation = false,
  preventPageNumberAnimation = false,
  city = DEFAULT_CITY,
  coordinates = DEFAULT_COORDINATES,
  pageNumber = DEFAULT_PAGE_NUMBER,
  isLoading = false,
  fadeOut = false,
}) => {
  const currentTime = useCurrentTime();

  return (
    <footer className={STYLES.footer} role="contentinfo">
      <CityInfo
        preventCityAnimation={preventCityAnimation}
        preventCoordinatesAnimation={preventCoordinatesAnimation}
        preventTimeAnimation={preventTimeAnimation}
        city={city}
        time={currentTime}
        coordinates={coordinates}
      />
      <PageNumber
        preventPageNumberAnimation={preventPageNumberAnimation}
        pageNumber={pageNumber}
        isLoading={isLoading}
        fadeOut={fadeOut}
      />
    </footer>
  );
};

export default React.memo(Footer);
