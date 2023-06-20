import React from "preact/compat";
import { CardFooter, ICardFooterProps } from "./card-footer";
import { CardHeader, ICardHeaderProps } from "./card-header";
import { CardContent, ICardContentProps } from "./card-content";

interface ICardProps {
  class?: string;
}

interface CardSubComponents {
  Header: React.FC<ICardHeaderProps>;
  Content: React.FC<ICardContentProps>;
  Footer: React.FC<ICardFooterProps>;
}

export const Card: React.FC<ICardProps> & CardSubComponents = (props) => {
  return (
    <article class={`rounded-xl bg-slate-400 dark:bg-slate-800 ${props.class}`}>
      {props.children}
    </article>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
