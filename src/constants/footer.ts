// Path: /src/components/layout/Footer.tsx
export const FIRST_ELEMENT_DELAY = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.5 : 1;
export const SECOND_ELEMENT_DELAY = FIRST_ELEMENT_DELAY === 0.5 ? 1 : 1.5;
export const CITY_NAME = "MILANO";
export const COORDINATES = "45°27′40.68″ N - 9°09′34.20″ E";
export const TIMEZONE = "Europe/Rome";
export const UPDATE_TIME = 60000;

export const TIME_FORMAT = {
  hour: "numeric" as const,
  minute: "2-digit" as const,
  hour12: true,
};

// Path src/hooks/layout/useTimezone.ts
export const DEFAULT_LOCALE = "en-US";