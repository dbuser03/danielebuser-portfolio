import React from "react";
import { ColumnGridProps } from "@/types/core/columnType";

const ColumnGrid: React.FC<ColumnGridProps> = ({
  columnCount,
  showBorder = false,
  opacity = 1,
  className = "",
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-1 grid h-full w-full grid-cols-4 gap-x-4 px-8 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 ${className}`}
    >
      {Array.from({ length: columnCount }).map((_, index) => (
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
