import { useWindowScroll } from "../../hooks";

export const Topbar = () => {
  const scrollTop = useWindowScroll();

  let bgClass = "sticky top-0 transition-all duration-200";
  let textClass =
    "container text-center mx-auto p-2 md:p-4 text-3xl font-bold transition-colors ease-in-out duration-300";
  if (scrollTop <= 15) {
    bgClass += " bg-transparent";
    textClass += "text-pink-500 dark:text-pink:500";
  } else {
    bgClass += " bg-zinc-200 dark:bg-slate-800 shadow-md";
    textClass += " text-stone-600 dark:text-teal-600";
  }

  return (
    <header className={bgClass}>
      <nav className={textClass}>Ansh Shukla</nav>
    </header>
  );
};
