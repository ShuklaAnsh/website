import { IBadgeProps, Badge } from "./badge";

export const SquareBadge = (props: IBadgeProps) => {
  return (
    <Badge className={`rounded-sm ${props.className}`} value={props.value} />
  );
};
