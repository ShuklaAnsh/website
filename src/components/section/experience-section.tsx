import { Card, Link, Badge, Section } from "..";

export const ExperienceSection = () => (
  <Section header="Experience" className="bg-yellow-200 dark:bg-teal-700">
    <ul className="space-y-4">
      <li>
        <Card>
          <Card.Header>
            <Link
              href="https://www.se.com/us/en/product-range/88215214-ecostruxure-energy-hub/#overview"
              title="Page describing the project that my team and I worked on"
            >
              Schneider Electric
            </Link>
            <Badge
              className="float-right bg-green-200 text-black"
              value="Full time"
            />
            <Badge
              className="float-right bg-blue-200 text-black"
              value="4-month co-op"
            />
          </Card.Header>
          <Card.Content>
            <h1 className="text-md font-semibold">Full Stack Developer</h1>
            <h3>Full time since May 2021 - Present</h3>
            <small>4 months Co-op</small>
            <p>Worked on a cloud based app</p>
          </Card.Content>
          <Card.Footer className="flex flex-wrap justify-end space-x-2">
            <Badge.React />
            <Badge.TsBadge />
            <Badge.Dotnet />
            <Badge.Nodejs />
            <Badge value="PostgreSQL" />
            <Badge value="GraphQL" />
            <Badge value="Kafka" />
            <Badge value="Redux" />
          </Card.Footer>
        </Card>
      </li>
      <li>
        <Card>
          <Card.Header>
            <Link
              href="https://www.okhelp.org/"
              title="Landing page for OK Help"
            >
              OK Help
            </Link>
            <Badge
              className="float-right bg-blue-200 text-black"
              value="4-month co-op"
            />
          </Card.Header>
          <Card.Content>
            <h1 className="text-md font-semibold">Full Stack Developer</h1>
            <p>
              Worked on a really cool emergency response project for a startup
            </p>
          </Card.Content>
          <Card.Footer className="flex flex-wrap justify-end space-x-2">
            <Badge.React />
            <Badge.TsBadge />
            <Badge.Dotnet />
            <Badge.Nodejs />
            <Badge value="PostgreSQL" />
            <Badge value="GraphQL" />
            <Badge value="Nestjs" />
          </Card.Footer>
        </Card>
      </li>
      <li>
        <Card>
          <Card.Header>
            <Link
              href="https://www.questertangent.com/"
              title="Landing page for Quester Tangent"
            >
              Quester Tangent
            </Link>
            <Badge
              className="float-right bg-blue-200 text-black"
              value="2 x 4-month co-op"
            />
          </Card.Header>
          <Card.Content>
            <h1 className="text-md font-semibold">Software Developer</h1>
            <p>
              Development of a specialized device (a train operator's control
              panel)
            </p>
          </Card.Content>
          <Card.Footer className="flex flex-wrap justify-end space-x-2">
            <Badge.Nodejs />
            <Badge value="C++" />
            <Badge value="Qt QML" />
            <Badge value="HTML" />
            <Badge value="JavaScript" />
          </Card.Footer>
        </Card>
      </li>
    </ul>
  </Section>
);
