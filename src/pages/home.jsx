
import Logo from '../components/atoms/Logo'
import HomeHero from '../components/molecules/HomeHero'
import SectionHeading from '../components/navigation/SectionHeading'

import UNIVERSOS from '../data/universos.json'
import OBRAS from '../data/obras.json'
import RESENAS from '../data/resenas.json'

function Home({ onNavigate }) {

  // Obras que el usuario tiene empezadas.
  const continueReading = OBRAS
    .filter((obra) => obra.progreso > 0 && obra.progreso < 100)
    .map((obra) => {

      return {
        id: obra.id,
        type: 'continueReading',
        props: {
          title: obra.titulo,
          type: obra.formato === 'Libro' ? 'Book' : 'Movie',
          progress: obra.progreso
        }
      }
    })

  // Universos destacados.
  const featuredUniverses = UNIVERSOS
    .filter((universo) => universo.featured)
    .map((universo) => {

      const obrasUniverso = OBRAS.filter(
        (obra) => obra.universoId === universo.id
      )

      const formatsCount = new Set(
        obrasUniverso.map((obra) => obra.formato)
      ).size

      return {
        id: universo.id,
        type: 'featuredUniverse',
        props: {
          title: universo.title,
          author: universo.author,
          formatsCount,
          genres: universo.genres,
          cover: universo.cover,
          isFavorite: universo.isFavorite
        }
      }
    })

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
          data={continueReading}
        />

        <SectionHeading
          title="Featured Universe"
          data={featuredUniverses}
          onNavigate={onNavigate}
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
