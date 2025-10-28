// Ejercicio 22
// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
// Recuerda no usar frutas duplicadas.
// Finalmente, imprime solo los nombres del array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Índice para recorrer las frutas sin repetirlas
let fruitIndex = 0;

// Bucle que recorre cada comida
for (let i = 0; i < foodSchedule.length; i++) {
  // Si la comida NO es vegana
  if (!foodSchedule[i].isVegan) {
    // Reemplazar con la siguiente fruta disponible
    foodSchedule[i].name = fruits[fruitIndex];
    // Marcar como vegana
    foodSchedule[i].isVegan = true;
    // Avanzar a la siguiente fruta
    fruitIndex++;
  }
}

// === NUEVO: Imprimir solo los nombres en una línea ===
// Extraemos los nombres con map y los unimos con " -> "
const nombres = foodSchedule.map(food => food.name).join(" -> ");

console.log(nombres);