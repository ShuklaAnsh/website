export interface ICardHeaderProps {
  class?: string;
}

export const CardHeader: React.FC<ICardHeaderProps> = (props) => {
  return (
    <header
      class={`rounded-t-2xl bg-pink-900 p-4 text-lg font-semibold ${props.class}`}
    >
      {props.children}
    </header>
  );
};
