import { forwardRef } from "react";
import { CardHeader } from "./card-header";
import { CardFooter } from "./card-footer";
import { CardContent } from "./card-content";

interface ICardProps extends React.PropsWithChildren {
  className?: string;
}

const CardComponent = forwardRef<HTMLElement, ICardProps>((props, ref) => {
  return (
    <article
      ref={ref}
      className={`prose prose-zinc mx-auto w-full rounded-xl bg-zinc-200 shadow dark:prose-invert dark:bg-zinc-800 ${props.className}`}
    >
      {props.children}
    </article>
  );
});

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});
