/**
 * NavigationIcon
 * Icono de un destino de navegación, con estado seleccionado / no seleccionado.
 *
 * Props:
 *  - icon:     nodo React con el icono (SVG con fill/stroke="currentColor")
 *  - label:    nombre del destino (no se ve; lo leen los lectores de pantalla)
 *  - selected: true = destino activo (círculo naranja detrás del icono)
 *  - onClick:  función al pulsar
 *
 * Contenedor del icono: 30 × 30 px, con el SVG centrado.
 * Estilos en nav.css (clases `.pestanas`, `.nav-icon` y `.activa`).
 */
export default function NavigationIcon({ icon, label, selected = false, onClick }) {
  return (
    <button
      type="button"
      className={selected ? 'activa' : undefined}
      aria-label={label}
      aria-current={selected ? 'page' : undefined}
      onClick={onClick}
    >
      <span className="nav-icon" aria-hidden="true">{icon}</span>
    </button>
  );
}