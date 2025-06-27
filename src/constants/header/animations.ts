export const NAME_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5,
    ease: "easeOut" 
  },
};

export const ROLE_ANIMATION = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5, 
    delay: 0.3,
    ease: "easeOut" 
  },
};

export const MENU_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.5,
    delay: 0.3,
    ease: "easeOut" 
  },
};

export const MENU_ITEM_ANIMATION = (delay = 0) => ({
  initial: { opacity: 0, y: 14},
  animate: { opacity: 1, y: 0},
  transition: { 
    duration: 0.5, 
    delay: 0.3 + delay * 0.3,
    ease: "easeOut" 
  },
});
