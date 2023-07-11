import { useState } from "react";
import { Card, Icon } from "..";

export interface INoticeProps {
  type?: "info" | "warning";
  header?: string;
}

export const Notice: React.FC<INoticeProps> = (props) => {
  const [closed, setClosed] = useState(false);

  let className = "";
  let icon = <></>;
  switch (props.type) {
    case "info":
      className = "bg-sky-200 dark:bg-sky-400";
      icon = <Icon name="info" className="relative -top-0.5 mr-2" />;
      break;
    case "warning":
      className = "bg-amber-200  dark:bg-amber-500";
      icon = <Icon name="warning" className="relative -top-0.5 mr-2" />;
      break;
    default:
      className = "bg-green-400 dark:bg-green-800";
  }

  return (
    <Card
      className={`${className} ${
        closed ? "hidden" : ""
      } prose dark:prose-invert`}
    >
      <Card.Header className="flex">
        <h3 className="flex-1">
          {icon}
          {props.header}
        </h3>
        <button
          className="not-prose flex h-4 w-4 items-center justify-center rounded-full bg-black bg-opacity-60 p-4 font-semibold leading-none text-[#333333] hover:font-extrabold dark:text-white"
          onClick={() => setClosed(true)}
        >
          &times;
        </button>
      </Card.Header>
      <Card.Content className="text-[#333333] dark:text-white">
        {props.children}
      </Card.Content>
    </Card>
  );
};
