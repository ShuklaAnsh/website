import { useCallback, useState } from "react";
import { useWindowEvent } from "./use-window-event";

interface WindowScrollOptions {
  threshold: number;
  steps: number;
}

export const useWindowScroll = (
  options: WindowScrollOptions = { threshold: 200, steps: 5 }
) => {
  const [scrollState, setScrollState] = useState(0);

  const handleScroll = useCallback(() => {
    const currScroll = Math.round(window.scrollY);
    if (currScroll > options.threshold) return;

    const dy = Math.abs(currScroll - scrollState);
    if (scrollState === 0 || dy > options.steps) {
      setScrollState(currScroll);
    }
  }, [scrollState]);

  useWindowEvent("scroll", handleScroll);

  return scrollState;
};
