
import Logo from '../components/atoms/Logo'
import HomeHero from '../components/molecules/HomeHero'
import SectionHeading from '../components/navigation/SectionHeading'
import { useNavigate } from 'react-router-dom'

import UNIVERSOS from '../data/universos.json'
import OBRAS from '../data/obras.json'
import RESENAS from '../data/resenas.json'

import {
  prepararObrasEnCurso,
  prepararUniversosDestacados
} from '../utils/home'

function HomePage() {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/universe/${id}`)
  }

  // Preparamos los datos que necesita la página.
  const continueReading = prepararObrasEnCurso(OBRAS)
  const featuredUniverses = prepararUniversosDestacados(UNIVERSOS, OBRAS)

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
          onNavigate={handleNavigate}
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

export default HomePage
