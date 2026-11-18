
import { Heart } from 'lucide-react'
import './FeaturedUniverse.css'

/**
 * Banner del universo destacado de la home.
 *
 * Props:
 * - id: id del universo, se usa para navegar a su página.
 * - title: nombre del universo.
 * - author: autor o autora.
 * - formatsCount: número de formatos disponibles.
 * - genres: lista de géneros.
 * - cover: URL de la portada.
 * - isFavorite: indica si es favorito.
 * - onNavigate: función para navegar al universo.
 * - onToggleFavorite: función para cambiar el favorito.
 */

function FeaturedUniverse({
  id,
  title,
  author,
  formatsCount,
  genres = [],
  cover,
  isFavorite = false,
  onNavigate,
  onToggleFavorite,
}) {
  return (
    <div className="featured-universe">

      {/* Tarjeta principal */}
      <button
        className="featured-universe__card"
        type="button"
        onClick={() => onNavigate?.(id)}
        aria-label={`Open ${title} universe`}
        style={
          cover
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(39, 18, 47, 0.2) 0%, rgba(39, 18, 47, 0.85) 100%), url(${cover})`,
              }
            : undefined
        }
      >

        {/* Géneros */}
        <span className="featured-universe__badges">
          {genres.map((genre) => (
            <span
              key={genre}
              className="featured-universe__badge"
            >
              {genre}
            </span>
          ))}
        </span>

        {/* Información del universo */}
        <span className="featured-universe__info">

          <span className="featured-universe__title">
            {title}
          </span>

          <span className="featured-universe__meta">
            <span>{author}</span>
            <span>·</span>
            <span>{formatsCount} formats</span>
          </span>

        </span>
      </button>

      {/* Botón de favoritos */}
      <button
        className="featured-universe__fav"
        type="button"
        onClick={onToggleFavorite}
        aria-label={
          isFavorite
            ? `Remove ${title} from favourites`
            : `Add ${title} to favourites`
        }
        aria-pressed={isFavorite}
      >
        <Heart
          size={28}
          fill={isFavorite ? 'currentColor' : 'none'}
        />
      </button>

    </div>
  )
}

export default FeaturedUniverse
