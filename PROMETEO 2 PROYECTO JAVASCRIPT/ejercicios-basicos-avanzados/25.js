// Ejercicio 25
// Cuenta cuántas películas son de antes del 2000 y cuántas son posteriores
// usando un bucle. Imprime ambos conteos por consola.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Contadores inicializados en 0
let before2000 = 0;
let after2000 = 0;

// Bucle for que recorre cada película
for (let i = 0; i < movies.length; i++) {
  const year = movies[i].releaseYear;

  // Si el año es menor a 2000
  if (year < 2000) {
    before2000++;   // Incrementa contador de antes del 2000
  } 
  // Si el año es 2000 o posterior
  else {
    after2000++;    // Incrementa contador de 2000 o después
  }
}

// Imprimir los resultados
console.log(`Películas antes del 2000: ${before2000}`);
console.log(`Películas del 2000 o posteriores: ${after2000}`);