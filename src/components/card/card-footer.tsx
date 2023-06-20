export interface ICardFooterProps {
  class?: string;
}

export const CardFooter: React.FC<ICardFooterProps> = (props) => {
  return (
    <footer
      class={`rounded-b-2xl bg-slate-400 p-4 text-lg font-semibold ${props.class}`}
    >
      {props.children}
    </footer>
  );
};
