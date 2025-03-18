"use client";

import { LandingScreen } from "@/app/landing";
import { Footer, Header } from "@/components/layout";
import { useHomePageLogic } from "@/hooks/useHomePageLogic";
import CustomCursor from "@/components/core/CustomCursor";
import { useDeviceDetection } from "@/hooks/core/useDeviceDetection";
import { LABEL_CLICK, LABEL_DEFAULT, LABEL_LOADING } from "@/constants/cursor";

export default function Home() {
  const { handleClick, readyForClick, hideLabel, loaded } = useHomePageLogic();
  const { isTouchDevice } = useDeviceDetection();

  const getCursorLabel = () => {
    if (hideLabel) return LABEL_DEFAULT;
    return readyForClick ? LABEL_CLICK : LABEL_LOADING;
  };

  return (
    <div
      className="flex min-h-screen flex-col overflow-hidden"
      onClick={handleClick}
    >
      <Header loaded={loaded} />
      <LandingScreen />
      <Footer loaded={loaded} />
      {!isTouchDevice && <CustomCursor label={getCursorLabel()} />}
    </div>
  );
}
