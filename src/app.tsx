import { Section } from "./components";
import profilePic from "./assets/profile.jpg";

export function App() {
  return (
    <div class="flex min-h-screen flex-col bg-slate-200 text-zinc-800 dark:bg-slate-900 dark:text-zinc-200">
      <header class="sticky top-0 bg-slate-400 shadow-md dark:bg-slate-800">
        <nav class="container mx-auto p-4 text-3xl font-bold underline dark:text-pink-500">
          Ansh Shukla
        </nav>
      </header>
      <section class="container px-4 pt-4">
        <img class="w-32 md:w-64" src={profilePic}/>
      </section>
      <main class="mb-auto">
        {Array(20)
          .fill(0)
          .map((_) => (
            <Section header="Header">{Math.round(Math.random() * 100)}</Section>
          ))}
        <Section>Main</Section>
      </main>
      <footer class="bg-slate-400 dark:bg-slate-800">
        <div class="container mx-auto p-4">Footer</div>
      </footer>
    </div>
  );
}
