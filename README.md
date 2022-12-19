# Simulación Individual Project - Game of Thrones

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Horarios y Fechas

El proyecto tendrá una duración máxima de dos semanas. En el caso de que completen todas las tareas antes de dicho lapso podrán avisar a su Instructor para coordinar una fecha de presentación del trabajo (DEMO).

## Comenzando

1.  Un integrante del grupo debe crear el repositorio para este proyecto.
2.  Ese integrante deberá invitar al resto de compañeros al repositorio.

Tendrán un `boilerplate` con la estructura general tanto del servidor como del cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:** Las dependencias actuales se encuentran en las versiones que venimos trabajando durante el bootcamp.

Versiones:

- **react**: 18.2.0
- **react-dom**: 18.2.0
- **react-router-dom**: 6.4.4
- **redux**: 4.2.0
- **react-redux**: 8.0.5

Está permitido, **bajo su responsabilidad**, actualizar las dependencias a versiones más actuales.

> **IMPORTANTE:** Versiones mas actuales podrían presentar configuraciones diferentes respecto a las versiones en las que venimos trabajando durante el bootcamp.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

> En caso de querer nota extra realizar estos pasos, si no saltar a "Enunciado"

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `gameofthrones`

Por último, se tendrán que descomentar las siguientes líneas de código:

- `línea 7` de `api/src/db/db.js`
- `líneas 21, 24 y 28` de `api/index.js`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos datos de Juego de Tronos utilizando la api externa [Game of Thrones Api](https://thronesapi.com) y a partir de ella poder, entre otras cosas:

- Poder buscar un personaje o una casa por su nombre.
- Filtrarlos / Ordenarlos
- Poder crear un personaje o una casa.

**IMPORTANTE**: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

### Únicos Endpoints/Flags que pueden utilizar

- GET <https://thronesapi.com/api/v2/Characters>
- GET <https://thronesapi.com/api/v2/Characters/{id}>

### Requerimientos mínimos

A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

**IMPORTANTE**: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres (Si se quiere nota extra)

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

**Pagina inicial**: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**: debe contener

- [ ] Input de búsqueda para encontrar personajes por nombre
- [ ] Área donde se verá el listado de personajes. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /Characters` y deberá mostrar su:
  - Imagen
  - Nombre
  - Casa
- [ ] Botones/Opciones para filtrar por casa de personaje y por personaje existente o creado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los personaje por orden alfabético y por id
- [ ] Paginado para ir buscando y mostrando los siguientes personaje, 13 personajes por pagina.

**IMPORTANTE**: En caso de hacer las taereas de nota extra, dentro de la Ruta Principal se deben mostrar tanto los personajes traidos desde la API como así también las de la base de datos.

**Ruta de detalle de Personaje**: debe contener

- [ ] Los campos mostrados en la ruta principal para cada personaje (imagen, nombre y tipos)
- [ ] Número de Personaje (id)
- [ ] Apellido
- [ ] Título
- [ ] Casa

**Ruta de creación**: debe contener

- [ ] Un formulario **controlado con JavaScript** con los campos mencionados en el detalle del Personaje
- [ ] Posibilidad de seleccionar/agregar casa al Personaje
- [ ] Botón/Opción para crear un nuevo Personaje

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del Personaje no pueda contener caracteres numéricos, que el título no pueda tener más de cierta cantidad de carácteres, etc.

## Base de datos

> Aplica solo para nota extra

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Personaje con las siguientes propiedades:
  - ID (Número de Personaje) \* : No puede ser un ID de un personaje ya existente en la API
  - Nombre \*
  - Apellido
  - Título
  - Familia
  - URL de Imagen
- [ ] Casa con las siguientes propiedades:
  - Nombre
  - Lema

La relación entre ambas entidades debe ser de muchos a muchos ya que un personaje puede pertenecer a más de una casa y, a su vez, una casa puede incluir a muchos personajes.

**IMPORTANTE**: Pensar como modelar los IDs de los personajes en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en alguno, este puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar. Por ejemplo si en la API el personaje `Samwell` tiene id = 1 y en nuestra base de datos creamos un nuevo personaje `Tukiman` con id = 1, ver la forma de diferenciarlos cuando querramos acceder al detalle del mismo.

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

**IMPORTANTE**: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] **GET /characters**:
  - Obtener un listado de los personajes desde la API
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] **GET /characters/{idCharacters}**:
  - Obtener el detalle de un personaje en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de personaje
  - (En caso de nota extra) Tener en cuenta que tiene que funcionar tanto para un id de un personaje existente en la API o uno creado por ustedes
- [ ] **GET /characters?name="..."**:
  - Obtener el personaje que coincida con el nombre pasado como query parameter (En caso de nota extra, puede ser de la API o creado por nosotros)
  - Si no existe ningún personaje mostrar un mensaje adecuado
- [ ] **POST /characters**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personajes por body
  - (En caso de nota extra) Crea un personaje en la base de datos relacionado con sus tipos.
- [ ] **GET /houses**:
  - Obtener todas las casas de personajes posibles
  - En una primera instancia deberán extraerlos de los propios personajes al traerlos desde la API (En caso de nota extra guardarlos en su propia base de datos y luego ya utilizarlos desde allí)

---

> Contenido extra

## Testing

- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
