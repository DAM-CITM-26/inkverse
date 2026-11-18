export function filtrarResenasPorObra(resenas, obraId) {
  return resenas.filter((resena) => resena.obraId === obraId);
}/* Devuelve las reseñas de la obra correspondiente */