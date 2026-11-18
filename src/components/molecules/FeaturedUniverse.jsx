import { Heart } from 'lucide-react'
import './FeaturedUniverse.css'

/**
 * Banner del universo destacado de la home.
 *
 * Props:
 * - title: nombre del universo
 * - author: autor o autora
 * - formatsCount: número de formatos disponibles
 * - genres: lista de géneros que se muestran como badges
 * - cover: URL de la imagen de portada (opcional)
 * - isFavorite: si el universo está marcado como favorito
 * - onClick: se ejecuta al abrir el universo
 * - onToggleFavorite: se ejecuta al pulsar el corazón
 */
function FeaturedUniverse({
  title,
  author,
  formatsCount,
  genres = [],
  cover,
  isFavorite = false,
  onClick,
  onToggleFavorite,
}) {
  return (
    <article
      className="featured-universe"
      // Con portada: degradado oscuro encima para que el texto se lea bien.
      // Sin portada: se queda el degradado morado definido en el CSS.
      style={
        cover
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(39, 18, 47, 0.2) 0%, rgba(39, 18, 47, 0.85) 100%), url(${cover})`,
            }
          : undefined
      }
    >
      {/* Parte superior: badges de género + botón de favorito */}
      <div className="featured-universe__top">
        <ul className="featured-universe__badges">
          {genres.map((genre) => (
            <li key={genre} className="featured-universe__badge">
              {genre}
            </li>
          ))}
        </ul>

        {/* aria-pressed indica a lectores de pantalla si está activo */}
        <button
          className="featured-universe__fav"
          type="button"
          onClick={onToggleFavorite}
          aria-label={isFavorite ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
          aria-pressed={isFavorite}
        >
          {/* Corazón relleno si es favorito, solo contorno si no */}
          <Heart size={28} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Parte inferior: título y metadatos */}
      <div className="featured-universe__info">
        <h3 className="featured-universe__title">
          {/*
            El título es el botón que abre el universo. Su ::after (ver CSS)
            se estira por toda la card, así que cualquier clic la abre sin
            anidar un botón dentro de otro (HTML inválido).
          */}
          <button
            className="featured-universe__open"
            type="button"
            onClick={onClick}
            aria-label={`Open ${title} universe`}
          >
            {title}
          </button>
        </h3>

        <p className="featured-universe__meta">
          <span>{author}</span>
          <span>·</span>
          <span>{formatsCount} formats</span>
        </p>
      </div>
    </article>
  )
}

export default FeaturedUniverse