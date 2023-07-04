import { useState } from "react";
import { GalleryItem } from "./gallery-item";
import { GalleryExpandButton } from "./gallery-expand-btn";
import BCImg from "../../assets/art/bc.webp";
import OctopusImg from "../../assets/art/octopus.webp";
import RainImg from "../../assets/art/rain.webp";
import WhiskersImg from "../../assets/art/monsiour_whiskers.webp";
import SnekImg from "../../assets/art/snek.webp";
import ShadowsImg from "../../assets/art/shadows.webp";
import { Card } from "..";

export const Gallery = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((curr) => !curr);

  return (
    <Card className="bg-zinc-300 dark:bg-zinc-900">
      <Card.Header className="flex">
        <h3 className="flex-1">Art</h3>
        <GalleryExpandButton isExpanded={expanded} onClick={toggleExpanded} />
      </Card.Header>
      <Card.Content
        className={`overflow-auto transition-[max-height] duration-700 ${
          expanded ? "max-h-[9999px]" : "max-h-[calc(100vh/2)]"
        } `}
      >
        <div class={`not-prose grid grid-cols-2 gap-4`}>
          <div class="grid gap-4">
            <GalleryItem src={BCImg} />
            <GalleryItem src={OctopusImg} />
            <GalleryItem src={RainImg} />
          </div>
          <div class="grid gap-4">
            <GalleryItem src={WhiskersImg} />
            <GalleryItem src={SnekImg} />
            <GalleryItem src={ShadowsImg} />
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};
