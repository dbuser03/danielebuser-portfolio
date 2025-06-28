import React from "react";
import { Columns } from "@/components/columns";
import { STYLES } from "@/constants/columns/columns";

const COLUMN_LAYOUT =
  "col-span-4 col-start-1 sm:col-span-9 sm:col-start-1 md:col-span-9 md:col-start-1 lg:col-span-10 lg:col-start-1";

export const Profile: React.FC = () => {
  return (
    <>
      <section className="relative flex h-screen w-full flex-col items-start justify-center">
        <Columns maxColumns={12} alternative={true} />
        <div className="w-full">
          <div className="relative mx-4 md:mx-6">
            <div className={STYLES.grid}>
              <h1
                className={`${COLUMN_LAYOUT} text-4xl text-[var(--background)] sm:text-5xl md:text-7xl xl:text-8xl`}
              >
                I&apos;m a{" "}
                <span className="font-bold">computer science student</span>{" "}
                based in Milan willing to become an amazing{" "}
                <span className="font-bold">creative developer</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen w-full flex-col items-start justify-center">
        <Columns maxColumns={12} alternative={true} />
        <div className="w-full">
          <div className="relative mx-4 md:mx-6">
            <div className={STYLES.grid}>
              <div className={`${COLUMN_LAYOUT} text-[var(--background)]`}>
                <div className="grid grid-rows-2 gap-0 sm:gap-16">
                  <div className="grid grid-cols-1 gap-0 sm:grid-cols-10 sm:gap-4">
                    <h3 className="col-span-full mb-2 self-end text-lg text-[var(--neutral)] sm:col-span-2 sm:mb-0 sm:self-auto sm:pt-6 md:text-xl lg:text-2xl">
                      Education
                    </h3>
                    <div className="col-span-full grid grid-cols-1 gap-6 sm:col-span-10 sm:col-start-3 sm:grid-cols-2 md:col-span-8 lg:col-span-6">
                      <div className="flex max-w-xs flex-col">
                        <p className="mb-1 text-xs text-[var(--neutral)] sm:mb-2 sm:text-sm">
                          2025 - 2027
                        </p>
                        <h4 className="text-2xl font-bold md:text-3xl">
                          USI - Università della Svizzera Italiana
                        </h4>
                        <p className="lg:text-base mt-2 text-sm text-[var(--background)] sm:mt-3">
                          Currently applying to the Master&apos;s Degree in
                          Computer Science with the goal of improving my
                          creative development skills.
                        </p>
                      </div>
                      <div className="flex max-w-xs flex-col">
                        <p className="mb-1 text-xs text-[var(--neutral)] sm:mb-2 sm:text-sm">
                          2022 - 2025
                        </p>
                        <h4 className="text-2xl font-bold md:text-3xl">
                          Università degli studi di Milano - Bicocca
                        </h4>
                        <p className="lg:text-base mt-2 text-sm text-[var(--background)] sm:mt-3">
                          Bachelor&apos;s Degree in Computer Science, expected
                          graduation in July. Demonstrated good performance in
                          project-based exams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-10 sm:gap-4">
                    <h3 className="col-span-full mb-2 self-end text-lg text-[var(--neutral)] sm:col-span-2 sm:mb-0 sm:self-auto md:text-xl lg:text-2xl">
                      Experience
                    </h3>
                    <p className="col-span-full text-2xl sm:col-span-8 sm:col-start-3 sm:text-3xl md:text-4xl lg:text-5xl">
                      Over the past 3 years, while pursuing my academic studies,
                      I also worked as a{" "}
                      <span className="font-bold">
                        freelance Graphic Designer
                      </span>
                      , crafting
                      <span className="font-bold">
                        {" "}
                        high-end digital content
                      </span>
                      .
                    </p>
                  </div>
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
