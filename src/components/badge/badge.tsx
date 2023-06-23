export interface IBadgeProps {
  value: string;
  className?: string;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <small className={`badge no-prose ${props.className}`}>{props.value}</small>
  );
};
