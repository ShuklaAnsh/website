import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark as darkStyle,
  oneLight as lightStyle,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { blurbTxt } from "./blurb-txt";
import { useIsDarkMode } from "../../hooks";

export const Blurb = () => {
  const isDarkMode = useIsDarkMode();
  const style = isDarkMode ? darkStyle : lightStyle;

  return (
    <SyntaxHighlighter language="markup" style={style}>
      {blurbTxt}
    </SyntaxHighlighter>
  );
};
