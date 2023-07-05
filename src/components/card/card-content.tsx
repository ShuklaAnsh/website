export interface ICardContentProps {
  className?: string;
}

export const CardContent: React.FC<ICardContentProps> = (props) => {
  return (
    <section
      className={`px-4 py-0 first:pt-4 last:pb-4 only:py-4 ${props.className}`}
    >
      {props.children}
    </section>
  );
};
