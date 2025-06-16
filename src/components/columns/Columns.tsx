import React, { useMemo } from "react";
import { ColumnsProps } from "@/types/columns/columns";
import { DEFAULT_MAX_COLUMNS, STYLES } from "@/constants/columns/columns";
import { getResponsiveClasses } from "@/utils/responsiveClasses";

const Columns: React.FC<ColumnsProps> = ({
  maxColumns = DEFAULT_MAX_COLUMNS,
  alternative = false,
}) => {
  const columnIndices = useMemo(
    () => Array.from({ length: maxColumns }, (_, i) => i),
    [maxColumns]
  );

  return (
    <div
      className={`${STYLES.container} ${alternative ? "bg-[var(--foreground)]" : ""}`}
    >
      <div className={STYLES.wrapper}>
        <div className={STYLES.grid}>
          {columnIndices.map((index) => (
            <div
              key={index}
              className={`${alternative ? STYLES.alternativeColumn : STYLES.column} ${getResponsiveClasses(index)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Columns.displayName = "Columns";

export default Columns;
