const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

// Se crean unas constantes para seleccionar las clases en DOM y así poderlas manipular dentro de JavaScript

// Se crea la función que traerá la DATA utilizando fetch() que es un método especial de comunicación API. De esta forma, de la documentación se extrae lo que necesitamos y como estamos esperando "algo", esta llamada debe esperar una response.

button.addEventListener('click', (e) => {
  e.preventDefault();
  getPokemon(input.value);
})

// Se agrega el evento click para que se active la función de representar la data extraída del JSON de la función getPokemon


function getPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  .then((response) => response.json())
  .then((data) => {
    searchPokemon(data)
  })
}

// La segunda promesa trae la función SearchPokemon como respuesta, por supuesto al inicio siempre se tiene que traer la info del JSON y luego si se trae la función asíncronamente.

// El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.
// Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json()

function searchPokemon (pokemon) {
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;

  const h3 = document.createElement("h3");
  h3.textContent = pokemon.name;

  const div = document.createElement("div")
  div.append(img);
  div.append(h3);

  pokemonContainer.append(div);
}

// Se crea la función para buscar el pokemón, dentro de constantes se crean los elementos que van a representar la info obtenida a través del JSON y al final se llama a la variable pokemonContainer que es en la que queremos que se visualice la información. Agregamos los elementos recién creados and its done.

getPokemon()