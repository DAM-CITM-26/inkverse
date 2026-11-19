
function WorkCard({ work, index }) {
  return (
    <article className="universe-card">

      {/* Miniatura de la obra */}
      <div
        className="universe-card__thumbnail"
        style={
          work.cover
            ? { backgroundImage: `url(${work.cover})` }
            : undefined
        }
      />

      {/* Información de la obra */}
      <div className="universe-card__content">

        <h3 className="universe-card__title">
          {work.titulo}
        </h3>

        <div className="universe-card__metadata">
          <span>{index + 1}</span>
          <span>·</span>
          <span>{work.anio}</span>
        </div>

      </div>
    </article>
  )
}

export default WorkCard
