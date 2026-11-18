
import { useState } from 'react'
import './UniversePage.css'

const works = [
  { id: 1, title: 'The Hunger Games', year: 2008, format: 'book' },
  { id: 2, title: 'Catching Fire', year: 2009, format: 'book' },
  { id: 3, title: 'Mockingjay', year: 2010, format: 'book' },
  { id: 4, title: 'The Ballad of Songbirds and Snakes', year: 2020, format: 'book' },
  { id: 5, title: 'Sunrise on the Reaping', year: 2025, format: 'book' },
  { id: 6, title: 'The Hunger Games', year: 2012, format: 'movie' },
  { id: 7, title: 'Catching Fire', year: 2013, format: 'movie' },
  { id: 8, title: 'Mockingjay – Part 1', year: 2014, format: 'movie' },
  { id: 9, title: 'Mockingjay – Part 2', year: 2015, format: 'movie' },
  { id: 10, title: 'The Ballad of Songbirds and Snakes', year: 2023, format: 'movie' },
]

function UniversePage() {
    const [format, setFormat] = useState('all')

    const filteredWorks =
    format === 'all'
        ? works
        : works.filter((work) => work.format === format)

  return (
    <main className="universe-page">

      <header className="universe-header">
        <h1>The Hunger Games</h1>
        <p>Suzanne Collins</p>
      </header>

      <section className="universe-content">

    <div className="universe-filters">
    <button
        className={format === 'all' ? 'universe-chip active' : 'universe-chip'}
        onClick={() => setFormat('all')}
    >
        All
    </button>

    <button
        className={format === 'book' ? 'universe-chip active' : 'universe-chip'}
        onClick={() => setFormat('book')}
    >
        5 books
    </button>

    <button
        className={format === 'movie' ? 'universe-chip active' : 'universe-chip'}
        onClick={() => setFormat('movie')}
    >
        5 movies
    </button>
    </div>

        <div className="universe-list">
          {filteredWorks.map((work, index) => (
            <article className="universe-card" key={work.id}>
              <div className="universe-card__thumbnail" />

              <div className="universe-card__content">
                <h3 className="universe-card__title">
                  {work.title}
                </h3>

                <div className="universe-card__metadata">
                  <span>{index + 1}</span>
                  <span>·</span>
                  <span>{work.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  )
}

export default UniversePage
