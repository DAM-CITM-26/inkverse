import StatusCard from "../molecules/StatusCard";
import UniverseCard from "../molecules/UniverseCard";
import ReviewCard from "../molecules/ReviewCard";

// type (como aparecerá en el JSON) -> componente + clase de la lista
const REGISTRY = {
  continueReading: { Component: StatusCard, listClass: 'home-section__list' },
  universe:        { Component: UniverseCard,        listClass: 'universe-list' },
  review:          { Component: ReviewCard,          listClass: 'reviews-list' },
}

export default function SectionHeading({ title, data = [] }) {

    if (data.length === 0) return null

    const listClass = REGISTRY[data[0].type]?.listClass ?? 'home-section__list'

    return (
        <section className="home-section">
            <h2 className="home-section__title">{title}</h2>

            <div className={listClass}>
                {data.map(({ id, type, props }) => {
                    const entry = REGISTRY[type]

                    if (!entry) {
                        console.warn(`SectionHeading: tipo desconocido "${type}"`)
                        return null
                    }

                    const { Component } = entry
                    return <Component key={id} {...props} />
                })}
            </div>
        </section>
    );
}