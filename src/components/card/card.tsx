import { JSX, PropsWithChildren } from "preact/compat";

interface ICardProps {
  class?: string;
  header?: JSX.Element | JSX.Element[] | string;
}

export const Card = (props: PropsWithChildren<ICardProps>) => {
  return (
    <article
      class={`rounded-xl bg-slate-400 p-4 dark:bg-slate-800 ${props.class}`}
    >
      <header class="text-lg font-semibold">{props.header}</header>
      {props.children}
    </article>
  );
};
