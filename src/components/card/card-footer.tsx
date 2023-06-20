export interface ICardFooterProps {
  class?: string;
}

export const CardFooter: React.FC<ICardFooterProps> = (props) => {
  return (
    <footer
      class={`rounded-b-xl p-4 last:pt-2 ${props.class}`}
    >
      {props.children}
    </footer>
  );
};
