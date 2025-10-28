// exercise-7.js

console.log("=== EJERCICIO 7 - filter() + reduce() + find() ===\n");

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
];

// 7.1 Filtrar RPG + Media de scores
const rpgGames = videogames.filter(game => 
  game.genders.find(gender => gender === 'RPG') // Busca 'RPG' en array genders
);

console.log("🎮 Videojuegos RPG filtrados:");
rpgGames.forEach(game => {
  console.log(`- ${game.name}: ${game.score}`);
});
console.log("---");

// Calcular media de scores de RPG
const rpgScoresSum = rpgGames.reduce((sum, game) => sum + game.score, 0);
const rpgAverage = (rpgScoresSum / rpgGames.length).toFixed(2);

console.log("📊 MEDIA DE SCORES DE VIDEOJUEGOS RPG:");
console.log(`Suma total: ${rpgScoresSum}`);
console.log(`Número de juegos: ${rpgGames.length}`);
console.log(`**MEDIA: ${rpgAverage}**`);
console.log("---");

// BONUS: Lista de nombres de RPG
const rpgNames = rpgGames.map(game => game.name);
console.log("🏆 Nombres de RPG:");
console.log(rpgNames);