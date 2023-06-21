import { CardFooter, ICardFooterProps } from "./card-footer";
import { CardHeader, ICardHeaderProps } from "./card-header";
import { CardContent, ICardContentProps } from "./card-content";

interface ICardProps extends React.PropsWithChildren {
  className?: string;
}

interface CardSubComponents {
  Header: React.FC<ICardHeaderProps>;
  Content: React.FC<ICardContentProps>;
  Footer: React.FC<ICardFooterProps>;
}

export const Card: React.FC<ICardProps> & CardSubComponents = (props) => {
  return (
    <article
      className={`rounded-xl bg-zinc-200 shadow dark:bg-slate-800 ${props.className}`}
    >
      {props.children}
    </article>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
