// exercise-5.js

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');
const resultsContainer = document.getElementById('results');

// Función para mostrar streamers filtrados
function filterAndShowStreamers() {
  const searchText = input.value.trim().toLowerCase();

  const filteredStreamers = streamers.filter(streamer =>
    streamer.name.toLowerCase().includes(searchText)
  );

  // Limpiar resultados anteriores
  resultsContainer.innerHTML = '';

  // Mostrar resultados
  if (filteredStreamers.length === 0) {
    resultsContainer.innerHTML = '<p style="color: #888;">No se encontraron streamers.</p>';
    return;
  }

  filteredStreamers.forEach(streamer => {
    const div = document.createElement('div');
    div.className = 'streamer';
    div.innerHTML = `
      <strong>${streamer.name}</strong> 
      <span style="color: #555;">(${streamer.age} años)</span><br>
      <small>Juega más: ${streamer.gameMorePlayed}</small>
    `;
    resultsContainer.appendChild(div);
  });
}

// Escuchar cambios en el input (en tiempo real)
input.addEventListener('input', filterAndShowStreamers);

// Mostrar todos al cargar la página
filterAndShowStreamers();