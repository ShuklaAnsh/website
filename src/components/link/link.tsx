interface ILinkProps {
  href: string;
  title?: string;
  class?: string;
}

export const Link: React.FC<ILinkProps> = (props) => {
  return (
    <a
      target="_blank"
      href={props.href}
      title={props.title}
      class={`underline-offset-4 transition-colors hover:underline hover:brightness-200 ${props.class}`}
    >
      {props.children}
    </a>
  );
};
