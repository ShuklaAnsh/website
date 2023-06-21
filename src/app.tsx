import { Badge, Card, Icon, Intro, Link, Section, Topbar } from "./components";

export function App() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth bg-zinc-200 text-zinc-800 hover:scroll-auto dark:bg-slate-900 dark:text-zinc-200">
      <Topbar />
      <Intro />
      <main className="mb-auto">
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
                  <h1 className="text-md font-semibold">
                    Full Stack Developer
                  </h1>
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
                  <h1 className="text-md font-semibold">
                    Full Stack Developer
                  </h1>
                  <p>
                    Worked on a really cool emergency response project for a
                    startup
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
                    Development of a specialized device (a train operator's
                    control panel)
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
        <Section header="Projects" className="bg-indigo-200 dark:bg-cyan-900">
          <ul className="space-y-4">
            <li>
              <Card>
                <Card.Header>Watch Face</Card.Header>
                <Card.Footer className="flex flex-wrap justify-end space-x-2">
                  <Badge value="Android" />
                  <Badge value="WearOS" />
                  <Badge value="Kotlin" />
                  <Badge value="Jetpack Compose" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Header>Splitty</Card.Header>
                <Card.Content>
                  Adults need play time too! This app was created, not exactly
                  to solve a problem, but to play and learn mobile development.
                  It was inspired by the popular Splitwise app that allows easy
                  management of I.O.U.s with your friends, family, etc.
                </Card.Content>
                <Card.Footer className="flex flex-wrap justify-end space-x-2">
                  <Badge value="Mobile" />
                  <Badge value="Android" />
                  <Badge value="Kotlin" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Header>Oblex</Card.Header>
                <Card.Content>
                  The idea for this Android app occurred when I was at the hobby
                  store buying more colours for painting my D&D minatures. I
                  found this wicked cool post on Instagram of a Frost Giant that
                  I wanted to try and recreate. So there I was at the store,
                  trying to colour match by comparing the bottle to the picture
                  on my phone, and I thought to myself, wouldn't it be nice if I
                  could just sample a spot on my picture and it finds the
                  closest paint match? Presenting, Oblex! Named after the D&D
                  monster that can create replica's of its victims. The app,
                  written in Kotlin for native Android, utilises Material 3
                  design standards and Jetpack Compose to solve this exact
                  problem with pleasant UX.
                </Card.Content>
                <Card.Footer className="flex flex-wrap justify-end space-x-2">
                  <Badge value="Mobile" />
                  <Badge value="Android" />
                  <Badge value="Kotlin" />
                  <Badge value="Jetpack Compose" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Header>Creatures and Caves</Card.Header>
                <Card.Footer className="flex flex-wrap justify-end space-x-2">
                  <Badge value="Web" />
                  <Badge.React />
                  <Badge.TsBadge />
                  <Badge.Dotnet />
                  <Badge.Nodejs />
                  <Badge value="PostgreSQL" />
                  <Badge value="GraphQL" />
                </Card.Footer>
              </Card>
            </li>
          </ul>
        </Section>
      </main>
      <footer className="bg-zinc-200 dark:bg-slate-800">
        <div className="container mx-auto flex p-4">
          <address className="flex w-fit flex-col space-y-2">
            <Link
              title="GitHub"
              href="https://www.github.com/ShuklaAnsh"
              className="space-x-2"
            >
              <Icon name="github" />
              <span>github.com/shuklaansh</span>
            </Link>

            <Link
              title="LinkedIn"
              href="https://www.linkedin.com/in/ansh-shukla/"
              className="space-x-2"
            >
              <Icon name="linkedin" />
              <span>linkedin.com/in/ansh-shukla</span>
            </Link>

            <Link
              title="email"
              href="mailto:contact@anshshukla.dev"
              className="space-x-2"
            >
              <Icon name="envelope" />
              <span>contact@anshshukla.dev</span>
            </Link>

            <Link
              title="Phone Number"
              href="tel:+12508576459"
              className="space-x-2"
            >
              <Icon name="phone" />
              <span>+1 (250) 857-6459</span>
            </Link>
          </address>
        </div>
      </footer>
    </div>
  );
}
