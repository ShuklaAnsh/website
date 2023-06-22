export const Blurb = () => {
  return (
    <pre className="not-prose flex flex-col rounded-md bg-zinc-200 p-4 text-slate-800 dark:bg-slate-800 dark:text-zinc-200">
      <code className="italic text-fuchsia-400">
        {`<!-- `}
        <span className="text-fuchsia-500">TODO:</span>
        {` More meaningful blurb -->`}
      </code>
      <code>
        {`<`}
        <span className="text-pink-600">p </span>
        <span className="text-orange-400">class</span>=
        <span className="text-green-500">"blurb-text"</span>
        {`>`}
      </code>
      <code>{`    Hey! I like coffee. ☕`}</code>
      <code>
        {`</`}
        <span className="text-pink-600">p</span>
        {`>`}
      </code>
    </pre>
  );
};
