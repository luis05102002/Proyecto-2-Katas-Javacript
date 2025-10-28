// Ejercicio 39
// Usa for...of para recorrer usuarios y for...in para recorrer sus sonidos favoritos
// Cuenta cuántas veces aparece cada sonido como favorito
// Imprime: { sonido: veces }

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

// Objeto que guardará: { nombreDelSonido: vecesQueAparece }
const soundCount = {};

// Bucle for...of → recorre cada usuario
for (const user of users) {
  // Bucle for...in → recorre cada clave (nombre del sonido) en favoritesSounds
  for (const soundName in user.favoritesSounds) {
    // Si el sonido ya existe en el contador → incrementar
    if (soundCount[soundName]) {
      soundCount[soundName]++;
    } 
    // Si es la primera vez → inicializar en 1
    else {
      soundCount[soundName] = 1;
    }
  }
}

// === IMPRIMIR RESULTADO ===
console.log("=== VECES QUE CADA SONIDO ES FAVORITO ===");
for (const sound in soundCount) {
  const veces = soundCount[sound];
  console.log(`${sound}: ${veces} vez${veces !== 1 ? 'es' : ''}`);
}