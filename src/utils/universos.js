
/**
 * Devuelve las obras que pertenecen a un universo.
 */
export function obtenerObrasPorUniverso(universo, obras) {
  return obras.filter(
    (obra) => obra.universoId === universo.id
  )
}

/**
 * Devuelve los formatos disponibles sin repetirlos.
 */
export function obtenerFormatos(obras) {
  return [
    ...new Set(obras.map((obra) => obra.formato))
  ]
}
