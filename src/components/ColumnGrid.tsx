import React from "react";
import { ColumnGridProps } from "@/types/columnGridS";
import { useColumnGrid } from "@/hooks/useWindowSize";

const ColumnGrid: React.FC<ColumnGridProps> = ({
  showBorder = false,
  opacity = 1,
  className = "",
}) => {
  const { columns, initialized } = useColumnGrid();

  if (!initialized) {
    return null;
  }

  const gridContainerClass = [
    "pointer-events-none",
    "absolute inset-0",
    "-z-1",
    "grid h-full w-full",
    "grid-cols-1",
    "gap-x-4 px-4 md:px-6",
    className,
  ].join(" ");

  return (
    <div
      className={gridContainerClass}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          style={{ opacity }}
          className={`h-full bg-[var(--columns)] ${
            showBorder ? "border border-[var(--foreground)]" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ColumnGrid;