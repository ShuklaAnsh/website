import { lazy, Suspense } from "react";
import darkStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import lightStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light";
import { blurbTxt } from "./blurb-txt";
import { useIsDarkMode } from "../../hooks";

export const Blurb = () => {
  const SyntaxHighlighter = lazy(
    () => import("react-syntax-highlighter/dist/esm/light-async")
  );
  const isDarkMode = useIsDarkMode();
  const style = isDarkMode ? darkStyle : lightStyle;

  return (
    <Suspense>
      <SyntaxHighlighter language="xml" style={style}>
        {blurbTxt}
      </SyntaxHighlighter>
    </Suspense>
  );
};

export default Blurb;
