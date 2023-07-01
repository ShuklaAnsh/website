import { useCallback, useState } from "react";
import { useWindowEvent } from "./use-window-event";

interface WindowScrollOptions {
  /** Defaults to -1 */
  updateLimit?: number;
  /** Defaults to 5 */
  steps?: number;
}

const defaultOpts: Required<WindowScrollOptions> = {
  steps: 5,
  updateLimit: -1,
};

export const useWindowScroll = (options?: WindowScrollOptions) => {
  const [scrollState, setScrollState] = useState(0);

  const steps = options?.steps ?? defaultOpts.steps;
  const updateLimit = options?.updateLimit ?? defaultOpts.updateLimit;

  const handleScroll = useCallback(() => {
    const currScroll = Math.round(window.scrollY);
    if (currScroll !== scrollState) {
      if (scrollState !== 0 && updateLimit !== -1 && currScroll > updateLimit) {
        return;
      }
      const dy = Math.abs(currScroll - scrollState);
      if (scrollState === 0 || dy > steps) {
        setScrollState(currScroll);
      }
    }
  }, [scrollState]);

  useWindowEvent("scroll", handleScroll);

  return scrollState;
};
