import React from "react";
import { Columns } from "@/components/columns";
import { STYLES } from "@/constants/columns/columns";

const COLUMN_LAYOUT =
  "col-span-4 col-start-1 sm:col-span-4 sm:col-start-2 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-2 xl:col-span-8 xl:col-start-3";

export const Home: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center">
      <Columns maxColumns={12} alternative={false} />
      <div className="w-full">
        <div className="relative mx-auto px-4 md:px-6">
          <div className={STYLES.grid}>
            <div className={COLUMN_LAYOUT}>
              <div
                className="aspect-[16/9] w-full bg-[var(--neutral)]"
                aria-label="Content section"
              />
              <p className="mt-1 text-xs text-[var(--neutral)] md:text-sm">
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
