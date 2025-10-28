// index.js

const img = document.querySelector('.random-image');
const nameEl = document.querySelector('.name');
const loadingEl = document.querySelector('.loading');

// Generar número aleatorio entre 1 y 151
const randomId = Math.floor(Math.random() * 151) + 1;
const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

console.log(`Cargando Pokémon #${randomId}...`);

// Cargar Pokémon
async function loadRandomPokemon() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Pokémon no encontrado');

    const data = await response.json();

    // Elegir la mejor imagen: oficial (front_default) o dream_world si existe
    const imageUrl = data.sprites.other?.dream_world?.front_default 
                  || data.sprites.other?.['official-artwork']?.front_default 
                  || data.sprites.front_default 
                  || 'https://via.placeholder.com/300?text=No+Image';

    // Mostrar imagen y nombre
    img.src = imageUrl;
    img.alt = data.name;
    img.style.display = 'block';
    nameEl.textContent = capitalize(data.name);
    loadingEl.style.display = 'none';

    console.log(`¡${capitalize(data.name)} cargado!`);

  } catch (error) {
    console.error('Error:', error);
    loadingEl.textContent = 'Error al cargar Pokémon';
    img.style.display = 'none';
  }
}

// Capitalizar nombre
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Cargar al iniciar
loadRandomPokemon();