import { useWindowScroll } from "../../hooks";

export const Topbar = () => {
  const scrollTop = useWindowScroll();

  let bgClass = "sticky top-0 transition-colors transition-shadow";
  let textClass = "container mx-auto p-4 text-3xl font-bold transition-colors";
  if (scrollTop <= 15) {
    bgClass += " bg-transparent";
    textClass += "text-green-800 dark:text-green-500";
  } else {
    bgClass += " bg-slate-400 dark:bg-slate-800 shadow-md";
    textClass += " text-pink-800 dark:text-pink-500";
  }

  return (
    <header class={bgClass}>
      <nav class={textClass}>Ansh Shukla</nav>
    </header>
  );
};
