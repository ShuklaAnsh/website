import { useState, useRef } from "react";
import { Card } from "..";
import { GalleryItem } from "./gallery-item";
import { GalleryExpandButton } from "./gallery-expand-btn";
import { GalleryItemGroup } from "./gallery-item-group";

interface IGalleryProps {
  header: string;
}

interface IGallerySubComponents {
  Item: typeof GalleryItem;
  ItemGroup: typeof GalleryItemGroup;
}

export const Gallery: React.FC<IGalleryProps> & IGallerySubComponents = (
  props
) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    cardRef.current?.scrollIntoView({
      behavior: expanded ? "instant" : "smooth",
    });
  };

  return (
    <Card
      ref={cardRef}
      className="scroll-mt-10 bg-zinc-300  dark:bg-zinc-900 md:scroll-mt-14"
    >
      <Card.Header
        className={`${
          expanded ? "sticky top-10 md:top-14" : ""
        } flex bg-zinc-300 dark:bg-zinc-900 `}
      >
        <h3 className="flex-1">{props.header}</h3>
        <GalleryExpandButton isExpanded={expanded} onClick={toggleExpanded} />
      </Card.Header>
      <Card.Content
        className={`overflow-auto transition-[max-height] duration-700 ${
          expanded ? "max-h-[9999px]" : "max-h-[calc(100vh/3)]"
        } `}
      >
        <div class={`not-prose grid grid-cols-2 gap-4`}>{props.children}</div>
      </Card.Content>
    </Card>
  );
};

Gallery.Item = GalleryItem;
Gallery.ItemGroup = GalleryItemGroup;
