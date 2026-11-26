
/**
 * NavigationIcon
 * Icono de un destino de navegación, con estado seleccionado / no seleccionado.
 */
export default function NavigationIcon({ icon, label, selected = false }) {
  return (
    <span
      className={selected ? 'activa' : undefined}
      aria-label={label}
      aria-current={selected ? 'page' : undefined}
    >
      <span className="nav-icon" aria-hidden="true">
        {icon}
      </span>
    </span>
  )
}
