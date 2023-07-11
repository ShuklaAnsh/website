import { Link, Icon } from "..";

export const Footer = () => (
  <footer>
    <div className="container mx-auto flex p-4 text-[whitesmoke]">
      <address id="contact-info" className="flex w-fit flex-col space-y-2">
        <Link
          title="GitHub"
          href="https://www.github.com/ShuklaAnsh"
          className="space-x-2"
        >
          <Icon name="github" fill="whitesmoke" />
          <span>github.com/shuklaansh</span>
        </Link>

        <Link
          title="LinkedIn"
          href="https://www.linkedin.com/in/ansh-shukla/"
          className="space-x-2"
        >
          <Icon name="linkedin" fill="whitesmoke" />
          <span>linkedin.com/in/ansh-shukla</span>
        </Link>

        <Link
          title="email"
          href="mailto:contact@anshshukla.dev"
          className="space-x-2"
        >
          <Icon name="envelope" fill="whitesmoke" />
          <span>contact@anshshukla.dev</span>
        </Link>

        <Link
          title="Phone Number"
          href="tel:+12508576459"
          className="space-x-2"
        >
          <Icon name="phone" fill="whitesmoke" />
          <span>+1 (250) 857-6459</span>
        </Link>
      </address>
    </div>
  </footer>
);
