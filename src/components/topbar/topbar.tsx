import { useWindowScroll } from "../../hooks";

export const Topbar = () => {
  const scrollTop = useWindowScroll();

  let bgClass = "sticky top-0 transition-all duration-200";
  let textClass =
    "container text-center mx-auto p-2 md:p-4 text-3xl font-bold transition-colors duration-300";
  if (scrollTop <= 15) {
    bgClass += " bg-transparent";
    textClass += " text-zinc-200";
  } else {
    bgClass += " bg-zinc-200 dark:bg-zinc-900 shadow-md";
    textClass += " text-verdant-green";
  }

  return (
    <header className={bgClass}>
      <nav className={textClass}>Ansh Shukla</nav>
    </header>
  );
};
