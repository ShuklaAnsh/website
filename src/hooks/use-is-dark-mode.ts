import { useEffect, useCallback, useState } from "react";

export const useIsDarkMode = () => {
  const checkIsDarkMode = useCallback(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [isDarkMode, setIsDarkMode] = useState(checkIsDarkMode());

  useEffect(() => {
    const handler = () => {
      setIsDarkMode(checkIsDarkMode());
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handler);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handler);
  }, []);

  return isDarkMode;
};
