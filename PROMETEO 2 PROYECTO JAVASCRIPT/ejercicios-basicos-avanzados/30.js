// Ejercicio 30
// Clasifica canciones por género (solo títulos)

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Objeto para agrupar por género
const songsByGenre = {};

// Bucle: recorre cada canción
for (let i = 0; i < tracks.length; i++) {
  const song = tracks[i];
  const genre = song.genre;

  // Si el género no existe, crear array vacío
  if (!songsByGenre[genre]) {
    songsByGenre[genre] = [];
  }

  // Añadir solo el título
  songsByGenre[genre].push(song.title);
}


console.log("Canciones clasificadas por género:");

// Recorrer cada género en el objeto
for (const genre in songsByGenre) {
  // Imprimir: Género: [canción1, canción2, ...]
  console.log(`${genre}: [${songsByGenre[genre].join(", ")}]`);
}