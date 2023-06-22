import { JSX } from "preact/jsx-runtime";

interface ISectionProps extends React.PropsWithChildren {
  className?: string;
  header?: JSX.Element | string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  return (
    <section className={`${props.className}`}>
      <header className="container mx-auto px-4 pt-4 text-center text-3xl font-semibold text-zinc-500 dark:text-zinc-400">
        {props.header}
      </header>
      <div className="container mx-auto space-y-4 p-4">{props.children}</div>
    </section>
  );
};
