// Ejercicio 41
// Crea una función rollDice() que simule una tirada de dado
// Recibe: número de caras (ej: 6, 20, 100)
// Retorna: número aleatorio entre 1 y el número de caras

function rollDice(faces) {
  // Validar que el número de caras sea positivo
  if (faces < 1) {
    return "Error: el dado debe tener al menos 1 cara.";
  }

  // Math.random() → número entre 0 (inclusive) y 1 (exclusivo)
  // Multiplicar por faces → entre 0 y faces (exclusivo)
  // Math.floor() → redondear hacia abajo para obtener entero
  // +1 → ajustar rango de 0..(faces-1) a 1..faces
  return Math.floor(Math.random() * faces) + 1;
}

// === PRUEBAS DE LA FUNCIÓN ===
console.log("=== SIMULACIÓN DE TIRADAS DE DADO ===");

// Dado de 6 caras (clásico)
console.log("Dado de 6 caras:");
for (let i = 0; i < 5; i++) {
  console.log(`Tirada ${i + 1}: ${rollDice(6)}`);
}

// Dado de 20 caras (D&D)
console.log("\nDado de 20 caras:");
for (let i = 0; i < 3; i++) {
  console.log(`Tirada ${i + 1}: ${rollDice(20)}`);
}

// Dado de 100 caras
console.log("\nDado de 100 caras:");
console.log(`Tirada: ${rollDice(100)}`);

// Caso inválido
console.log("\nDado de 0 caras:");
console.log(rollDice(0));