import { useState, useEffect } from "react";
import { CursorPosition } from "@/types/context/cursorContext";

let globalMousePosition = { x: -8, y: -8 };
let isFirstPageLoad = true;

export const useCursorState = () => {
  const [position, setPosition] = useState<CursorPosition>(globalMousePosition);
  const [isFirstLoad, setIsFirstLoad] = useState(isFirstPageLoad);

  useEffect(() => {
    globalMousePosition = position;
  }, [position]);

  useEffect(() => {
    if (isFirstPageLoad) {
      isFirstPageLoad = false;
      setIsFirstLoad(false);
    }
  }, []);

  return { position, setPosition, isFirstLoad };
};
