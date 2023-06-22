import {
  Icon,
  Intro,
  Link,
  ProjectsSection,
  Topbar,
  ExperienceSection,
} from "./components";

export function App() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth bg-zinc-200 text-zinc-800 hover:scroll-auto dark:bg-slate-900 dark:text-zinc-200">
      <Topbar />
      <Intro />
      <main className="mb-auto">
        <ExperienceSection />
        <ProjectsSection />
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
