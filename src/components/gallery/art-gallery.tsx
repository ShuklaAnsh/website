const photos = import.meta.glob("../../assets/art/*.webp", {
  as: "url",
  eager: true,
});
import { Gallery } from "./gallery";

export const ArtGallery = () => {
  const photoUrls = Object.values(photos);
  const groups = [
    photoUrls.slice(0, photoUrls.length / 2),
    photoUrls.slice(photoUrls.length / 2),
  ];
  const content = groups.map((group, idx) => (
    <Gallery.ItemGroup key={idx}>
      {group.map((url) => (
        <Gallery.Item src={url} />
      ))}
    </Gallery.ItemGroup>
  ));

  return <Gallery header="Art Gallery">{content}</Gallery>;
};
