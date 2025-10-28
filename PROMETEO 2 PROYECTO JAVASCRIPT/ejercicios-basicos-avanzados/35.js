// Ejercicio 35
// Desarrolla una función que busque en un array de objetos representando mutantes 
// si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
// Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  // Bucle que recorre cada mutante
  for (let i = 0; i < mutants.length; i++) {
    // Si el poder del mutante actual coincide con el buscado
    if (mutants[i].power === power) {
      return `¡Poder encontrado! Pertenece a ${mutants[i].name}.`;
    }
  }

  // Si no se encontró ningún mutante con ese poder
  return `Ningún mutante encontrado con el poder: ${power}.`;
}

// === PRUEBAS DE LA FUNCIÓN ===
console.log("=== PRUEBAS EJERCICIO 35 ===");
console.log(findMutantByPower(mutants, "telepathy"));           // Encontrado
console.log(findMutantByPower(mutants, "regeneration"));        // Encontrado
console.log(findMutantByPower(mutants, "flight"));              // No encontrado
console.log(findMutantByPower(mutants, "teleportation"));       // Encontrado
console.log(findMutantByPower(mutants, "invisibility"));        // No encontrado