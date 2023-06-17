import { JSX, PropsWithChildren } from "preact/compat";

interface ISectionProps {
  header?: JSX.Element | JSX.Element[] | string
}

export const Section = (props: PropsWithChildren<ISectionProps>) => {
  return (
    <section class="container mx-auto">
      <div class="m-4 rounded-xl bg-slate-400 p-4 dark:bg-slate-800">
        <header class="text-xl font-semibold">{props.header}</header>
        {props.children}
      </div>
    </section>
  );
};
