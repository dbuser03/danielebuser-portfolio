import { LARGE_SCREEN_WIDTH } from "@/constants/columnGrid";

export const PROJECTS_ANIMATION = {
  initial: { width: "30vw", opacity: 0, scale: 0.98 },
  animate: { 
    width: LARGE_SCREEN_WIDTH, 
    opacity: 1, 
    scale: 1
  },
  transition: { 
    duration: 0.6, 
    ease: [0.25, 0.1, 0.25, 1],
  },
};

export const PROJECT_WIDTH_BY_BREAKPOINT = {
  default: "92vw",
  sm: "84vw",          
  md: "76vw",          
  lg: LARGE_SCREEN_WIDTH,         
  xl: LARGE_SCREEN_WIDTH,
};