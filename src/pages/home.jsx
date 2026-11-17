
import { useState } from 'react'
import UniverseCard from '../components/molecules/UniverseCard'
import Logo from '../components/atoms/Logo'

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

function ReviewCard({ username, rating, text, spoiler = false, spoilerText = '' }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <article className="review-card">
      <div className="review-card__header">
        <div className="review-card__avatar" />
        <span className="review-card__username">{username}</span>
        <span className="review-card__rating">
          {'★'.repeat(rating)}
          <span>{'☆'.repeat(5 - rating)}</span>
        </span>
      </div>

      <p className="review-card__text">{text}</p>

      {spoiler && (
        <div className="spoiler-box">
          <div className="spoiler-box__heading">
            <span>ⓘ</span>
            <strong>This review may contain spoilers.</strong>
          </div>

          <p className={revealed ? 'spoiler-box__content is-revealed' : 'spoiler-box__content'}>
            {spoilerText}
          </p>

          <button
            className="spoiler-box__button"
            type="button"
            onClick={() => setRevealed(!revealed)}
          >
            {revealed ? 'Hide review' : 'Reveal review'}
          </button>
        </div>
      )}
    </article>
  )
}

function Home() {
  return (
    <main className="home">
      <header className="home__header">
        <Logo />
      </header>

      <div className="home__content">
        <section className="home-hero">
          <h1>What will you read or watch next?</h1>
          <p>Pick up where you left off, or find your next favourite.</p>
        </section>

        <section className="home-section">
          <h2 className="home-section__title">Continue Reading</h2>

          <div className="home-section__list">
            <ContinueReadingItem
              title="Harry Potter and the Prisoner of Azkaban"
              progress={42}
            />

            <ContinueReadingItem
              title="Dune"
              progress={68}
            />
          </div>
        </section>

        <section className="home-section">
          <h2 className="home-section__title">Recommended for You</h2>

          <div className="universe-list">
            <UniverseCard
              title="Harry Potter"
              worksCount={19}
              formatsCount={2}
            />

            <UniverseCard
              title="The Hunger Games"
              worksCount={11}
              formatsCount={2}
            />
          </div>
        </section>

        <section className="home-section">
          <h2 className="home-section__title">Reviews</h2>

          <div className="reviews-list">
            <ReviewCard
              username="AragornFan_NZ"
              rating={4}
              text="An absolute masterpiece of epic fantasy. The world-building and depth of Middle-earth are unmatched."
              spoiler
              spoilerText="I still get goosebumps at the moment Gollum falls into Mount Doom with the One Ring, unwittingly destroying Middle-earth's greatest threat just as Frodo succumbs to its power. An incredible end to a legendary journey."
            />

            <ReviewCard
              username="Mia"
              rating={3}
              text="Dune makes its world feel vast, strange and alive."
            />

            <ReviewCard
              username="WandMaster_99"
              rating={5}
              text="Hogwarts feels like a second home. The evolution of the characters from a magical world filled with childhood wonder to a dark struggle for survival is simply brilliant."
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
