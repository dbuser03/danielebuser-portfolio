import { z } from 'zod';

export const ClickStateSchema = z.object({
  loaded: z.boolean(),
  readyForClick: z.boolean(),
  hideLabel: z.boolean(),
  loadingComplete: z.boolean(),
  labelText: z.string().nullable()
});

const SetStateActionSchema = <T extends z.ZodType>(schema: T) =>
  z.union([
    schema,
    z.function().args(schema).returns(schema)
  ]);

export const ClickHandlerResultSchema = z.object({
  handleClick: z.function().returns(z.void()),
  readyForClick: z.boolean(),
  hideLabel: z.boolean(),
  loaded: z.boolean(),
  setLoaded: z.function()
    .args(SetStateActionSchema(z.boolean()))
    .returns(z.void()),
  loadingComplete: z.boolean(),
  setLoadingComplete: z.function()
    .args(SetStateActionSchema(z.boolean()))
    .returns(z.void()),
  labelText: z.string().nullable()
});

export type ClickState = z.infer<typeof ClickStateSchema>;
export type ClickHandlerResult = z.infer<typeof ClickHandlerResultSchema>;