"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FooterProps,
  CityInfoProps,
  PageNumberProps,
} from "@/types/footer/footer";
import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
  STYLES,
} from "@/constants/footer/footer";
import {
  CITY_ANIMATION,
  COORDINATES_ANIMATION,
  FADE_OUT_ANIMATION,
  PAGE_NUMBER_ANIMATION,
} from "@/constants/footer/animations";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { useLoadingProgress } from "@/hooks/UseLoadingProgress";

const getConditionalAnimation = (
  shouldAnimate: boolean,
  animation: Record<string, unknown>
) => {
  return shouldAnimate ? animation : {};
};

const CityInfo: React.FC<CityInfoProps> = React.memo(
  ({
    preventCityAnimation,
    preventCoordinatesAnimation,
    preventTimeAnimation,
    city,
    time,
    coordinates,
  }) => {
    const cityText = useMemo(() => {
      return preventTimeAnimation ? city : `${city} - ${time}`;
    }, [city, time, preventTimeAnimation]);

    return (
      <div className="city-info">
        <motion.p
          className={STYLES.cityName}
          {...getConditionalAnimation(!preventCityAnimation, CITY_ANIMATION)}
        >
          {cityText}
        </motion.p>
        <motion.p
          className={STYLES.coordinates}
          {...getConditionalAnimation(
            !preventCoordinatesAnimation,
            COORDINATES_ANIMATION
          )}
          aria-label={`Coordinates: ${coordinates}`}
        >
          {coordinates}
        </motion.p>
      </div>
    );
  }
);

CityInfo.displayName = "CityInfo";

const PageNumber: React.FC<PageNumberProps> = React.memo(
  ({ preventPageNumberAnimation, pageNumber, isLoading, fadeOut }) => {
    const loadingProgress = useLoadingProgress({ isLoading });

    const displayText = useMemo(() => {
      return isLoading ?
          `${loadingProgress.toString().padStart(3, "0")}%`
        : pageNumber;
    }, [isLoading, loadingProgress, pageNumber]);

    const animations = useMemo(() => {
      const baseAnimation = getConditionalAnimation(
        !preventPageNumberAnimation,
        PAGE_NUMBER_ANIMATION
      );
      return fadeOut ?
          { ...baseAnimation, ...FADE_OUT_ANIMATION }
        : baseAnimation;
    }, [preventPageNumberAnimation, fadeOut]);

    const className = isLoading ? STYLES.loadingPageNumber : STYLES.pageNumber;
    const ariaLabel =
      isLoading ? `Loading ${loadingProgress}%` : `Page ${pageNumber}`;

    return (
      <motion.div className={className} {...animations} aria-label={ariaLabel}>
        {displayText}
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

Footer.displayName = "Footer";

export default React.memo(Footer);
