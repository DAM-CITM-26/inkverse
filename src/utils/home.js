
import { obtenerObrasEnCurso } from './obras'
import {
  obtenerObrasPorUniverso,
  obtenerFormatos
} from './universos'

// Prepara las obras que el usuario tiene empezadas para mostrarlas en Home.
export function prepararObrasEnCurso(obras) {
  return obtenerObrasEnCurso(obras).map((obra) => ({
    id: obra.id,
    type: 'continueReading',
    props: {
      title: obra.titulo,
      type: obra.formato === 'Libro' ? 'Book' : 'Movie',
      progress: obra.progreso
    }
  }))
}

// Prepara los universos destacados para mostrarlos en Home.
export function prepararUniversosDestacados(universos, obras) {
  return universos
    .filter((universo) => universo.featured)
    .map((universo) => {
      const obrasUniverso = obtenerObrasPorUniverso(universo, obras)
      const formatsCount = obtenerFormatos(obrasUniverso).length

      return {
        id: universo.id,
        type: 'featuredUniverse',
        props: {
          title: universo.title,
          author: universo.author,
          formatsCount,
          genres: universo.genres,
          cover: universo.cover,
          isFavorite: universo.isFavorite
        }
      }
    })
}
