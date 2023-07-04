import { Card, Badge, Section, CommonBadges } from "../..";

export const ProjectsSection = () => (
  <Section id="projects" header="Projects">
    <Card>
      <Card.Header>
        <h4>Watch Face</h4>
      </Card.Header>
      <Card.Content>
        <p>
          Although using Android Watch Face Studio allows making beautiful watch
          faces very easy and quick, I wanted a bit more control over the
          implementation.
        </p>
        <p>
          This project is a WearOS Watch Face implemented with Jetpack Compose
          and Kotlin.
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        {CommonBadges.Android}
        {CommonBadges.Kotlin}
        <Badge value="Jetpack Compose" />
        <Badge value="WearOS" />
      </Card.Footer>
    </Card>

    <Card>
      <Card.Header>
        <h4>Oblex</h4>
      </Card.Header>
      <Card.Content>
        <p>
          The idea for this Android app occurred when I was at the hobby store
          buying more colours for painting my D&D minatures. I found this wicked
          cool post on Instagram of a Frost Giant that I wanted to try and
          recreate. So there I was at the store, trying to colour match by
          comparing the bottle to the picture on my phone, and I thought to
          myself, wouldn't it be nice if I could just sample a spot on my
          picture and it finds the closest paint match?
        </p>
        <p>
          Presenting, Oblex! Named after the D&D monster that can create
          replica's of its victims. The app, written in Kotlin for native
          Android, utilises Material 3 design standards and Jetpack Compose to
          solve this exact problem with pleasant UX.
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        {CommonBadges.Android}
        {CommonBadges.Kotlin}
        <Badge value="Jetpack Compose" />
        <Badge value="Mobile" />
      </Card.Footer>
    </Card>

    <Card>
      <Card.Header>
        <h4>Creatures and Caves</h4>
      </Card.Header>
      <Card.Content>
        <p>Creatures and Caves, a Dungeon Master's multitool</p>
        <p>
          The project started out as a University project focused on
          architecture, unit testing, and best practices. It is now in the
          process of being completely rewritten with pleasent UX in mind.
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        {CommonBadges.React}
        {CommonBadges.TypeScript}
        {CommonBadges.Nodejs}
        {CommonBadges.Dotnet}
        {CommonBadges.Docker}
        {CommonBadges.GraphQL}
        {CommonBadges.Postgres}
      </Card.Footer>
    </Card>

    <Card>
      <Card.Header>
        <h4>Splitty</h4>
      </Card.Header>
      <Card.Content>
        <p>
          This app was created, not exactly to solve a problem, but to play and
          learn mobile development. It was inspired by the Splitwise app that
          allows easy management of I.O.U.s with your friends, family, etc.
        </p>
        <p>
          Splitty uses XML UI design and interacts with Firebase for auth and
          data storage.
        </p>
      </Card.Content>
      <Card.Footer className="flex flex-wrap justify-end space-x-2">
        {CommonBadges.Android}
        {CommonBadges.Kotlin}
        {CommonBadges.Firebase}
        <Badge value="XML UI" />
        <Badge value="Mobile" />
      </Card.Footer>
    </Card>
  </Section>
);
