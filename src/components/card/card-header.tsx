export interface ICardHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const CardHeader: React.FC<ICardHeaderProps> = (props) => {
  return (
    <header
      className={`rounded-t-xl p-4 text-lg font-semibold first:pb-2 ${props.className}`}
    >
      {props.children}
    </header>
  );
};
