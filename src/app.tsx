import {
  Intro,
  AboutMeSection,
  ProjectsSection,
  Topbar,
  ExperienceSection,
  Footer,
  Section,
} from "./components";
import { Notice } from "./components/notice/notice";

export function App() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth bg-verdant-green text-zinc-800 hover:scroll-auto dark:text-zinc-200">
      <Topbar />
      <Intro />
      <Section id="notices" header="Notice Board" disableHeaderFocus>
        <Notice header="Website WIP" type="warning">
          This website is a work in progress. Please excuse any weirdness
          experienced :)
        </Notice>
        <Notice header="Open for Work!" type="info">
          I am moving to Finland in August and am super excited about what life
          brings me next. <a href="#contact-info">Contact me</a> if you'd like
          to get in touch.
        </Notice>
      </Section>
      <main className="mb-auto mt-4 bg-zinc-300 dark:bg-zinc-900">
        <AboutMeSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
