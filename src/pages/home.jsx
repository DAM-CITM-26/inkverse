import UniverseCard from '../components/molecules/UniverseCard'

function Home() {
  return (
    <main className="home">
      <section className="seccion">
        <h2>Featured Universes</h2>

        <UniverseCard
          title="Harry Potter"
          description="Explore the Wizarding World."
          category="Fantasy"
          worksCount={8}
        />
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
