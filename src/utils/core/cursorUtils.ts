import { MOVEMENT_THRESHOLD, VELOCITY_SMOOTHING } from "@/constants/cursor";
import { Position } from "@/types/core/cursorType";

export function calculateVelocity(
  newPosition: Position,
  prevPosition: Position,
  currentVelocity: Position,
  timeElapsed: number
): Position {
  const dx = newPosition.x - prevPosition.x;
  const dy = newPosition.y - prevPosition.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance <= MOVEMENT_THRESHOLD) {
    return currentVelocity;
  }

  const velocityX = dx / timeElapsed;
  const velocityY = dy / timeElapsed;

  return {
    x: VELOCITY_SMOOTHING * velocityX + (1 - VELOCITY_SMOOTHING) * currentVelocity.x,
    y: VELOCITY_SMOOTHING * velocityY + (1 - VELOCITY_SMOOTHING) * currentVelocity.y
  };
}