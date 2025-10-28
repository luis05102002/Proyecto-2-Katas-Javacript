// Ejercicio 38
// Usa for...of para recorrer usuarios y for...in para recorrer sus sonidos favoritos
// Calcula la media del volumen de TODOS los sonidos (no por usuario)
// Imprime: total de sonidos, suma total y media con 2 decimales

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Variables para acumular
let totalVolume = 0;   // Suma de todos los volúmenes
let totalSounds = 0;   // Cantidad total de sonidos

// Bucle for...of → recorre cada usuario
for (const user of users) {
  // Bucle for...in → recorre cada sonido del usuario actual
  for (const soundKey in user.favoritesSounds) {
    const sound = user.favoritesSounds[soundKey];
    totalVolume += sound.volume;  // Sumar volumen
    totalSounds++;               // Contar sonido
  }
}

// Calcular la media
const averageVolume = totalVolume / totalSounds;

// Imprimir resultados claros
console.log("=== MEDIA DE VOLUMEN DE SONIDOS FAVORITOS ===");
console.log(`Total de sonidos: ${totalSounds}`);
console.log(`Suma total de volúmenes: ${totalVolume}`);
console.log(`Media de volumen: ${averageVolume.toFixed(2)}`);