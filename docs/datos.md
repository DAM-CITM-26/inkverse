# Modelo de datos

## UNIVERSOS

**Fichero:** `src/data/universos.js` · **Qué representa:** una saga o mundo (Harry Potter, Dune…) que reúne sus libros, películas y series.

Propiedad | Tipo | Ejemplo | Qué es |
|---------|------|---------|--------|
| `id` | número | `1` | Identificador único (se usa como `key`) |
| `nombre` | texto | `"Harry Potter"` | Nombre del universo |
| `descripcion` | texto | `"El mundo mágico en papel, en el cine y en la escena."` | Frase que lo presenta |
| `color` | texto (hex) | `"#4B3A8C"` | Color propio del universo |
| `obras` | lista de números | `[7, 8, 9, 10]` | `id` de las obras de este universo (`OBRAS.id`)

`obras` es un array de `id` de obras que pertenecen a este universo.

**Ejemplo:**
```js
{ id: 2, nombre: "Harry Potter", descripcion: "El mundo mágico en papel, en el cine y en la escena.", color: "#4B3A8C", obras: [7, 8, 9, 10] }
```

**Lo usan:** _COMPLETAR con los componentes de `docs/componentes.md` que reciben un universo por props

## OBRAS

**Fichero:** `src/data/obras.js` · **Qué representa:** cada libro, película o serie.

Propiedad | Tipo   | Ejemplo | Qué es |
|---------|--------|---------|--------|
| `id`    | número | `5`     | Identificador único (se usa como `key`) |
| `titulo` | texto | `"En llamas"` | Título de la obra |
| `formato` | texto | `"Película"` | Uno de: `"Libro"`, `"Película"`, `"Serie"` |
| `anio` | número | `2013` | Año de publicación o estreno |
| `universoId` | número | `1` | Universo al que pertenece (`UNIVERSOS.id`) |
| `fidelity` | número o `null` | `88` | COMPLETAR: qué mide (de 0 a 100). Es `null` en los libros y en las obras sin valorar

**Ejemplo:**
```js
{ id: 2, nombre: "Harry Potter", descripcion: "El mundo mágico en papel, en el cine y en la escena.", color: "#4B3A8C", obras: [7, 8, 9, 10] }
```

**Lo usan:** _COMPLETAR con los componentes de `docs/componentes.md` que reciben un universo por props._