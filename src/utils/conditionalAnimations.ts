export const getConditionalAnimation = (
  shouldAnimate: boolean,
  animation: Record<string, unknown>
): Record<string, unknown> => {
  return shouldAnimate ? animation : {};
};
