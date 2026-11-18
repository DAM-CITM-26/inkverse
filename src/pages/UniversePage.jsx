
import { useState } from 'react'
import './UniversePage.css'

import UNIVERSOS from '../data/universos.json'
import OBRAS from '../data/obras.json'

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

          <button
            className={
              format === 'all'
                ? 'universe-chip active'
                : 'universe-chip'
            }
            onClick={() => setFormat('all')}
          >
            All
          </button>

          <button
            className={
              format === 'book'
                ? 'universe-chip active'
                : 'universe-chip'
            }
            onClick={() => setFormat('book')}
          >
            {booksCount} books
          </button>

          <button
            className={
              format === 'movie'
                ? 'universe-chip active'
                : 'universe-chip'
            }
            onClick={() => setFormat('movie')}
          >
            {moviesCount} movies
          </button>

        </div>

        {/* Lista de obras */}
        <div className="universe-list">

          {filteredWorks.map((work, index) => (

            <article
              className="universe-card"
              key={work.id}
            >

              <div className="universe-card__thumbnail" />

              <div className="universe-card__content">

                <h3 className="universe-card__title">
                  {work.titulo}
                </h3>

                <div className="universe-card__metadata">
                  <span>{index + 1}</span>
                  <span>·</span>
                  <span>{work.anio}</span>
                </div>

              </div>

            </article>

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
