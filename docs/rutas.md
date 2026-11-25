# Rutas y navegación de Inkverse

## 1. Objetivo

Definir las rutas del MVP de Inkverse para permitir la navegación entre las diferentes pantallas mediante URLs propias, que puedan compartirse y abrirse directamente.

La navegación se implementará utilizando React Router.

## 2. Tabla de rutas

| Pantalla | Ruta | Descripción |
|---|---|---|
| Home | `/` | Página principal de la aplicación. |
| Discovery + resultados de búsqueda | `/discover` | Exploración de obras y universos. Permite realizar búsquedas mediante el parámetro `?q=`. |
| My Universes | `/universes` | Listado de universos disponibles. |
| Detalle de universo | `/universe/:id` | Información del universo, incluyendo Route y Fidelity. |
| My Library | `/library` | Biblioteca personal de obras, con filtros por estado. |
| Detalle de obra | `/work/:id` | Información de la obra, reviews y secciones Details, Cast y Similar. |
| Profile | `/profile` | Información y opciones del perfil del usuario. |
| Notifications | `/profile/notifications` | Pantalla de notificaciones del usuario. |
| NotFound | `*` | Página mostrada cuando se accede a una ruta inexistente. |

## 3. Parámetros de las rutas

### Parámetros dinámicos

Las siguientes rutas utilizan un identificador dinámico:

- `/universe/:id`: identifica el universo que se quiere consultar.
- `/work/:id`: identifica la obra que se quiere consultar.

El identificador se obtendrá mediante `useParams` de React Router.

Si el identificador no corresponde a ningún elemento existente, se mostrará un estado específico de elemento no encontrado dentro de su correspondiente página de detalle.

### Parámetros de búsqueda

La ruta `/discover` permite realizar búsquedas mediante el parámetro de consulta `q`.

Ejemplos:

- `/discover?q=harry+potter`
- `/discover?q=hunger+games`

El parámetro se utilizará para recuperar y mostrar los resultados correspondientes a la búsqueda.

## 4. Organización de la navegación

Las rutas de la aplicación se organizarán mediante React Router.

La navegación principal estará disponible a través de la barra inferior, que permitirá acceder a:

- Home: `/`
- Discovery: `/discover`
- My Universes: `/universes`
- My Library: `/library`
- Profile: `/profile`

La pantalla de Notifications será accesible desde Profile mediante `/profile/notifications`.

Las páginas que compartan estructura y navegación podrán utilizar layouts y rutas anidadas mediante `Outlet`.

## 5. Gestión de errores de