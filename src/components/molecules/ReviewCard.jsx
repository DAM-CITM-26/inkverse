
import { useState } from 'react'

/**
 * ReviewCard
 * Tarjeta reutilizable para mostrar una reseña.
 *
 * Props:
 *  - username: nombre del usuario.
 *  - rating: puntuación de 1 a 5.
 *  - text: texto principal de la reseña.
 *  - userImage: fotografía del usuario (opcional).
 *  - spoiler: indica si contiene spoilers.
 *  - spoilerText: contenido oculto de la reseña.
 *
 * Recursos predeterminados:
 *  - /images/user_pfp.svg
 *  - /images/star.svg
 *  - /images/alert-triangle.svg
 */

export default function ReviewCard({
  username,
  rating,
  text,
  userImage = '/images/user-pfp.svg',
  spoiler = false,
  spoilerText = '',
}) {
  const [revealed, setRevealed] = useState(false)

  return (
    <article className="review-card">
      <div className="review-card__header">

        {/* Avatar del usuario.
            Si userImage no viene en las props, utiliza la imagen predeterminada.
            Si la imagen personalizada falla al cargar, también utiliza el avatar predeterminado. */}
        <img
          className="review-card__avatar"
          src={userImage}
          alt={`${username}'s profile`}
          onError={(e) => {
            // Evita un bucle infinito si también falla la imagen predeterminada.
            e.currentTarget.onerror = null

            // Sustituye la imagen que ha fallado por el avatar por defecto.
            e.currentTarget.src = '/images/user-pfp.svg'
          }}
        />

        <span className="review-card__username">
          {username}
        </span>

        <div
        className="review-card__rating"
        role="img"
        aria-label={`${rating} de 5 estrellas`}
        >
        {Array.from({ length: 5 }, (_, index) => (
            <span
            key={index}
            className={
                index < rating
                ? 'review-card__star review-card__star--filled'
                : 'review-card__star review-card__star--empty'
            }
            >
            {index < rating ? '★' : '☆'}
            </span>
        ))}
        </div>
      </div>

      <p className="review-card__text">{text}</p>

      {spoiler && (
        <div className="spoiler-box">
          <div className="spoiler-box__heading">
            <img
              src="/images/alert-triangle.svg"
              alt=""
              className="spoiler-box__icon"
            />

            <strong>This review may contain spoilers.</strong>
          </div>

          <p
            className={
              revealed
                ? 'spoiler-box__content is-revealed'
                : 'spoiler-box__content'
            }
          >
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
