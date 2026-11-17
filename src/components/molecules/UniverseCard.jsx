
import { ChevronRight } from 'lucide-react'

function UniverseCard({ title, worksCount, formatsCount, cover, onClick }) {
  return (
    <li className="universe-list__item">
      <button className="universe-card" onClick={onClick} type="button">
        <div
          className="portada universe-cover"
          style={cover ? { backgroundImage: `url(${cover})` } : undefined}
        />

        <div className="crece">
          <h3>{title}</h3>

          <p className="card-meta">
            Universe&nbsp; · &nbsp;{worksCount} works&nbsp; · &nbsp;{formatsCount} formats
          </p>
        </div>

        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
    </li>
  )
}

export default UniverseCard
