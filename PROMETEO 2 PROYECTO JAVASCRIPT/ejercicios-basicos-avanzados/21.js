// Ejercicio 21
// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad 
// precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, 
// precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

// Variables que almacenarán los textos completos a imprimir
let menores = "Usuarios menores de edad:";   // Texto inicial para menores de edad
let mayores = "Usuarios mayores de edad:";   // Texto inicial para mayores de edad

// Un solo bucle que recorre cada usuario del arreglo
for (const user of users) {
  // Primera condición: si el usuario tiene menos de 18 años
  if (user.years < 18) {
    menores += ` ${user.name}`;   // Añade el nombre al texto de menores
  } 
  // Segunda condición: si no es menor (es decir, >= 18 años)
  else {
    mayores += ` ${user.name}`;   // Añade el nombre al texto de mayores
  }
}

// Imprime los resultados en consola
console.log(menores);   // Ejemplo: Usuarios menores de edad: Natasha Khamala
console.log(mayores);   // Ejemplo: Usuarios mayores de edad: Tony Peter Bruce