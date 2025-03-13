import { useState, useEffect } from "react";

interface DeviceDetection {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouchDevice: boolean;
}

export const useDeviceDetection = (): DeviceDetection => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.maxTouchPoints > 0
      );
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    checkTouchDevice();
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: windowWidth <= 768,
    isTablet: windowWidth > 768 && windowWidth <= 1024,
    isDesktop: windowWidth > 1024,
    isTouchDevice
  };
};