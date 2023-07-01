import { RefObject, useEffect, useState } from "react";

export const useOnScreen = (ref: RefObject<HTMLElement>, pastHalf = false) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: pastHalf ? "-50% 0px -50% 0px" : "0px 0px 0px 0px",
      }
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};
