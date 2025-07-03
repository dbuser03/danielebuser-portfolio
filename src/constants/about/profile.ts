import { EducationItem, Experience } from "@/types/about/profile";

export const COLUMN_LAYOUT =
  "col-span-4 col-start-1 sm:col-span-9 sm:col-start-1 md:col-span-9 md:col-start-1 lg:col-span-10 lg:col-start-1";

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    period: "2025 - 2027",
    institution: "USI - Università della Svizzera Italiana",
    description: "Currently applying to the Master's Degree in Computer Science with the goal of improving my creative development skills.",
  },
  {
    period: "2022 - 2025",
    institution: "Università degli studi di Milano - Bicocca",
    description: "Bachelor's Degree in Computer Science, expected graduation in July. Demonstrated good performance in project-based exams.",
  },
];

export const EXPERIENCE: Experience = {
  description: "Over the past 3 years, while pursuing my academic studies, I also worked as a freelance Graphic Designer, crafting high-end digital content.",
};

export const PROFILE_HEADING = "I'm a computer science student based in Milan willing to become an amazing creative developer.";

export const IRONIC_PROFILE_HEADING = "I'm an average computer science student who enjoys borrowing creative ideas. Just like this one.";

export const SECTION_STYLES = {
  container: "relative flex w-full flex-col items-start justify-center",
  contentWrapper: "w-full",
  innerWrapper: "relative mx-4 md:mx-6",
  educationGrid: "grid grid-cols-1 gap-0 sm:grid-cols-10 sm:gap-4",
  educationList: "col-span-full grid grid-cols-1 gap-6 sm:col-span-10 sm:col-start-3 xl:grid-cols-2 md:col-span-8 lg:col-span-6",
  educationItem: "flex max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xs flex-col",
  experienceGrid: "grid grid-cols-1 gap-1 sm:grid-cols-10 sm:gap-4",
  periodText: "mb-1 text-xs text-[var(--neutral)] sm:mb-2 sm:text-sm",
  institutionText: "text-2xl font-bold md:text-3xl",
  descriptionText: "lg:text-base mt-2 text-sm text-[var(--background)] sm:mt-3",
  sectionTitle: "col-span-full mb-2 self-end text-lg text-[var(--neutral)] sm:col-span-2 sm:mb-0 sm:self-auto sm:pt-6 md:text-xl lg:text-2xl",
  experienceText: "col-span-full text-2xl sm:col-span-8 sm:col-start-3 sm:text-3xl md:text-4xl lg:text-5xl",
};
