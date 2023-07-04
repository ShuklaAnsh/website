import { useRef } from "react";
import { JSX } from "preact/jsx-runtime";
import { useOnScreen } from "../../hooks";

interface ISectionProps extends React.PropsWithChildren {
  id: string;
  className?: string;
  header?: JSX.Element | string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMain = useOnScreen(sectionRef, true);

  let headerColour = "text-zinc-500 dark:text-zinc-400";
  if (isMain) headerColour = "text-verdant-green dark:text-verdant-green";

  return (
    <section
      id={props.id}
      className={`scroll-mt-[52px] ${props.className ?? ""}`}
      ref={sectionRef}
    >
      <header
        className={`container mx-auto px-4 pt-4 text-center text-3xl font-semibold transition-colors duration-500 ease-in-out ${headerColour}`}
      >
        {props.header}
      </header>
      <div className="container mx-auto space-y-4 p-4">{props.children}</div>
    </section>
  );
};
