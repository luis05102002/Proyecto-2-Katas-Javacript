// Ejercicio 2.1: Luke Skywalker cumple años
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;
console.log("Jedi actualizado:", jedi);

// Ejercicio 2.2: Presentación al estilo Leia Organa
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// Ejercicio 2.3: Calculando el coste total de sables de luz
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
let precioTotal = sable1.precio + sable2.precio;
console.log("Precio total de los sables de luz:", precioTotal);

// Ejercicio 2.4: Actualizando el precio final de las naves
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log("Nave 1 actualizada:", nave1);
console.log("Nave 2 actualizada:", nave2);