import { z } from "zod";

export const HomeProps = z.object({});

export type HomeProps = z.infer<typeof HomeProps>;
