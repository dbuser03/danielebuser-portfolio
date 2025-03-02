import { MOVEMENT_THRESHOLD, ROTATION_OFFSET, VELOCITY_SMOOTHING } from "@/constants/cursor";
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

export function calculateRotation(velocity: Position): number | null {
  const { x: vx, y: vy } = velocity;

  if (Math.abs(vx) > 0.01 || Math.abs(vy) > 0.01) {
    return Math.atan2(vy, vx) * (180 / Math.PI) + ROTATION_OFFSET;
  }

  return null;
}