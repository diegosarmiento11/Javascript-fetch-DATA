const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container')


button.addEventListener('click', (e) =>{
  e.preventDefault();
  getPokemon(input.value)
})

function getPokemon(pokemon){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  .then((response) => response.json())
  .then((data) => {
  searchPokemon(data)
  });
}


function searchPokemon(pokemon){
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  
  const h3 = document.createElement("h3");
  h3.textContent = pokemon.name;
  
  const div = document.createElement("div")
  div.append(img);
  div.append(h3);
  
  pokemonContainer.append(div);
}

getPokemon()