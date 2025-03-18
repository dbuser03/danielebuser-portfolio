import React from "react";
import { useColumnCount } from "@/hooks/core/useColumnCount";
import ColumnGrid from "@/components/core/ColumnGrid";

const LandingScreen = () => {
  const columnCount = useColumnCount();

  return (
    <div className="relative h-[100vh] flex-shrink-0">
      <ColumnGrid columnCount={columnCount} showBorder={false} opacity={1} />
    </div>
  );
};

export default LandingScreen;
