// Ejercicio 12: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
function removeDuplicates(list) {
    return [...new Set(list)];
}

// Array para probar la función
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

// Prueba de la función
console.log("--- Ejercicio 12: Eliminar duplicados ---");
console.log(removeDuplicates(duplicates)); // Debería mostrar: ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']