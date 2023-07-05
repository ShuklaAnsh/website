import { useState, useEffect, useMemo } from "react";
import { Gallery } from "./gallery";
const photos = import.meta.glob("../../assets/photography/*.webp", {
  as: "url",
});

export const PhotographyGallery = () => {
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImageUrls = async () => {
      let urls: string[] = [];
      for (const key in photos) {
        const loader = photos[key];
        const url = await loader();
        urls.push(url);
      }
      setPhotoUrls(urls);
    };
    getImageUrls();
  }, []);

  let content = useMemo(() => {
    if (photoUrls.length === 0) {
      return (
        <>
          <Gallery.ItemGroup>
            <Gallery.Item.Placeholder />
          </Gallery.ItemGroup>

          <Gallery.ItemGroup>
            <Gallery.Item.Placeholder />
          </Gallery.ItemGroup>
        </>
      );
    } else {
      const groups = [
        photoUrls.slice(0, photoUrls.length / 2),
        photoUrls.slice(photoUrls.length / 2),
      ];
      return groups.map((group, idx) => (
        <Gallery.ItemGroup key={idx}>
          {group.map((url) => (
            <Gallery.Item src={url} />
          ))}
        </Gallery.ItemGroup>
      ));
    }
  }, [photoUrls]);

  return <Gallery header="Photography Gallery">{content}</Gallery>;
};
