interface IGalleryExpandButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

export const GalleryExpandButton = (props: IGalleryExpandButtonProps) => (
  <button
    className="group rounded-full p-2 text-center"
    onClick={props.onClick}
  >
    <svg width={16} viewBox="0 0 512 512" className="group-hover:scale-110">
      <g
        className={`origin-center ${
          props.isExpanded
            ? ""
            : "-translate-x-[254px] translate-y-[254px] rotate-180"
        } fill-zinc-900 dark:fill-zinc-100`}
      >
        <path d="m72.05 271.95h144c2.2547 0 4.4346 0.30751 6.5004 0.88305 10.12 2.8195 17.5 12.072 17.5 23.117v144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32.1-32c-9.4-9.4-9.4-24.6 0-33.9l87-87-39-39.1c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z" />
      </g>
      <g
        className={`origin-center ${
          props.isExpanded
            ? ""
            : "-translate-y-[254px] translate-x-[254px] rotate-180"
        } fill-zinc-900 dark:fill-zinc-100`}
      >
        <path d="m439.05 7.05c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8h-143.9c-13.3 0-24-10.7-24-24v-143.9c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39z" />
      </g>
    </svg>
  </button>
);
