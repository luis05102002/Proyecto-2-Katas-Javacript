// Ejercicio 31
// Usa bucles anidados para listar cada artista y sus influencias directas
// Imprime cada par en el formato: "Artista → Influencia"

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

// Bucle externo: recorre cada artista
for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];
  
  // Bucle interno: recorre cada influencia del artista actual
  for (let j = 0; j < artist.influences.length; j++) {
    const influence = artist.influences[j];
    
    // Imprimir cada par: Artista → Influencia
    console.log(`${artist.name} → ${influence}`);
  }
}