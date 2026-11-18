
import Logo from '../components/atoms/Logo'
import HomeHero from '../components/molecules/HomeHero'
import SectionHeading from '../components/navigation/SectionHeading'

import UNIVERSOS from '../data/universos.json'
import OBRAS from '../data/obras.json'
import RESENAS from '../data/resenas.json'

import { obtenerObrasEnCurso } from '../utils/obras'
import {
  obtenerObrasPorUniverso,
  obtenerFormatos
} from '../utils/universos'

function Home({ onNavigate }) {

  // Obras que el usuario tiene empezadas.
  const continueReading = obtenerObrasEnCurso(OBRAS)
    .map((obra) => ({
      id: obra.id,
      type: 'continueReading',
      props: {
        title: obra.titulo,
        type: obra.formato === 'Libro' ? 'Book' : 'Movie',
        progress: obra.progreso
      }
    }))

  // Universos destacados.
  const featuredUniverses = UNIVERSOS
    .filter((universo) => universo.featured)
    .map((universo) => {

      // Obtenemos las obras del universo.
      const obrasUniverso = obtenerObrasPorUniverso(
        universo,
        OBRAS
      )

      // Calculamos los formatos diferentes.
      const formatsCount = obtenerFormatos(obrasUniverso).length

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

        {/* Obras que el usuario está leyendo o viendo */}
        <SectionHeading
          title="Continue Reading"
          data={continueReading}
        />

        {/* Universos destacados */}
        <SectionHeading
          title="Featured Universe"
          data={featuredUniverses}
          onNavigate={onNavigate}
        />

        {/* Reseñas de la comunidad */}
        <SectionHeading
          title="Reviews"
          data={RESENAS}
        />

      </div>
    </main>
  )
}

export default Home
