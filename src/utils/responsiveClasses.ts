import { RESPONSIVE_DISPLAY } from "@/constants/columns/columns";

export const getResponsiveClasses = (index: number) => {
  return `${index >= RESPONSIVE_DISPLAY.sm ? "hidden sm:block" : ""} 
          ${index >= RESPONSIVE_DISPLAY.md ? "sm:hidden md:block" : ""} 
          ${index >= RESPONSIVE_DISPLAY.lg ? "md:hidden lg:block" : ""} 
          ${index >= RESPONSIVE_DISPLAY.xl ? "lg:hidden xl:block" : ""}`.trim();
};
