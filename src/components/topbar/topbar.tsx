import { useWindowScroll } from "../../hooks";

export const Topbar = () => {
  const scrollTop = useWindowScroll({ updateLimit: 200, steps: 5 });

  let bgClass = "";
  let textClass = "";
  if (scrollTop <= 15) {
    bgClass = "bg-transparent";
    textClass += "text-zinc-200";
  } else {
    bgClass = "bg-zinc-200 dark:bg-zinc-900 shadow-md";
    textClass += "text-verdant-green";
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${bgClass}`}
    >
      <nav
        className={`container mx-auto p-2 text-center text-3xl font-bold transition-colors duration-300 md:p-4 ${textClass}`}
      >
        Ansh Shukla
      </nav>
    </header>
  );
};
