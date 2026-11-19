
import { useState } from 'react'
import './UniversePage.css'

import UNIVERSOS from '../data/universos.json'
import OBRAS from '../data/obras.json'
import WorkCard from '../components/molecules/WorkCard'
import FilterChip from '../components/atoms/FilterChip'

import { obtenerObrasPorUniverso } from '../utils/universos'

function UniversePage({ universeId }) {

  const [format, setFormat] = useState('all')

  // Buscamos el universo seleccionado.
  const universe = UNIVERSOS.find(
    (universo) => universo.id === universeId
  )

  // Si no existe el universo, no mostramos la página.
  if (!universe) {
    return <p>Universe not found.</p>
  }

  // Obtenemos todas las obras de este universo.
  const works = obtenerObrasPorUniverso(universe, OBRAS)

  // Contamos los libros y las películas.
  const booksCount = works.filter(
    (work) => work.formato === 'Libro'
  ).length

  const moviesCount = works.filter(
    (work) => work.formato === 'Película'
  ).length

  // Filtramos las obras según el formato seleccionado.
  const filteredWorks = works.filter((work) => {
    if (format === 'all') return true

    if (format === 'book') return work.formato === 'Libro'

    if (format === 'movie') return work.formato === 'Película'

    return false
  })

  return (
    <main className="universe-page">

      {/* Información del universo */}
      <header className="universe-header">
        <h1>{universe.title}</h1>
        <p>{universe.author}</p>
      </header>

      <section className="universe-content">

        {/* Filtros por formato */}
        <div className="universe-filters">

          <FilterChip
            label="All"
            active={format === 'all'}
            onClick={() => setFormat('all')}
          />

          <FilterChip
            label={`${booksCount} books`}
            active={format === 'book'}
            onClick={() => setFormat('book')}
          />

          <FilterChip
            label={`${moviesCount} movies`}
            active={format === 'movie'}
            onClick={() => setFormat('movie')}
          />

        </div>


        {/* Lista de obras */}
        <div className="universe-list">

          {filteredWorks.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              index={index}
            />
          ))}

          {filteredWorks.length === 0 && (
            <p>No works available in this format.</p>
          )}

        </div>

      </section>
    </main>
  )
}

export default UniversePage
