import { z } from "zod";

export const EducationItemSchema = z.object({
  period: z.string(),
  institution: z.string(),
  description: z.string(),
});

export type EducationItem = z.infer<typeof EducationItemSchema>;

export const ExperienceSchema = z.object({
  description: z.string(),
});

export type Experience = z.infer<typeof ExperienceSchema>;

export const ProfileProps = z.object({});

export type ProfileProps = z.infer<typeof ProfileProps>;
