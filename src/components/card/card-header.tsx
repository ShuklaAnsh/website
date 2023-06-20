export interface ICardHeaderProps {
  class?: string;
}

export const CardHeader: React.FC<ICardHeaderProps> = (props) => {
  return (
    <header
      class={`rounded-t-xl p-4 first:pb-2 text-lg font-semibold ${props.class}`}
    >
      {props.children}
    </header>
  );
};
