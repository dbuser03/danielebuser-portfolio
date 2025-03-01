import React from "react";
import { useColumnCount } from "@/hooks/core/useColumnCount";
import ColumnGrid from "@/components/core/ColumnGrid";
import CustomCursor from "@/components/core/CustomCursor";

interface LandingScreenProps {
  readyForClick: boolean;
  hideLabel: boolean;
}

const LandingScreen = ({ readyForClick, hideLabel }: LandingScreenProps) => {
  const columnCount = useColumnCount();

  return (
    <div className="relative h-[100vh] flex-shrink-0">
      <ColumnGrid columnCount={columnCount} showBorder={false} opacity={1} />
      <CustomCursor
        label={
          !hideLabel ?
            readyForClick ?
              "( Click )"
            : "( Loading )"
          : ""
        }
      />
    </div>
  );
};

export default LandingScreen;
