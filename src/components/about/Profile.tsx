import React from "react";
import { Columns } from "@/components/columns";
import { STYLES } from "@/constants/columns/columns";
import {
  COLUMN_LAYOUT,
  EDUCATION_ITEMS,
  EXPERIENCE,
  PROFILE_HEADING,
  IRONIC_PROFILE_HEADING,
  SECTION_STYLES,
} from "@/constants/about/profile";
import type { ProfileProps } from "@/types/about/profile";
import { motion } from "framer-motion";

export const Profile: React.FC<ProfileProps> = () => {

  return (
    <>
      <section className={`${SECTION_STYLES.container} h-screen`}>
        <Columns maxColumns={12} alternative={true} />
        <div className={SECTION_STYLES.contentWrapper}>
          <div className={SECTION_STYLES.innerWrapper}>
            <div className="relative">
              <div className={STYLES.grid}>
                <h1
                  className={`${COLUMN_LAYOUT} text-4xl text-[var(--background)] sm:text-5xl md:text-7xl xl:text-8xl`}
                >
                  {PROFILE_HEADING.split("computer science student").map(
                    (part, i) =>
                      i === 0 ?
                        <React.Fragment key={i}>
                          {part}
                          <span className="font-bold">
                            computer science student
                          </span>
                        </React.Fragment>
                      : <React.Fragment key={i}>
                          {part.split("creative developer").map((subPart, j) =>
                            j === 0 ?
                              <React.Fragment key={j}>
                                {subPart}
                                <span className="font-bold">
                                  creative developer
                                </span>
                              </React.Fragment>
                            : subPart
                          )}
                        </React.Fragment>
                  )}
                </h1>
              </div>

              <div className={`${STYLES.grid} absolute top-0 left-0`}>
                <motion.h1
                  className={`${COLUMN_LAYOUT} text-4xl text-[var(--background)] sm:text-5xl md:text-7xl xl:text-8xl`}
                  onMouseEnter={() => {
                    console.log("Cursor mask on");
                  }}
                  onMouseLeave={() => {
                    console.log("Cursor mask off");
                  }}
                >
                  {IRONIC_PROFILE_HEADING.split(
                    "average computer science student"
                  ).map((part, i) =>
                    i === 0 ?
                      <React.Fragment key={i}>
                        {part}
                        <span className="font-bold">
                          average computer science student
                        </span>
                      </React.Fragment>
                    : <React.Fragment key={i}>
                        {part
                          .split("borrowing creative ideas")
                          .map((subPart, j) =>
                            j === 0 ?
                              <React.Fragment key={j}>
                                {subPart}
                                <span className="font-bold">
                                  borrowing creative ideas
                                </span>
                              </React.Fragment>
                            : subPart
                          )}
                      </React.Fragment>
                  )}
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${SECTION_STYLES.container} min-h-screen`}>
        <Columns maxColumns={12} alternative={true} />
        <div className={SECTION_STYLES.contentWrapper}>
          <div className={SECTION_STYLES.innerWrapper}>
            <div className={STYLES.grid}>
              <div className={`${COLUMN_LAYOUT} text-[var(--background)]`}>
                <div className="grid grid-rows-2 gap-0 sm:gap-16">
                  <div className={SECTION_STYLES.educationGrid}>
                    <h3 className={SECTION_STYLES.sectionTitle}>Education</h3>
                    <div className={SECTION_STYLES.educationList}>
                      {EDUCATION_ITEMS.map((item, index) => (
                        <div
                          key={index}
                          className={SECTION_STYLES.educationItem}
                        >
                          <p className={SECTION_STYLES.periodText}>
                            {item.period}
                          </p>
                          <h4 className={SECTION_STYLES.institutionText}>
                            {item.institution}
                          </h4>
                          <p className={SECTION_STYLES.descriptionText}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={SECTION_STYLES.experienceGrid}>
                    <h3 className={SECTION_STYLES.sectionTitle}>Experience</h3>
                    <p className={SECTION_STYLES.experienceText}>
                      {EXPERIENCE.description
                        .split("freelance Graphic Designer")
                        .map((part, i) =>
                          i === 0 ?
                            <React.Fragment key={i}>
                              {part}
                              <span className="font-bold">
                                freelance Graphic Designer
                              </span>
                            </React.Fragment>
                          : <React.Fragment key={i}>
                              {part
                                .split("high-end digital content")
                                .map((subPart, j) =>
                                  j === 0 ?
                                    <React.Fragment key={j}>
                                      {subPart}
                                      <span className="font-bold">
                                        high-end digital content
                                      </span>
                                    </React.Fragment>
                                  : subPart
                                )}
                            </React.Fragment>
                        )}
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
