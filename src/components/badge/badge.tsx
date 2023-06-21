interface IBadgeProps {
  value: string;
  className?: string;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <span
      className={`m-1 rounded-xl px-2 py-0.5 text-xs font-medium shadow ${props.className}`}
    >
      {props.value}
    </span>
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
