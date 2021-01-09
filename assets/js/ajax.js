//hard coded pokemon array to procide suggestions
var pokemonArray = [];
//blank input for response
var calledPokemon;
var pokemonTeam = [];
$("#search-btn").on("click", function () {
  event.preventDefault();
  var userInput = $("#input").val();
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
console.log(response);
    g_currentpokemon = response;

    var pokeID = response.id;
    var imageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      pokeID +
      ".png";
   })
})

