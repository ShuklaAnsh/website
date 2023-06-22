import { Link } from "../..";

interface IExperienceTitleProps {
  href: string;
  description: string;
  position: string;
  company: string;
}

export const ExperienceTitle = (props: IExperienceTitleProps) => (
  <>
    <Link href={props.href} title={props.description}>
      {props.company}
    </Link>
    <small className="ml-2 border-l-[1px] border-zinc-600 pl-2 dark:border-zinc-200">
      {props.position}
    </small>
  </>
);
