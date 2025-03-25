import { MenuItem } from "@/types/header/navMenu";

export const STYLES = {
  header: "fixed top-0 right-0 left-0 z-10 flex flex-row items-start justify-between p-4 md:px-6",
  name: "md:text-xl sm:text-lg text-base font-bold text-[var(--foreground)]",
  role: "md:text-sm text-xs text-[var(--neutral)]",
  nav: "flex space-x-4 md:space-x-8",
  menuItem: "text-xs md:text-sm text-[var(--neutral)] hover:text-[var(--foreground)] transition-colors duration-300",
};

export const AUTHOR_NAME = "DANIELE BUSER";
export const AUTHOR_ROLE = "Creative Developer";

export const MAIN_MENU_ITEMS: MenuItem[] = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contacts", label: "CONTACTS" },
];