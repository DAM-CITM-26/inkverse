# Modelo de datos

La aplicación trabaja con **datos de ejemplo (dummy)** escritos en `src/data/`, sin API ni servidor. Hay cuatro conjuntos de datos, uno por fichero, y todos salen de `js/datos.js` de la referencia.

| Conjunto    | Fichero                | Qué contiene |
|-------------|------------------------|--------------|
| `UNIVERSOS` | `src/data/universos.js` | Sagas o mundos que agrupan varias obras |
| `OBRAS`     | `src/data/obras.js`    | Libros, películas y series |
| `CONTINUAR` | `src/data/continuar.js` | Obras empezadas y su progreso |
| `RESENAS`   | `src/data/resenas.js`  | Opiniones de usuarios sobre las obras |

## Cómo se relacionan

```
UNIVERSOS ──(obras / universoId)── OBRAS ──(obraId)── CONTINUAR
                                      └─────(obraId)── RESENAS
```

- Un universo tiene varias obras. La relación está en los dos sentidos: `UNIVERSOS.obras` lista los `id` de sus obras y cada obra guarda su `universoId`. Los dos tienen que coincidir.
- `CONTINUAR.obraId` y `RESENAS.obraId` apuntan a `OBRAS.id`.

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

## PROGRESO

**Fichero:** `src/data/progreso.js` · **Qué representa:** las obras que la persona tiene a medias.

| Propiedad | Tipo | Ejemplo | Qué es |
|-----------|------|---------|--------|
| `obraId`  | número | `2` | Obra empezada (`OBRAS.id`). No se repite, así que sirve de `key` |
| `progreso` | número | `60` | Porcentaje avanzado, de 0 a 100 |

**Ejemplo:**
```js
{ obraId: 2, progreso: 60 }
```

**Lo usan:** _COMPLETAR._

## RESENAS

**Fichero:** `src/data/resenas.js` · **Qué representa:** una opinión de un usuario sobre una obra.

| Propiedad | Tipo | Ejemplo | Qué es |
|-----------|------|---------|--------|
| `obraId` | número | `5` | Obra reseñada (`OBRAS.id`) |
| `autor` | texto | `"panem_fan"` | Nombre de usuario de quien escribe |
| `texto` | texto | `"La fotografía es preciosa…"` | Contenido de la reseña |
| `spoiler` | booleano | `true` | `true` si la reseña destripa la obra y hay que avisar |

**Ejemplo:**
```js
{ obraId: 5, autor: "panem_fan", texto: "La fotografía es preciosa y la banda sonora acompaña muy bien.", spoiler: false }
```

Las reseñas no tienen `id`. Para la `key` se puede combinar `obraId` y `autor`.

**Lo usan:** _COMPLETAR._