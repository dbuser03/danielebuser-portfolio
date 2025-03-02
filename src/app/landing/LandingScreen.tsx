import React from "react";
import { useColumnCount } from "@/hooks/core/useColumnCount";
import ColumnGrid from "@/components/core/ColumnGrid";
import CustomCursor from "@/components/core/CustomCursor";
import { LandingScreenProps } from "@/types/landing/landingTypes";

const LandingScreen = ({ readyForClick, hideLabel }: LandingScreenProps) => {
  const columnCount = useColumnCount();

  const getCursorLabel = () => {
    if (hideLabel) return "";
    return readyForClick ? "( Click )" : "( Loading )";
  };

  return (
    <div className="relative h-[100vh] flex-shrink-0">
      <ColumnGrid columnCount={columnCount} showBorder={false} opacity={1} />
      <CustomCursor label={getCursorLabel()} />
    </div>
  );
};

export default LandingScreen;
