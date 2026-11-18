import { Heart } from 'lucide-react'
import './FeaturedUniverse.css'

/**
 * Banner del universo destacado de la home.
 *
 * Props:
 * - id: id del universo, se usa para navegar a su página
 * - title: nombre del universo
 * - author: autor o autora
 * - formatsCount: número de formatos disponibles
 * - genres: lista de géneros que se muestran como badges
 * - cover: URL de la imagen de portada (opcional)
 * - isFavorite: si el universo está marcado como favorito
 * - onToggleFavorite: se ejecuta al pulsar el corazón
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
      <button
        className="featured-universe__card"
        type="button"
        onClick={() => onNavigate?.(id)}
        aria-label={`Open ${title} universe`}
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
        {/* Badges de género (span porque dentro de un button solo vale contenido inline) */}
        <span className="featured-universe__badges">
          {genres.map((genre) => (
            <span key={genre} className="featured-universe__badge">
              {genre}
            </span>
          ))}
        </span>

        {/* Título y metadatos */}
        <span className="featured-universe__info">
          <span className="featured-universe__title">{title}</span>

          <span className="featured-universe__meta">
            <span>{author}</span>
            <span>·</span>
            <span>{formatsCount} formats</span>
          </span>
        </span>
      </button>

      {/* Favorito: hermano del botón principal, colocado sobre la esquina */}
      <button
        className="featured-universe__fav"
        type="button"
        onClick={onToggleFavorite}
        aria-label={isFavorite ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
        aria-pressed={isFavorite}
      >
        <Heart size={28} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
    </div>
  )
}

export default FeaturedUniverse