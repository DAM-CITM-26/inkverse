
/**
 * Busca una obra por su ID.
 * Devuelve la obra completa o undefined si no existe.
 */
export function buscarObraPorID(obras, id) {
  return obras.find((obra) => obra.id === id)
}

/**
 * Devuelve las obras que el usuario tiene empezadas.
 * Solo incluye obras con progreso entre 1 y 99.
 */
export function obtenerObrasEnCurso(obras) {
  return obras.filter(
    (obra) => obra.progreso > 0 && obra.progreso < 100
  )
}
