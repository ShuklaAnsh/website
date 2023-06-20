import { Badge, Card, Section, Topbar } from "./components";
import profilePic from "./assets/profile.jpg";

export function App() {
  return (
    <div class="flex min-h-screen flex-col scroll-smooth bg-slate-200 text-zinc-800 hover:scroll-auto dark:bg-slate-900 dark:text-zinc-200">
      <Topbar />
      <article class="container mx-auto flex items-center space-x-4 px-4 pt-4">
        <img class="w-32 rounded-full md:w-64" src={profilePic} />
        <aside>Hello, I need coffee.</aside>
      </article>
      <main class="mb-auto">
        <Section header="Skills" class="bg-green-600 dark:bg-indigo-500">
          <Badge.TsBadge />
          <Badge.React />
          <Badge.Dotnet />
          <Badge.Nodejs />
        </Section>
        <Section header="Experience" class="bg-green-300 dark:bg-indigo-900">
          <ul class="space-y-4">
            <li>
              <Card header="Schneider Electric">
                <h1>Full Stack Developer</h1>
                <h3>May 2021 - Present</h3>
                <small>4 months Co-op</small>
                <h4>React, Dotnet, GraphQL, PostgreSQL, TypeScript, C#</h4>
                <p>Worked on a cloud based app</p>
              </Card>
            </li>

            <li>
              <Card header="OK Help">
                <h1>Full Stack Developer</h1>
                <h3>4 months Co-op</h3>
                <h4>React, Nestjs, GraphQL, PostgreSQL, TypeScript, Node.js</h4>
                <p>
                  Worked on a really cool emergency response project for a
                  startup
                </p>
              </Card>
            </li>

            <li>
              <Card header="Quester Tangent">
                <h1>Software Developer</h1>
                <h3>8 months Co-op</h3>
                <h4>Qt, Node.js, C++, JavaScript, HTML, QML</h4>
                <p>
                  Development of a specialized device (a train operator's
                  control panel)
                </p>
              </Card>
            </li>
          </ul>
        </Section>
        <Section header="Projects" class="bg-green-400 dark:bg-indigo-400">
          <ul>
            <li>
              <Card header="Watch" />
            </li>
          </ul>
        </Section>
      </main>
      <footer class="bg-slate-400 dark:bg-slate-800">
        <div class="container mx-auto p-4">Footer</div>
      </footer>
    </div>
  );
}
