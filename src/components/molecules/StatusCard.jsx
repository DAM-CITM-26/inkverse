
import { ChevronRight } from 'lucide-react'

function StatusCard({ title, type, progress, cover, onClick }) {
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
          <span>{type}</span>
          <span>·</span>
          <span>In progress</span>
          <span>·</span>
          <span>{progress}%</span>
        </div>
      </div>

      <ChevronRight className="card__chevron" size={16} />
    </button>
  )
}

export default StatusCard
