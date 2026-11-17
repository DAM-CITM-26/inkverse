function buscarObraPorID(obras, id){
    /*Recibe la lista de obras y un id, y devuelve la obra completa que tiene ese id
    CONTINUAR, solo guarda el id de la obra, pero la tarjeta necesita título y formato*/
    return obras.find(obra => obra.id === id);
}
