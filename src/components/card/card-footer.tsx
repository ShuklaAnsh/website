export interface ICardFooterProps {
  className?: string;
}

export const CardFooter: React.FC<ICardFooterProps> = (props) => {
  return (
    <footer className={`rounded-b-xl p-4 last:pt-2 ${props.className}`}>
      {props.children}
    </footer>
  );
};
