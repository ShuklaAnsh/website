interface ILinkProps extends React.PropsWithChildren {
  href: string;
  title?: string;
  className?: string;
}

export const Link: React.FC<ILinkProps> = (props) => {
  return (
    <a
      target="_blank"
      href={props.href}
      title={props.title}
      className={`underline-offset-4 transition-colors hover:underline hover:brightness-200 ${props.className}`}
    >
      {props.children}
    </a>
  );
};