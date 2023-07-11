import { useRef } from "react";
import { useOnScreen } from "../../hooks";

interface ISectionProps extends React.PropsWithChildren {
  id: string;
  className?: string;
  header?: string;
  disableHeaderFocus?: boolean;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMain = useOnScreen(sectionRef, true);

  let headerColor = "text-zinc-500 dark:text-zinc-400";
  if (!props.disableHeaderFocus && isMain)
    headerColor = "text-verdant-green dark:text-verdant-green";

  return (
    <section
      id={props.id}
      className={`scroll-mt-[52px] ${props.className ?? ""}`}
      ref={sectionRef}
    >
      <header
        className={`container mx-auto px-4 pt-4 text-center text-3xl font-semibold transition-colors duration-500 ease-in-out ${headerColor}`}
      >
        {props.header}
      </header>
      <div className="container mx-auto space-y-4 p-4">{props.children}</div>
    </section>
  );
};
