interface IGalleryItemProps {
  src: string;
  caption?: string;
  alt?: string;
}

export const GalleryItem = (props: IGalleryItemProps) => (
  <div>
    {props.caption && <caption>{props.caption}</caption>}
    <img
      loading="lazy"
      class="rounded-lg bg-zinc-800 dark:bg-zinc-700"
      width="600px"
      height="600px"
      src={props.src}
      alt={props.alt}
    />
  </div>
);
