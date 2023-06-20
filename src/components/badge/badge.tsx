interface IBadgeProps {
  value: string;
  class?: string;
}

export const Badge = (props: IBadgeProps) => {
  return (
    <span
      class={`rounded-xl bg-slate-200 px-2 py-0.5 text-xs font-medium text-black shadow dark:bg-yellow-400 ${props.class}`}
    >
      {props.value}
    </span>
  );
};

Badge.TsBadge = () => (
  <Badge
    value="TypeScript"
    class="bg-[#007ACC] text-white dark:bg-[#007ACC] dark:text-white"
  />
);

Badge.React = () => (
  <Badge
    value="React"
    class="bg-[#61DBFB] text-slate-800 dark:bg-[#61DBFB] dark:text-slate-800"
  />
);

Badge.Dotnet = () => (
  <Badge
    value="Dotnet"
    class="bg-[#512BD4] text-white dark:bg-[#512BD4] dark:text-white"
  />
);

Badge.Nodejs = () => (
  <Badge
    value="Node.js"
    class="bg-[#333333] text-[#339933] dark:bg-[#333333] dark:text-[#339933]"
  />
);
