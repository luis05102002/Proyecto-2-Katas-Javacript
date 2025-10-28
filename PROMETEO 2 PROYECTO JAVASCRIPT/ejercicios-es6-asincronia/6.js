// exercise-6.js

console.log("=== EJERCICIO 6 - MÉTODO .reduce() ===\n");

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

// 6.1 Suma total de todas las notas
const totalScore = exams.reduce((sum, exam) => sum + exam.score, 0);

console.log("6.1 Suma total de todas las notas:");
console.log(totalScore); // → 52
console.log("---");

// 6.2 Suma de notas de aprobados (score >= 5)
const approvedScoreSum = exams
  .filter(exam => exam.score >= 5)
  .reduce((sum, exam) => sum + exam.score, 0);

console.log("6.2 Suma de notas de aprobados (≥5):");
console.log(approvedScoreSum); // → 46
console.log("---");

// 6.3 Media de todas las notas
const averageScore = exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length;

console.log("6.3 Media de todas las notas:");
console.log(averageScore.toFixed(2)); // → 5.20
console.log("---");

console.log("¡Todos los reduce completados con éxito!");