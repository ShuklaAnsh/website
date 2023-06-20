export interface ICardContentProps {
  class?: string;
}

export const CardContent: React.FC<ICardContentProps> = (props) => {
  return <section class={`p-4 ${props.class}`}>{props.children}</section>;
};
