import React from "react";
import { ColumnGridProps } from "@/types/columnGridS";
import { useColumnGrid } from "@/hooks/useWindowSize";
import { GRID_STYLES } from "@/constants/columnGrid";

const ColumnGrid: React.FC<ColumnGridProps> = React.memo(
  ({ showBorder = false, opacity = 1, className = "" }) => {
    const { columns, initialized } = useColumnGrid();

    if (!initialized) {
      return null;
    }

    const gridContainerClass = `${GRID_STYLES.CONTAINER} ${className}`;
    const columnClass = `${GRID_STYLES.COLUMN.BASE} ${
      showBorder ? GRID_STYLES.COLUMN.BORDER : ""
    }`;

    return (
      <div
        className={gridContainerClass}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }).map((_, index) => (
          <div key={index} style={{ opacity }} className={columnClass} />
        ))}
      </div>
    );
  }
);

ColumnGrid.displayName = "ColumnGrid";

export default ColumnGrid;