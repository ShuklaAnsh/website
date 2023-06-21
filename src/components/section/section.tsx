interface ISectionProps extends React.PropsWithChildren {
  className?: string;
  header?: JSX.Element | JSX.Element[] | string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  return (
    <section className={`first:mt-4 ${props.className}`}>
      <header className="container mx-auto px-4 pt-4 text-xl font-semibold">
        {props.header}
      </header>
      <div className="container mx-auto p-4">{props.children}</div>
    </section>
  );
};
