// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log("Elemento en la posición 3 (Tendo):", aldeanos[3]);

// 4.2 - Coloca a "Cervasio" en el último lugar
aldeanos.push("Cervasio");
console.log("Array tras añadir Cervasio:", aldeanos);

// 4.3 - Cambia el primer elemento por "Bambina"
aldeanos[0] = "Bambina";
console.log("Array tras cambiar el primer elemento:", aldeanos);

// 4.4 - Dale la vuelta al array
aldeanos.reverse();
console.log("Array invertido:", aldeanos);

// 4.5 - Cambia a "Narciso" por "Canela" usando un método de array
const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos[indiceNarciso] = "Canela";
}
console.log("Array tras cambiar Narciso por Canela:", aldeanos);

// 4.6 - Imprime el último elemento sin atacar la posición explícitamente
console.log("Último elemento del array:", aldeanos[aldeanos.length - 1]);