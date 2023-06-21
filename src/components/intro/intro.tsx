import { Blurb } from "../blurb";
import profilePicUri from "../../assets/profile.jpg";

export const Intro = () => {
  return (
    <article className="container mx-auto flex flex-col items-center justify-center px-4 pt-4 md:flex-row">
      <img
        loading="lazy"
        className="mx-4 mb-4 h-32 w-32 rounded-full md:h-48 md:w-48"
        src={profilePicUri}
        alt="Ansh Shukla Profile Picture"
      />
      <Blurb />
    </article>
  );
};
