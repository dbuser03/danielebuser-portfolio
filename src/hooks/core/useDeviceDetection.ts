import { BREAKPOINTS } from "@/constants/utils";
import { useState, useEffect } from "react";
import { DeviceDetection } from "@/types/core/deviceDetectionType";

export const useDeviceDetection = (): DeviceDetection => {
  const [, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkTouchDevice = () => {
      const hasTouchSupport =
        'ontouchstart' in window ||
        (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);

      setIsTouchDevice(hasTouchSupport);
    };

    const throttle = (func: () => void, limit: number): () => void => {
      let inThrottle: boolean;
      return function () {
        if (!inThrottle) {
          func();
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    const calculateDeviceType = (width: number) => {
      setDeviceType({
        isMobile: width <= BREAKPOINTS.MOBILE,
        isTablet: width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET,
        isDesktop: width > BREAKPOINTS.TABLET
      });
    };

    const handleResize = throttle(() => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      calculateDeviceType(newWidth);
    }, 200);

    checkTouchDevice();
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...deviceType,
    isTouchDevice
  };
};