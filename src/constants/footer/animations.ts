export const CITY_ANIMATION = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5,
    delay: 0.3,
    ease: "easeOut"
  },
};

export const COORDINATES_ANIMATION = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5, 
    delay: 0.6,
    ease: "easeOut"
  },
};

export const PAGE_NUMBER_ANIMATION = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5, 
    ease: "easeOut"
  },
};

export const FADE_OUT_ANIMATION = {
  animate: { opacity: 0, scale: 0.98 },
  transition: { 
    duration: 0.5, 
    ease: "easeInOut" 
  },
};