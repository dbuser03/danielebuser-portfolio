import { CURSOR_STYLES } from "@/constants/customCursor";
import { useCustomCursor } from "../hooks/useCustomCursor";

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