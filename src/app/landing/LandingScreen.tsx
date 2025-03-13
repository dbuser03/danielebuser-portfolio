import React from "react";
import { useColumnCount } from "@/hooks/core/useColumnCount";
import { useDeviceDetection } from "@/hooks/core/useDeviceDetection";
import ColumnGrid from "@/components/core/ColumnGrid";
import CustomCursor from "@/components/core/CustomCursor";
import { LandingScreenProps } from "@/types/landing/landingTypes";
import { LABEL_CLICK, LABEL_DEFAULT, LABEL_LOADING } from "@/constants/cursor";

const LandingScreen = ({ readyForClick, hideLabel }: LandingScreenProps) => {
  const columnCount = useColumnCount();
  const { isTouchDevice } = useDeviceDetection();

  const getCursorLabel = () => {
    if (hideLabel) return LABEL_DEFAULT;
    return readyForClick ? LABEL_CLICK : LABEL_LOADING;
  };

  return (
    <div className="relative h-[100vh] flex-shrink-0">
      <ColumnGrid columnCount={columnCount} showBorder={false} opacity={1} />
      {!isTouchDevice && <CustomCursor label={getCursorLabel()} />}
    </div>
  );
};

export default LandingScreen;
