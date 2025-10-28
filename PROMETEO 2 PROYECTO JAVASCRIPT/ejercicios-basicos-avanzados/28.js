// Ejercicio 28
// Suma las duraciones SOLO de los álbumes de género 'Rock'
// Imprime el total en minutos (con 2 decimales)

const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

// Variable para acumular la duración total de álbumes de Rock
let totalRockDuration = 0;

// Bucle for que recorre cada álbum
for (let i = 0; i < albums.length; i++) {
  const album = albums[i];

  // Si el género es 'Rock'
  if (album.genre === 'Rock') {
    totalRockDuration += album.duration;  // Suma la duración
  }
}

// Imprimir el total con 2 decimales
console.log(`Duración total de álbumes de Rock: ${totalRockDuration.toFixed(2)} minutos`);