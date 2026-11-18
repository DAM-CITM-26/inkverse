
import StatusCard from '../molecules/StatusCard'
import UniverseCard from '../molecules/UniverseCard'
import ReviewCard from '../molecules/ReviewCard'
import FeaturedUniverse from '../molecules/FeaturedUniverse'

// Relacionamos cada tipo de JSON con su componente.
const REGISTRY = {
  continueReading: {
    Component: StatusCard,
    listClass: 'home-section__list',
  },

  universe: {
    Component: UniverseCard,
    listClass: 'universe-list',
  },

  review: {
    Component: ReviewCard,
    listClass: 'reviews-list',
  },

  featuredUniverse: {
    Component: FeaturedUniverse,
    listClass: 'home-section__list',
  },
}

export default function SectionHeading({
  title,
  data = [],
  onNavigate,
}) {

  // Si no hay datos, no mostramos la sección.
  if (data.length === 0) return null

  // Obtenemos la clase CSS según el tipo de tarjeta.
  const listClass =
    REGISTRY[data[0].type]?.listClass ?? 'home-section__list'

  return (
    <section className="home-section">

      <h2 className="home-section__title">
        {title}
      </h2>

      <div className={listClass}>

        {data.map(({ id, type, props }) => {

          // Buscamos el componente correspondiente al tipo.
          const entry = REGISTRY[type]

          // Si el tipo no existe, no renderizamos nada.
          if (!entry) {
            console.warn(
              `SectionHeading: tipo desconocido "${type}"`
            )
            return null
          }

          const { Component } = entry

          // Renderizamos el componente con sus propiedades.
          return (
            <Component
              key={id}
              id={id}
              onNavigate={onNavigate}
              {...props}
            />
          )
        })}

      </div>
    </section>
  )
}
