import { CommonBadges, Badge, Card, Section } from "../..";
import { ExperienceTitle } from "./experience-title";

export const ExperienceSection = () => (
  <Section id="experience" header="Experience">
    <Card>
      <Card.Header>
        <ExperienceTitle
          href="https://www.se.com/us/en/product-range/88215214-ecostruxure-energy-hub/#overview"
          description="Page describing the project that my team and I worked on"
          company="Schneider Electric"
          position="Full Stack Developer"
        />
      </Card.Header>
      <Card.Content>
        <p>
          I've been working with Schneider Electric as a{" "}
          <b>Full Stack Software Developer</b> since I graduated at the end of
          April 2021. I had also worked at Schneider as a co-op on a 4-month
          work term from Jan-April 2020. My team and I have been developing{" "}
          <b>micro-frontends</b>, written in <b>React TypeScript</b>, and
          backend <b>micro-services</b>, written in <b>Dotnet C#</b>, for an
          energy management <b>Cloud-based SaaS</b> product. Everything was
          containerized using <b>Docker</b> and hosted on <b>Microsoft Azure</b>
          .
        </p>
        <p>
          After graduating, I didn't even second guess applying to work at
          Schneider. My time as a co-op there was one of the best work terms I
          had since the team truely treated me as a part of the team and threw
          me straight into the deep end and have guided me into the developer I
          am today.
        </p>
        <p>
          My responsibilities: - FE, BE, Shared Libs, loc, teaching, mentoring
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        {CommonBadges.React}
        {CommonBadges.TypeScript}
        <Badge value="Redux" className="bg-[#764ABC] text-white" />
        {CommonBadges.Nodejs}
        {CommonBadges.Dotnet}
        <Badge value="Kafka" className="bg-zinc-900 text-white" />
        {CommonBadges.GraphQL}
        {CommonBadges.Postgres}
        {CommonBadges.Docker}
      </Card.Footer>
    </Card>

    <Card>
      <Card.Header>
        <ExperienceTitle
          href="https://www.okhelp.org/"
          description="Landing page for OK Help"
          company="OK Help"
          position="Full Stack Developer"
        />
      </Card.Header>
      <Card.Content>
        <p>
          "OK Help" was a project at a small startup, based in Victoria, BC,
          that I had the pleasure to work on as part of a 4 month co-op work
          term. The goal of "OK Help" is to aid their clients in being prepared
          for emergency situations.
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        {CommonBadges.React}
        {CommonBadges.TypeScript}
        <Badge
          value="Nestjs"
          className="bg-[#ED1543] text-white dark:bg-white dark:text-[#ED1543]"
        />
        {CommonBadges.Nodejs}
        {CommonBadges.Dotnet}
        {CommonBadges.GraphQL}
        {CommonBadges.Postgres}
      </Card.Footer>
    </Card>

    <Card>
      <Card.Header>
        <ExperienceTitle
          href="https://www.questertangent.com/"
          description="Landing page for Quester Tangent"
          company="Quester Tangent"
          position="Software Developer"
        />
      </Card.Header>
      <Card.Content>
        <p>
          Development of a specialized device (a train operator's control panel)
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        <Badge value="JavaScript" className="bg-[#FCDC00] text-zinc-800" />
        <Badge value="HTML" className="bg-[#E54B20] text-white" />
        {CommonBadges.Nodejs}
        <Badge value="C++" className="bg-[#004487] text-white" />
        <Badge value="Qt QML" className="bg-[#3EBA4C] text-white" />
      </Card.Footer>
    </Card>
  </Section>
);
