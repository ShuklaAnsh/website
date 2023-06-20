import { JSX, PropsWithChildren } from "preact/compat";

interface ISectionProps {
  class?: string;
  header?: JSX.Element | JSX.Element[] | string;
}

export const Section = (props: PropsWithChildren<ISectionProps>) => {
  return (
    <section class={`bg-slate-400 first:mt-4 dark:bg-slate-800 ${props.class}`}>
      <header class="container mx-auto px-4 pt-4 text-xl font-semibold">
        {props.header}
      </header>
      <div class="container mx-auto p-4">{props.children}</div>
    </section>
  );
};
