
import UniverseCard from '../components/molecules/UniverseCard'
import Logo from '../components/atoms/Logo'
import HomeHero from '../components/molecules/HomeHero'
import ReviewCard from '../components/molecules/ReviewCard'

function ContinueReadingItem({ title, progress }) {
  return (
    <div className="continue-item">
      <div className="continue-item__thumbnail" />

      <div className="continue-item__content">
        <h3>{title}</h3>
        <p>
          <span>Book</span>
          <span>·</span>
          <span>In progress</span>
          <span>·</span>
          <span>{progress}%</span>
        </p>
      </div>

      <span className="continue-item__chevron">›</span>
    </div>
  )
}

/**
 * SectionHeading
 * Componente que muestra una sección de Home
 * a partir de un título y una lista de elementos.
 *
 * 
 * Props:
 * - title: título de la sección.
 * - data: elementos que se deben mostrar.
 * - type: tipo de contenido de cada elemento.
 */
function SectionHeading({ title, data }) {
  const type = data[0]?.type

  const listClass = {
    continueReading: 'home-section__list',
    universe: 'universe-list',
    review: 'reviews-list',
  }[type]

  return (
    <section className="home-section">
      <h2 className="home-section__title">{title}</h2>

      <div className={listClass}>
        {data.map((item) => {
          switch (item.type) {
            case 'continueReading':
              return (
                <ContinueReadingItem
                  key={item.id}
                  {...item.props}
                />
              )

            case 'universe':
              return (
                <UniverseCard
                  key={item.id}
                  {...item.props}
                />
              )

            case 'review':
              return (
                <ReviewCard
                  key={item.id}
                  {...item.props}
                />
              )

            default:
              return null
          }
        })}
      </div>
    </section>
  )
}

function Home() {
  const statusData = [
    {
      id: 1,
      type: 'continueReading',
      props: {
        title: 'Harry Potter and the Prisoner of Azkaban',
        progress: 42,
      },
    },
    {
      id: 2,
      type: 'continueReading',
      props: {
        title: 'Dune',
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
