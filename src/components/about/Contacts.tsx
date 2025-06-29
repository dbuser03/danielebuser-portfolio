import React from "react";
import Link from "next/link";
import { Columns } from "@/components/columns";

export const Contacts: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center">
      <Columns maxColumns={12} alternative={false} />
      <div className="w-full pt-28">
        <div className="relative mx-auto px-4 md:px-6">
          <a
            href="mailto:buserdaniele@gmail.com"
            className="block text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] leading-none transition-colors hover:text-[var(--primary)]"
            style={{
              fontFamily: "var(--font-neue-haas-grotesk-display), sans-serif",
            }}
          >
            Say Hello<span className="text-[var(--cursor)]">.</span>
          </a>

          <div className="mt-[28rem] sm:mt-96 md:mt-80 lg:mt-64 xl:mt-80 grid w-full grid-cols-1 xl:grid-cols-2">
            <div className="col-span-1 max-w-xl">
              <h3 className="text-xl max-w-sm sm:max-w-md md:max-w-xl sm:text-2xl md:text-3xl">
                If you have a project in mind, feel free to reach out - I&apos;d
                be glad to help bring your vision to life.
              </h3>
            </div>
            <div className="col-span-1 pt-8 md:pt-12 xl:pt-0 flex flex-col xl:items-end">
              <div>
                <a
                  href="mailto:buserdaniele@gmail.com"
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-7xl leading-none transition-colors hover:text-[var(--primary)]"
                  style={{
                    fontFamily:
                      "var(--font-neue-haas-grotesk-display), sans-serif",
                  }}
                >
                  buserdaniele@gmail.com
                </a>
                <div className="flex items-center pt-1">
                  <Link
                    href="https://www.linkedin.com/in/daniele-buser/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-xl text-[var(--neutral)] transition-colors hover:text-[var(--primary)]"
                    style={{
                      fontFamily:
                        "var(--font-neue-haas-grotesk-display), sans-serif",
                    }}
                  >
                    LinkedIn
                  </Link>
                  <span className="mx-3 h-3 sm:mx-4 sm:h-4 w-px bg-[var(--neutral)]"></span>
                  <Link
                    href="https://github.com/dbuser03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-xl text-[var(--neutral)] transition-colors hover:text-[var(--primary)]"
                    style={{
                      fontFamily:
                        "var(--font-neue-haas-grotesk-display), sans-serif",
                    }}
                  >
                    GitHub
                  </Link>
                  <span className="mx-3 h-3 sm:mx-4 sm:h-4 w-px bg-[var(--neutral)]"></span>
                  <Link
                    href="https://www.fiverr.com/danielebuser/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-xl text-[var(--neutral)] transition-colors hover:text-[var(--primary)]"
                    style={{
                      fontFamily:
                        "var(--font-neue-haas-grotesk-display), sans-serif",
                    }}
                  >
                    Fiverr
                  </Link>
                  <span className="mx-3 h-3 sm:mx-4 sm:h-4 w-px bg-[var(--neutral)]"></span>
                  <Link
                    href="/daniele-buser-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-xl text-[var(--neutral)] transition-colors hover:text-[var(--primary)]"
                    style={{
                      fontFamily:
                        "var(--font-neue-haas-grotesk-display), sans-serif",
                    }}
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
