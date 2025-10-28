// Ejercicio 18: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
// Imprime en un console log el array resultante.
const placesToTravel = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" }
];

const filteredNames = [];
for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
        filteredNames.push(placesToTravel[i].name);
    }
}

console.log("--- Ejercicio 18: Destinos sin id 11 ni 40 ---");
console.log("Array resultante:", filteredNames);