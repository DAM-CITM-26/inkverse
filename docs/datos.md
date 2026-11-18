
# Modelo de datos

La aplicación trabaja con datos de ejemplo (dummy) escritos en `src/data/`, sin API ni servidor. Los datos están separados en ficheros JSON para facilitar su futura conexión con una API.

| Conjunto | Fichero | Qué contiene |
|---|---|---|
| `UNIVERSOS` | `src/data/universos.json` | Sagas o mundos que agrupan varias obras |
| `OBRAS` | `src/data/obras.json` | Libros, películas y series |
| `CONTINUAR` | `src/data/continuar.json` | Obras empezadas y su progreso |
| `RESENAS` | `src/data/resenas.json` | Opiniones de usuarios sobre las obras |

Los conjuntos que alimentan directamente los componentes pueden utilizar una estructura común con `id`, `type` y `props`. Esto permite identificar qué componente se debe mostrar y qué propiedades necesita.

## Cómo se relacionan

```text
UNIVERSOS ──(obras / universoId)── OBRAS
                                      ├──(obraId)── CONTINUAR
                                      └──(obraId)── RESENAS
```

- Un universo tiene varias obras. La relación está en los dos sentidos: `UNIVERSOS.obras` lista los `id` de sus obras y cada obra guarda su `universoId`. Los dos tienen que coincidir.
- `CONTINUAR.obraId` y `RESENAS.obraId` apuntan a `OBRAS.id`.
- `id` identifica cada elemento dentro de su conjunto de datos.
- `type` indica qué componente debe renderizarse.
- `props` agrupa las propiedades que recibe ese componente.

## UNIVERSOS

**Fichero:** `src/data/universos.json` · **Qué representa:** una saga o mundo (Harry Potter, Dune…) que reúne sus libros, películas y series.

| Propiedad | Tipo | Ejemplo | Qué es |
|---|---|---|---|
| `id` | número | `2` | Identificador único |
| `nombre` | texto | `"Harry Potter"` | Nombre del universo |
| `descripcion` | texto | `"El mundo mágico en papel, en el cine y en la escena."` | Frase que lo presenta |
| `color` | texto (hex) | `"#4B3A8C"` | Color propio del universo |
| `obras` | lista de números | `[7, 8, 9, 10]` | `id` de las obras de este universo (`OBRAS.id`) |

`obras` es un array de `id` de obras que pertenecen a este universo.

**Ejemplo:**

```json
{
  "id": 2,
  "nombre": "Harry Potter",
  "descripcion": "El mundo mágico en papel, en el cine y en la escena.",
  "color": "#4B3A8C",
  "obras": [7, 8, 9, 10]
}
```

**Lo usan:** UniverseCard

## OBRAS

**Fichero:** `src/data/obras.json` · **Qué representa:** cada libro, película o serie.

| Propiedad | Tipo | Ejemplo | Qué es |
|---|---|---|---|
| `id` | número | `5` | Identificador único |
| `titulo` | texto | `"En llamas"` | Título de la obra |
| `formato` | texto | `"Película"` | Uno de: `"Libro"`, `"Película"`, `"Serie"` |
| `anio` | número | `2013` | Año de publicación o estreno |
| `universoId` | número | `1` | Universo al que pertenece (`UNIVERSOS.id`) |
| `fidelity` | número o `null` | `88` | Mide el nivel de fidelidad. Es `null` en los libros y en las obras sin valorar |

**Ejemplo:**

```json
{
  "id": 5,
  "titulo": "En llamas",
  "formato": "Película",
  "anio": 2013,
  "universoId": 1,
  "fidelity": 88
}
```

**Lo usan:** UniversePage, FormatChip y otros componentes que muestran información de las obras.

## CONTINUAR

**Fichero:** `src/data/continuar.json` · **Qué representa:** las obras que la persona tiene empezadas y el porcentaje de progreso de cada una.

Cada elemento utiliza la estructura `id`, `type` y `props`, además de `obraId` para relacionarlo con la obra original.

| Propiedad | Tipo | Ejemplo | Qué es |
|---|---|---|---|
| `id` | número | `1` | Identificador único del elemento |
| `type` | texto | `"continueReading"` | Tipo de componente que se debe renderizar |
| `obraId` | número | `2` | Obra empezada (`OBRAS.id`) |
| `props` | objeto | `{...}` | Propiedades que recibe StatusCard |
| `props.title` | texto | `"En llamas"` | Título que se muestra |
| `props.type` | texto | `"Book"` | Formato mostrado: `"Book"`, `"Movie"` o `"Series"` |
| `props.progress` | número | `60` | Porcentaje avanzado, de 0 a 100 |

**Ejemplo:**

```json
{
  "id": 1,
  "type": "continueReading",
  "obraId": 2,
  "props": {
    "title": "En llamas",
    "type": "Book",
    "progress": 60
  }
}
```

**Lo usan:** SectionHeading y StatusCard. StatusCard recibe las propiedades mediante `props`.

## RESENAS

**Fichero:** `src/data/resenas.json` · **Qué representa:** una opinión de un usuario sobre una obra.

Cada reseña utiliza la estructura `id`, `type`, `obraId` y `props`.

| Propiedad | Tipo | Ejemplo | Qué es |
|---|---|---|---|
| `id` | número | `1` | Identificador único de la reseña |
| `type` | texto | `"review"` | Tipo de componente que se debe renderizar |
| `obraId` | número | `5` | Obra reseñada (`OBRAS.id`) |
| `props` | objeto | `{...}` | Propiedades que recibe ReviewCard |
| `props.username` | texto | `"panem_fan"` | Nombre de usuario de quien escribe |
| `props.rating` | número | `4` | Valoración de la obra |
| `props.text` | texto | `"La fotografía es preciosa…"` | Contenido de la reseña |
| `props.userImage` | texto o no definido | `"/images/pfp/mia-pfp.jpg"` | Ruta de la foto de perfil. Si no se indica, se utiliza la imagen predeterminada |
| `props.spoiler` | booleano | `false` | Indica si la reseña contiene spoilers |
| `props.spoilerText` | texto | `""` | Texto que se muestra al revelar el spoiler |

**Ejemplo:**

```json
{
  "id": 2,
  "type": "review",
  "obraId": 5,
  "props": {
    "username": "panem_fan",
    "rating": 4,
    "text": "La fotografía es preciosa y la banda sonora acompaña muy bien.",
    "spoiler": false,
    "spoilerText": ""
  }
}
```

`userImage` es opcional. Si no se proporciona, ReviewCard utiliza `/images/user-pfp.svg` como imagen predeterminada.

**Lo usan:** SectionHeading y ReviewCard.
