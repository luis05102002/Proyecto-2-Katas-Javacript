// Ejercicio 24
// Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human"
// y guarda SOLO SUS NOMBRES en un nuevo array llamado humanCharacters.
// Imprime este nuevo array por consola.

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = [];  // Aquí se guardarán SOLO los nombres

// Bucle for que recorre cada personaje
for (let i = 0; i < characters.length; i++) {
  // Si la especie es 'Human'
  if (characters[i].species === 'Human') {
    // Añadir SOLO el nombre al array
    humanCharacters.push(characters[i].name);
  }
}

// Imprimir el array resultante (solo nombres)
console.log("Personajes humanos:");
console.log(humanCharacters.join(", "));