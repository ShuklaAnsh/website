export interface ICardContentProps {
  class?: string;
}

export const CardContent: React.FC<ICardContentProps> = (props) => {
  return <section class={`px-4 py-0 last:pb-4 only:py-4 first:pt-4 ${props.class}`}>{props.children}</section>;
};
