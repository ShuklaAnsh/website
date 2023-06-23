import { Card, Badge, Section, SquareBadge, CommonBadges } from "../..";
import { ExperienceTitle } from "./experience-title";

export const ExperienceSection = () => (
  <Section header="Experience">
    <Card>
      <Card.Header>
        <span className="space-x-2 md:float-right">
          <SquareBadge
            className="bg-emerald-400 text-black"
            value="Full time"
          />
          <SquareBadge
            className="bg-blue-200 text-black"
            value="4-month co-op"
          />
        </span>
        <br className="md:hidden" />
        <ExperienceTitle
          href="https://www.se.com/us/en/product-range/88215214-ecostruxure-energy-hub/#overview"
          description="Page describing the project that my team and I worked on"
          company="Schneider Electric"
          position="Full Stack Developer"
        />
      </Card.Header>
      <Card.Content>
        <small>Full time since May 2021 - Present</small>
        <p>Worked on a cloud based app</p>
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
        <span className="md:float-right">
          <SquareBadge
            className="bg-blue-200 text-black"
            value="4-month co-op"
          />
        </span>
        <br className="md:hidden" />
        <ExperienceTitle
          href="https://www.okhelp.org/"
          description="Landing page for OK Help"
          company="OK Help"
          position="Full Stack Developer"
        />
      </Card.Header>
      <Card.Content>
        <p>Worked on a really cool emergency response project for a startup</p>
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
        <span className="md:float-right">
          <SquareBadge
            className="bg-blue-200 text-black"
            value="2 x 4-month co-op"
          />
        </span>

        <br className="md:hidden" />
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
