import Logo from '../components/atoms/Logo'
import HomeHero from '../components/molecules/HomeHero'
import SectionHeading from '../components/navigation/SectionHeading'
import { FEATURED_UNIVERSES } from '../data/featuredUniverses'

function Home() {
  const statusData = [
    {
      id: 1,
      type: 'continueReading',
      props: {
        title: 'Harry Potter and the Prisoner of Azkaban',
        type: 'Book',
        progress: 42,
      },
    },
    {
      id: 2,
      type: 'continueReading',
      props: {
        title: 'Dune',
        type: 'Book',
        progress: 68,
      },
    },
  ]

  const recommended = [
    {
      id: 1,
      type: 'universe',
      props: {
        title: 'Harry Potter',
        worksCount: 19,
        formatsCount: 2,
      },
    },
    {
      id: 2,
      type: 'universe',
      props: {
        title: 'The Hunger Games',
        worksCount: 11,
        formatsCount: 2,
      },
    },
  ]

  const reviews = [
    {
      id: 1,
      type: 'review',
      props: {
        username: 'AragornFan_NZ',
        rating: 4,
        text: 'An absolute masterpiece of epic fantasy. The world-building and depth of Middle-earth are unmatched.',
        spoiler: true,
        spoilerText:
          "I still get goosebumps at the moment Gollum falls into Mount Doom with the One Ring, unwittingly destroying Middle-earth's greatest threat just as Frodo succumbs to its power. An incredible end to a legendary journey.",
      },
    },
    {
      id: 2,
      type: 'review',
      props: {
        username: 'miaaaa123',
        rating: 3,
        text: 'Dune makes its world feel vast, strange and alive.',
        userImage: '/images/mia-pfp.jpg',
      },
    },
    {
      id: 3,
      type: 'review',
      props: {
        username: 'WandMaster_99',
        rating: 5,
        text: 'Hogwarts feels like a second home. The evolution of the characters from a magical world filled with childhood wonder to a dark struggle for survival is simply brilliant.',
      },
    },
  ]

  return (
    <main className="home">
      <header className="home__header">
        <Logo />
      </header>

      <div className="home__content">
        <HomeHero
          title="What will you read or watch next?"
          subtitle="Pick up where you left off, or find your next favourite."
        />

        <SectionHeading
          title="Continue Reading"
          data={statusData}
        />

        <SectionHeading
          title="Featured Universe"
          data={FEATURED_UNIVERSES}
        />

        <SectionHeading
          title="Recommended for You"
          data={recommended}
        />

        <SectionHeading
          title="Reviews"
          data={reviews}
        />
      </div>
    </main>
  )
}

export default Home
