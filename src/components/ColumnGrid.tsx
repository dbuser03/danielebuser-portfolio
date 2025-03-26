import React from "react";
import { ColumnGridProps } from "@/types/columnGridS";
import { useColumnGrid } from "@/hooks/useWindowSize";

const GRID_STYLES = {
  CONTAINER: [
    "pointer-events-none",
    "absolute inset-0",
    "-z-1",
    "grid h-full w-full",
    "grid-cols-1",
    "gap-x-4 px-4 md:px-6",
  ].join(" "),
  COLUMN: {
    BASE: "h-full bg-[var(--columns)]",
    BORDER: "border border-[var(--foreground)]",
  },
};

const ColumnGrid: React.FC<ColumnGridProps> = ({
  showBorder = false,
  opacity = 1,
  className = "",
}) => {
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
        <div
          key={index}
          style={{ opacity }}
          className={columnClass}
        />
      ))}
    </div>
  );
};

export default ColumnGrid;