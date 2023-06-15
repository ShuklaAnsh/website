import { PropsWithChildren } from "preact/compat";

interface ISectionProps {}

export const Section = (props: PropsWithChildren<ISectionProps>) => {
  return (
    <section class="container mx-auto">
      <div class="m-4 bg-slate-400 p-4 dark:bg-slate-800">{props.children}</div>
    </section>
  );
};
