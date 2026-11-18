export function obtenerObrasPorUniverso(universo, obras){
    return obras.filter(obra => obra.universoId === universo.id);
} /*La función recibe un universo y la lista de obras, y devuelve solo las obras que pertenecen a ese universo*/

export function obtenerFormatos(obras){
    return [...new Set(obras.map((obra) => obra.formato))];
} /*Devuelve los formatos disponibles de cada obra sin repetirlos*/