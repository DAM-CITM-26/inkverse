
import UniverseCard from '../components/molecules/UniverseCard'

function Home() {
  return (
    <main className="home">
      <section className="seccion">
        <h2>Featured Universes</h2>

        <div className="universe-list">
          <UniverseCard
            title="The Hunger Games"
            worksCount={11}
            formatsCount={2}
          />

          <UniverseCard
            title="Harry Potter"
            worksCount={19}
            formatsCount={2}
          />
        </div>
      </section>

      <section className="seccion">
        <h2>Continue Exploring</h2>
      </section>

      <section className="seccion">
        <h2>Discover Works</h2>
      </section>
    </main>
  )
}

export default Home
