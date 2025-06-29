import { z } from "zod";

export const SocialLinkSchema = z.object({
  name: z.string(),
  href: z.string(),
});

export type SocialLink = z.infer<typeof SocialLinkSchema>;

export const ContactsProps = z.object({});

export type ContactsProps = z.infer<typeof ContactsProps>;
