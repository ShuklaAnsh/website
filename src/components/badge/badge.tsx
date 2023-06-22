export interface IBadgeProps {
  value: string;
  className?: string;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <small className={`badge no-prose ${props.className}`}>{props.value}</small>
  );
};

Badge.TsBadge = () => (
  <Badge
    value="TypeScript"
    className="bg-[#007ACC] text-white dark:bg-[#007ACC] dark:text-white"
  />
);

Badge.React = () => (
  <Badge
    value="React"
    className="bg-[#61DBFB] text-slate-800 dark:bg-[#61DBFB] dark:text-slate-800"
  />
);

Badge.Dotnet = () => (
  <Badge
    value="Dotnet"
    className="bg-[#512BD4] text-white dark:bg-[#512BD4] dark:text-white"
  />
);

Badge.Nodejs = () => (
  <Badge
    value="Node.js"
    className="bg-[#333333] text-[#339933] dark:bg-[#333333] dark:text-[#339933]"
  />
);
