import React from "react";
import { Columns } from "@/components/columns";
import { STYLES } from "@/constants/columns/columns";

const COLUMN_LAYOUT =
  "col-span-4 col-start-1 sm:col-span-9 sm:col-start-1 md:col-span-9 md:col-start-1 lg:col-span-9 lg:col-start-1";

const EXPERIENCE_COLUMN_LAYOUT =
  "col-span-4 col-start-1 sm:col-span-10 sm:col-start-1 md:col-span-10 md:col-start-1 lg:col-span-10 lg:col-start-1";

export const Profile: React.FC = () => {
  return (
    <>
      <section className="relative flex h-screen w-full flex-col items-start justify-center">
        <Columns maxColumns={12} alternative={true} />
        <div className="w-full">
          <div className="relative mx-4 md:mx-6">
            <div className={STYLES.grid}>
              <h1
                className={`${COLUMN_LAYOUT} text-5xl text-[var(--background)] md:text-7xl`}
              >
                I'm a{" "}
                <span className="font-bold">computer science student</span>{" "}
                based in Milan willing to become an amazing{" "}
                <span className="font-bold">creative developer</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-screen w-full flex-col items-start justify-center">
        <Columns maxColumns={12} alternative={true} />
        <div className="w-full">
          <div className="relative mx-4 md:mx-6">
            <div className={STYLES.grid}>
              <div
                className={`${EXPERIENCE_COLUMN_LAYOUT} text-[var(--background)]`}
              >
                <div className="grid grid-cols-10 gap-4">
                  <h3 className="col-span-2 text-2xl text-[var(--neutral)]">
                    Experience
                  </h3>
                  <p className="col-span-8 col-start-3 text-5xl">
                    Over the past 3 years, while pursuing my academic studies, I
                    also worked as a{" "}
                    <span className="font-bold">
                      freelance Graphic Designer
                    </span>
                    , crafting
                    <span className="font-bold"> high-end digital content</span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
