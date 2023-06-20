import { Badge, Card, Section, Topbar } from "./components";
import profilePic from "./assets/profile.jpg";

export function App() {
  return (
    <div class="flex min-h-screen flex-col scroll-smooth bg-zinc-200 text-zinc-800 hover:scroll-auto dark:bg-slate-900 dark:text-zinc-200">
      <Topbar />
      <article class="container mx-auto flex items-center space-x-4 px-4 pt-4">
        <img class="w-32 rounded-full md:w-64" src={profilePic} />
        <aside>Hello, I need coffee.</aside>
      </article>
      <main class="mb-auto">
        <Section header="Experience" class="bg-yellow-200 dark:bg-teal-700">
          <ul class="space-y-4">
            <li>
              <Card>
                <Card.Header>
                  Schneider Electric{" "}
                  <Badge
                    class="float-right bg-green-200 text-black"
                    value="Full time"
                  />
                  <Badge
                    class="float-right bg-blue-200 text-black"
                    value="4-month co-op"
                  />
                </Card.Header>
                <Card.Content>
                  <h1 class="text-md font-semibold">Full Stack Developer</h1>
                  <h3>Full time since May 2021 - Present</h3>
                  <small>4 months Co-op</small>
                  <p>Worked on a cloud based app</p>
                </Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
                  <Badge.React />
                  <Badge.TsBadge />
                  <Badge.Dotnet />
                  <Badge.Nodejs />
                  <Badge value="PostgreSQL" />
                  <Badge value="GraphQL" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Header>
                  OK Help{" "}
                  <Badge
                    class="float-right bg-blue-200 text-black"
                    value="4-month co-op"
                  />
                </Card.Header>
                <Card.Content>
                  <h1 class="text-md font-semibold">Full Stack Developer</h1>
                  <p>
                    Worked on a really cool emergency response project for a
                    startup
                  </p>
                </Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
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
                  Quester Tangent{" "}
                  <Badge
                    class="float-right bg-blue-200 text-black"
                    value="2 x 4-month co-op"
                  />
                </Card.Header>
                <Card.Content>
                  <h1 class="text-md font-semibold">Software Developer</h1>
                  <p>
                    Development of a specialized device (a train operator's
                    control panel)
                  </p>
                </Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
                  <Badge.Nodejs />
                  <Badge value="C++" />
                  <Badge value="Qt" />
                  <Badge value="QML" />
                  <Badge value="HTML" />
                  <Badge value="JavaScript" />
                </Card.Footer>
              </Card>
            </li>
          </ul>
        </Section>
        <Section header="Projects" class="bg-indigo-200 dark:bg-cyan-900">
          <ul class="space-y-4">
            <li>
              <Card>
                <Card.Content>Watch Face</Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
                  <Badge value="Android" />
                  <Badge value="WearOS" />
                  <Badge value="Kotlin" />
                  <Badge value="Jetpack Compose" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Content>Splitty</Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
                  <Badge value="Android" />
                  <Badge value="Kotlin" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Content>Oblex</Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
                  <Badge value="Android" />
                  <Badge value="Kotlin" />
                  <Badge value="Jetpack Compose" />
                </Card.Footer>
              </Card>
            </li>

            <li>
              <Card>
                <Card.Content>Creatures and Caves</Card.Content>
                <Card.Footer class="flex flex-wrap justify-end space-x-2">
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
      <footer class="bg-zinc-200 dark:bg-slate-800">
        <div class="container mx-auto p-4">
          <address class="flex flex-col">
            <span>
              GitHub:{" "}
              <a href="https://www.github.com/ShuklaAnsh">
                github.com/shuklaansh
              </a>
            </span>
            <span>
              Email:{" "}
              <a href="mailto:contact@anshshukla.dev">contact@anshshukla.dev</a>
            </span>
            <span>
              Phone: <a href="tel:+12508576459">+1 (250) 857-6459</a>
            </span>
          </address>
        </div>
      </footer>
    </div>
  );
}
