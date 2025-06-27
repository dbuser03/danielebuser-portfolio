import { MenuItem } from "@/types/header/navMenu";

export const STYLES = {
  header: "fixed top-0 right-0 left-0 z-1 w-full flex justify-between items-start p-4 md:px-6 mix-blend-difference",
  name: "md:text-xl sm:text-lg text-base font-bold text-[var(--foreground-opposite)]",
  role: "md:text-sm text-xs text-[var(--neutral-opposite)]",
  nav: "flex space-x-4 md:space-x-8",
  menuItem: "text-xs md:text-sm text-[var(--neutral-opposite)] hover:text-[var(--foreground-opposite)] transition-colors duration-300",
  activeMenuItem: "text-xs md:text-sm text-[var(--foreground-opposite)] font-medium transition-colors duration-300",
};

export const AUTHOR_NAME = "DANIELE BUSER";
export const AUTHOR_ROLE = "Creative Developer";

export const MAIN_MENU_ITEMS: MenuItem[] = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contacts", label: "CONTACTS" },
];