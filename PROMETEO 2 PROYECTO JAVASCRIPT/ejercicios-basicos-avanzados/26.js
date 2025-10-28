// Ejercicio 26
// Filtra canciones de rock que duren más de 5 minutos
// Guarda SOLO LOS TÍTULOS en rockPlaylist
// Imprime los nombres en una sola línea

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];

const rockPlaylist = [];  // Aquí se guardarán SOLO los títulos

// Bucle for que recorre cada canción
for (let i = 0; i < songs.length; i++) {
  const song = songs[i];

  // Condición: debe ser Rock Y durar más de 5 minutos
  if (song.genre === 'Rock' && song.duration > 5) {
    rockPlaylist.push(song.title);  // Añadir solo el título
  }
}

// Imprimir solo los nombres en una línea
console.log("Playlist de Rock (> 5 min):");
console.log(rockPlaylist.join(" → "));