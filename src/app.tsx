import {
  Intro,
  ProjectsSection,
  Topbar,
  ExperienceSection,
  Footer,
} from "./components";

export function App() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth bg-verdant-green text-zinc-800 hover:scroll-auto dark:text-zinc-200">
      <Topbar />
      <Intro />
      <main className="mb-auto mt-4 bg-zinc-300 dark:bg-zinc-900">
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
