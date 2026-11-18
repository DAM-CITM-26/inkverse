import Logo from '../components/atoms/Logo'
import HomeHero from '../components/molecules/HomeHero'
import SectionHeading from '../components/navigation/SectionHeading'
import FEATURED_UNIVERSES from '../data/featuredUniverses.json'
import RESENAS from '../data/resenas.json'
import CONTINUAR from '../data/continuar.json'

function Home({ onNavigate }) {

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

        {/* Mostramos las obras que el usuario tiene empezadas. */}
        <SectionHeading
          title="Continue Reading"
          data={CONTINUAR}
        />

        <SectionHeading
          title="Featured Universe"
          data={FEATURED_UNIVERSES}
          onNavigate={onNavigate}
        />

        <SectionHeading
          title="Recommended for You"
          data={recommended}
        />

        <SectionHeading
          title="Reviews"
          data={RESENAS}
        />
      </div>
    </main>
  )
}

export default Home
