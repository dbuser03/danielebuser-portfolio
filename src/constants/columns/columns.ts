export const DEFAULT_MAX_COLUMNS = 12;

export const STYLES = {
  container: "pointer-events-none absolute inset-0 z-[-1]",
  wrapper: "relative mx-auto h-full px-4 md:px-6",
  grid: "grid h-full grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12",
  column: "h-full bg-[var(--columns)]",
};

export const RESPONSIVE_DISPLAY = {
  sm: 4,  
  md: 6,  
  lg: 8,  
  xl: 10, 
};
