
/**
 * Devuelve las reseñas de una obra concreta.
 */
export function filtrarResenasPorObra(resenas, obraId) {
  return resenas.filter(
    (resena) => resena.obraId === obraId
  )
}
