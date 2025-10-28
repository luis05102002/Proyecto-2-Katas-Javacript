// exercise-2.js


console.log("=== EJERCICIO 2 - SPREAD OPERATOR ===\n");

// 2.1 Copia de array usando spread operator
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log("2.1 Copia de pointsList:");
console.log("Original:", pointsList);
console.log("Copia:", pointsListCopy);
console.log("¿Son iguales? (referencia)", pointsList === pointsListCopy ? "Sí" : "No");
console.log("---");

// 2.2 Copia de objeto usando spread operator
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };

console.log("2.2 Copia de toy:");
console.log("Original:", toy);
console.log("Copia:", toyCopy);
console.log("¿Son iguales? (referencia)", toy === toyCopy ? "Sí" : "No");
console.log("---");

// 2.3 Unir dos arrays con spread operator
const pointsLis2 = [54, 87, 99, 65, 32];
const mergedPoints = [...pointsList, ...pointsLis2];

console.log("2.3 Arrays unidos:");
console.log("pointsList:", pointsList);
console.log("pointsLis2:", pointsLis2);
console.log("mergedPoints:", mergedPoints);
console.log("---");

// 2.4 Fusionar dos objetos con spread operator
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const toyComplete = { ...toy, ...toyUpdate };

console.log("2.4 Objetos fusionados:");
console.log("toy:", toy);
console.log("toyUpdate:", toyUpdate);
console.log("toyComplete:", toyComplete);
console.log("---");

// 2.5 Copia de array eliminando el índice 2 (sin modificar original)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];

console.log("2.5 Eliminar posición 2:");
console.log("Original:", colors);
console.log("Sin índice 2:", colorsWithoutIndex2);
console.log("¿Original modificado?", colors.length === 5 ? "No" : "Sí");
console.log("---");

console.log("¡Todos los ejercicios con spread operator completados!");