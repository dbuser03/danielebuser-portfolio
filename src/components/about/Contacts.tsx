import React from "react";
import Link from "next/link";
import { Columns } from "@/components/columns";
import {
  EMAIL,
  HEADING,
  DESCRIPTION,
  SOCIAL_LINKS,
  SECTION_STYLES,
  FONT_STYLES,
} from "@/constants/about/contacts";
import type { ContactsProps } from "@/types/about/contacts";

export const Contacts: React.FC<ContactsProps> = () => {
  return (
    <section className={SECTION_STYLES.container}>
      <Columns maxColumns={12} alternative={false} />
      <div className={SECTION_STYLES.contentWrapper}>
        <div className={SECTION_STYLES.innerWrapper}>
          <a
            href={`mailto:${EMAIL}`}
            className={SECTION_STYLES.headingText}
            style={FONT_STYLES.display}
          >
            {HEADING}
            <span className="text-[var(--cursor)]">.</span>
          </a>

          <div className={SECTION_STYLES.contentGrid}>
            <div className={SECTION_STYLES.descriptionContainer}>
              <h3 className={SECTION_STYLES.descriptionText}>
                {DESCRIPTION}
              </h3>
            </div>
            <div className={SECTION_STYLES.contactContainer}>
              <div>
                <a
                  href={`mailto:${EMAIL}`}
                  className={SECTION_STYLES.emailText}
                  style={FONT_STYLES.display}
                >
                  {EMAIL}
                </a>
                <div className={SECTION_STYLES.socialsContainer}>
                  {SOCIAL_LINKS.map((link, index) => (
                    <React.Fragment key={link.name}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={SECTION_STYLES.socialLink}
                        style={FONT_STYLES.display}
                      >
                        {link.name}
                      </Link>
                      {index < SOCIAL_LINKS.length - 1 && (
                        <span className={SECTION_STYLES.socialDivider}></span>
                      )}
                    </React.Fragment>
                  ))}
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