export function buscarObraPorID(obras, id){
    /*Recibe la lista de obras y un id, y devuelve la obra completa que tiene ese id
    CONTINUAR, solo guarda el id de la obra, pero la tarjeta necesita título y formato*/
    return obras.find(obra => obra.id === id);
}

export function obtenerObrasEnCurso(continuar, obras){
    return continuar.map((item) => {
        const obra = buscarObraPorID(obras, item.id);
        return obra ? { ...obra, progreso: item.progreso } : null;
    })
    .filter(obra => obra !== null);
} /*La función junta los parámetros de dos listas: la del progreso de cada obra (continuar) y los datos de cada obra, para poder mostrar título de la obra y su progreso*/