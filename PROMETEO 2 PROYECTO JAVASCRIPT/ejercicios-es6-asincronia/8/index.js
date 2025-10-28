// index.js

const API_URL = 'https://thronesapi.com/api/v2/Characters';
const select = document.getElementById('character-list');
const image = document.querySelector('.character-image');
const noImageMsg = document.getElementById('no-image-msg');

// Cargar personajes de la API
async function loadCharacters() {
  try {
    console.log('🔄 Cargando personajes de la API...');
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const characters = await response.json();
    console.log(`✅ Cargados ${characters.length} personajes.`);

    // Limpiar select
    select.innerHTML = '<option value="">Selecciona un personaje...</option>';

    // Poblar el select
    characters.forEach(character => {
      const fullName = character.fullName || `${character.firstName || ''} ${character.lastName || ''}`.trim() || 'Sin nombre';
      const imageUrl = character.imageUrl || '';

      const option = document.createElement('option');
      option.value = imageUrl;  // Value = URL de imagen (vacío si no hay)
      option.textContent = fullName;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('❌ Error al cargar la API:', error);
    select.innerHTML = '<option value="">Error al cargar personajes</option>';
  }
}

// Evento change en el select para mostrar la imagen
select.addEventListener('change', (e) => {
  const imageUrl = e.target.value;
  const selectedName = e.target.selectedOptions[0].textContent;

  console.log(`🎯 Seleccionado: ${selectedName}`);
  console.log(`🖼️ URL de imagen: ${imageUrl || 'Vacía'}`);

  // Ocultar mensaje anterior
  noImageMsg.style.display = 'none';
  image.style.display = 'none';

  if (imageUrl && imageUrl.trim() !== '') {
    // Cargar imagen
    image.src = imageUrl;
    image.alt = selectedName;
    image.style.display = 'block';

    // Manejar error de carga de imagen
    image.onerror = () => {
      console.error('❌ Error cargando imagen:', imageUrl);
      image.style.display = 'none';
      noImageMsg.style.display = 'block';
      noImageMsg.textContent = `No se pudo cargar la imagen de ${selectedName}.`;
    };

    // Confirmar carga exitosa
    image.onload = () => {
      console.log('✅ Imagen cargada exitosamente.');
    };
  } else {
    // No hay URL
    console.log('⚠️ No hay imagen para este personaje.');
    noImageMsg.style.display = 'block';
    noImageMsg.textContent = `No hay imagen disponible para ${selectedName}.`;
  }
});

// Cargar personajes al iniciar
loadCharacters();