
import { ChevronRight } from 'lucide-react'

function UniverseCard({ title, worksCount, formatsCount, cover, onClick }) {
  return (
    <button
      className="universe-card"
      type="button"
      onClick={onClick}
      aria-label={`Open ${title} universe`}
    >
      <div
        className="universe-card__thumbnail"
        style={cover ? { backgroundImage: `url(${cover})` } : undefined}
      />

      <div className="universe-card__content">
        <h3 className="universe-card__title">{title}</h3>

        <div className="universe-card__metadata">
          <span>Universe</span>
          <span>·</span>
          <span>{worksCount} works</span>
          <span>·</span>
          <span>{formatsCount} formats</span>
        </div>
      </div>

      <ChevronRight className="universe-card__chevron" size={16} />
    </button>
  )
}

export default UniverseCard
