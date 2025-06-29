import React from "react";
import { Columns } from "@/components/columns";
import { STYLES } from "@/constants/columns/columns";
import {
  COLUMN_LAYOUT,
  CHECK_PROJECTS_TEXT,
  SECTION_STYLES,
} from "@/constants/about/home";
import type { HomeProps } from "@/types/about/home";

export const Home: React.FC<HomeProps> = () => {
  return (
    <section className={SECTION_STYLES.container}>
      <Columns maxColumns={12} alternative={false} />
      <div className={SECTION_STYLES.contentWrapper}>
        <div className={SECTION_STYLES.innerWrapper}>
          <div className={STYLES.grid}>
            <div className={COLUMN_LAYOUT}>
              <div
                className={SECTION_STYLES.contentBox}
                aria-label="Content section"
              />
              <p className={SECTION_STYLES.captionText}>
                {CHECK_PROJECTS_TEXT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
