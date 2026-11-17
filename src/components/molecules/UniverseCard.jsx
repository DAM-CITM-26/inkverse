
import { ChevronRight } from 'lucide-react'

function UniverseCard({ title, worksCount, formatsCount, cover, onClick }) {
  return (
    <button
      className="card"
      type="button"
      onClick={onClick}
      aria-label={`Open ${title} universe`}
    >
      <div
        className="card__thumbnail"
        style={cover ? { backgroundImage: `url(${cover})` } : undefined}
      />

      <div className="card__content">
        <h3 className="card__title">{title}</h3>

        <div className="card__metadata">
          <span>Universe</span>
          <span>·</span>
          <span>{worksCount} works</span>
          <span>·</span>
          <span>{formatsCount} formats</span>
        </div>
      </div>

      <ChevronRight className="card__chevron" size={16} />
    </button>
  )
}

export default UniverseCard
