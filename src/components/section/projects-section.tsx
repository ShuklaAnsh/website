import { Card, Badge, Section } from "..";

export const ProjectsSection = () => (
  <Section header="Projects" className="bg-indigo-200 dark:bg-cyan-900">
    <ul className="space-y-4">
      <li>
        <Card>
          <Card.Header>Watch Face</Card.Header>
          <Card.Content>
            <p>
              Although using Android Watch Face Studio allows making beautiful
              watch faces very easy and quick, I wanted a bit more control over
              the implementation.
            </p>
            <p>
              This project is a WearOS Watch Face implemented with Jetpack
              Compose and Kotlin.
            </p>
          </Card.Content>
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
          <Card.Header>Oblex</Card.Header>
          <Card.Content>
            <p>
              The idea for this Android app occurred when I was at the hobby
              store buying more colours for painting my D&D minatures. I found
              this wicked cool post on Instagram of a Frost Giant that I wanted
              to try and recreate. So there I was at the store, trying to colour
              match by comparing the bottle to the picture on my phone, and I
              thought to myself, wouldn't it be nice if I could just sample a
              spot on my picture and it finds the closest paint match?
            </p>
            <p>
              Presenting, Oblex! Named after the D&D monster that can create
              replica's of its victims. The app, written in Kotlin for native
              Android, utilises Material 3 design standards and Jetpack Compose
              to solve this exact problem with pleasant UX.
            </p>
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
          <Card.Content>
            <p>Creatures and Cave, a Dungeon Master's multitool</p>
            <p>
              The project started out as a University project focused on
              architecture, unit testing, and best practices. It is now in the
              process of being completely rewritten with pleasent UX in mind.
            </p>
          </Card.Content>
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
      <li>
        <Card>
          <Card.Header>Splitty</Card.Header>
          <Card.Content>
            Adults need play time too! This app was created, not exactly to
            solve a problem, but to play and learn mobile development. It has
            been inspired by the popular Splitwise app that allows easy
            management of I.O.U.s with your friends, family, etc. Splitty uses
            XML UI design and interacts with Firebase for auth and data storage.
          </Card.Content>
          <Card.Footer className="flex flex-wrap justify-end space-x-2">
            <Badge value="Mobile" />
            <Badge value="Firebase" />
            <Badge value="Android" />
            <Badge value="Kotlin" />
            <Badge value="XML UI" />
          </Card.Footer>
        </Card>
      </li>
    </ul>
  </Section>
);
