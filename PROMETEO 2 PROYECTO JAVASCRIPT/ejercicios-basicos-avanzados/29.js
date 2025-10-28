// Ejercicio 29
// Agrupa películas de Star Wars por década
// Clave: "1970s", "1980s", etc.
// Valor: array con SOLO LOS TÍTULOS de las películas
// Imprime el objeto final

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// Objeto que agrupará SOLO los títulos por década
const moviesByDecade = {};

// Bucle for que recorre cada película
for (let i = 0; i < starWarsMovies.length; i++) {
  const movie = starWarsMovies[i];
  const year = movie.releaseYear;

  // Calcular la década: 1977 → 1970 → "1970s"
  const decade = Math.floor(year / 10) * 10;
  const decadeKey = `${decade}s`;

  // Si la década no existe, crear array vacío
  if (!moviesByDecade[decadeKey]) {
    moviesByDecade[decadeKey] = [];
  }

  // Añadir SOLO el título (nombre) al array
  moviesByDecade[decadeKey].push(movie.title);
}

// Imprimir el objeto final con solo nombres
console.log("Películas de Star Wars por década (solo títulos):");
console.log(JSON.stringify(moviesByDecade, null, 2));