import { useCustomCursor } from "../hooks/useCustomCursor";

const CURSOR_STYLES = {
  BASE_CLASS: "fixed rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform",
  SIZE: "w-4 h-4",
  COLOR: "bg-[var(--cursor)]",
  INITIAL_POSITION: {
    top: 0,
    left: 0,
  },
  getTransform: (isVisible: boolean) => 
    `translate(0px, 0px) translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
};

const CustomCursor: React.FC = () => {
  const { cursorRef, isVisible } = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className={`${CURSOR_STYLES.BASE_CLASS} ${CURSOR_STYLES.SIZE} ${CURSOR_STYLES.COLOR}`}
      style={{
        ...CURSOR_STYLES.INITIAL_POSITION,
        transform: CURSOR_STYLES.getTransform(isVisible),
      }}
    />
  );
};

export default CustomCursor;