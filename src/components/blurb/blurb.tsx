export const Blurb = () => {
  return (
    <pre className="not-prose flex flex-col rounded-md bg-zinc-100 p-4 text-slate-800 dark:bg-zinc-800 dark:text-slate-200">
      <code className="italic text-fuchsia-300 opacity-75">
        {`<!-- `}
        <span className="text-fuchsia-400">TODO:</span>
        {` More meaningful blurb -->`}
      </code>
      <code>
        {`<`}
        <span className="text-pink-400">p </span>
        <span className="text-orange-400">class</span>=
        <span className="text-green-500">"blurb-text"</span>
        {`>`}
      </code>
      <code>{`    Hey! I like coffee. ☕`}</code>
      <code>
        {`</`}
        <span className="text-pink-400">p</span>
        {`>`}
      </code>
    </pre>
  );
};

export default Blurb;
