import { Gallery } from "../../../components/gallery";
import { Card, Section } from "../..";

export const AboutMeSection = () => (
  <Section id="about-me" header="About Me">
    <Card>
      <Card.Header></Card.Header>
      <Card.Content>
        <p>
          Graduated with Bachelors of Software Engineering in 2021
          <br />
          Business minor
          <br />
          Specialiazation in AI
          <br />
          Interested in xyz in software - Fullstack web dev, but also mobile
        </p>
        <p>
          3D printing & modeling - like holding something I've created
          <br />
          D&D
          <br />
          Photography
          <br />
          Art
        </p>
        <Gallery />
        <p>Values: Sustainability</p>
      </Card.Content>
    </Card>
  </Section>
);
