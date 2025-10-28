// script.js

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Mapeo de íconos por álbum (opcional, para más realismo)
const albumIcons = {
  "De Mysteriis Dom Sathanas": "demon",
  "Reign of Blood": "skull",
  "Ride the Lightning": "bolt",
  "Painkiller": "cross",
  "Iron Fist": "fist"
};

const container = document.querySelector('.albums-container');

albums.forEach(album => {
  // Crear tarjeta
  const card = document.createElement('div');
  card.className = 'album-card';

  // Portada con ícono
  const cover = document.createElement('div');
  cover.className = 'album-cover';
  const icon = albumIcons[album] || "music";
  cover.textContent = icon;

  // Información
  const info = document.createElement('div');
  info.className = 'album-info';
  
  const title = document.createElement('h3');
  title.textContent = album;
  
  const year = document.createElement('p');
  year.textContent = getRandomYear(1982, 1994); // Año ficticio

  info.appendChild(title);
  info.appendChild(year);

  // Ensamblar
  card.appendChild(cover);
  card.appendChild(info);
  container.appendChild(card);
});

// Función auxiliar para año aleatorio
function getRandomYear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}