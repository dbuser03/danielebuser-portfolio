import { SocialLink } from "@/types/about/contacts";

export const EMAIL = "buserdaniele@gmail.com";
export const HEADING = "Say Hello";
export const DESCRIPTION = "If you have a project in mind, feel free to reach out - I'd be glad to help bring your vision to life.";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniele-buser/",
  },
  {
    name: "GitHub",
    href: "https://github.com/dbuser03",
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/danielebuser/",
  },
  {
    name: "Resume",
    href: "/daniele-buser-resume.pdf",
  },
];

export const SECTION_STYLES = {
  container: "relative flex h-screen w-full flex-col items-center",
  contentWrapper: "w-full pt-28",
  innerWrapper: "relative mx-auto px-4 md:px-6",
  headingText: "block text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] leading-none transition-colors hover:text-[var(--primary)]",
  contentGrid: "mt-96 md:mt-72 lg:mt-64 xl:mt-80 grid w-full grid-cols-1 xl:grid-cols-2",
  descriptionContainer: "col-span-1 max-w-xl",
  descriptionText: "text-xl max-w-sm sm:max-w-md md:max-w-xl sm:text-2xl md:text-3xl",
  contactContainer: "col-span-1 pt-8 md:pt-12 xl:pt-0 flex flex-col xl:items-end",
  emailText: "text-4xl sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-7xl leading-none transition-colors hover:text-[var(--primary)]",
  socialsContainer: "flex items-center pt-1",
  socialLink: "text-base sm:text-xl text-[var(--neutral)] transition-colors hover:text-[var(--primary)]",
  socialDivider: "mx-3 h-3 sm:mx-4 sm:h-4 w-px bg-[var(--neutral)]",
};

export const FONT_STYLES = {
  display: {
    fontFamily: "var(--font-neue-haas-grotesk-display), sans-serif",
  },
};
