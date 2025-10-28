// Ejercicio 17: For...in
// Usa un for...in para imprimir por consola los datos del alienígena.
// Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"
const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

console.log("--- Ejercicio 17: Datos del alienígena ---");
for (const property in alien) {
    console.log(`La propiedad ${property} tiene cómo valor: ${alien[property]}`);
}