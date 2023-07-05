export interface ICardHeaderProps {
  className?: string;
}

export const CardHeader: React.FC<ICardHeaderProps> = (props) => {
  return (
    <header
      className={`rounded-t-xl p-4 first:pb-2 prose-headings:m-0 prose-a:no-underline ${props.className}`}
    >
      {props.children}
    </header>
  );
};
