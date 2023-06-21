import { lazy, Suspense } from "react";
import { useIsDarkMode } from "../../hooks";

interface IIconProps {
  name: "envelope" | "github" | "linkedin" | "phone";
  className?: string;
}

export const Icon = (props: IIconProps) => {
  const isDarkMode = useIsDarkMode();
  const LazyIcon = lazy(() => import(`../../assets/${props.name}.svg`));

  return (
    <Suspense
      fallback={
        <i className="inline-block h-5 w-5 animate-pulse rounded-full bg-sky-50 align-middle" />
      }
    >
      <LazyIcon
        className="inline-block h-5 w-5"
        fill={isDarkMode ? "white" : "#333333"}
      />
    </Suspense>
  );
};
