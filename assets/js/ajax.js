
var g_currentpokemon;
var userTeam = [];
$("#search-btn").on("click", function () {
  // event.preventDefault();
  var userInput = $("#input").val();

  var userInput = $("#input").val();
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;
 $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    g_currentpokemon = response;
console.log(response);
    var pokeID = response.id;
    var imageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      pokeID +
      ".png";
    var nameOfPokemon = response.name;

    nameOfPokemon = nameOfPokemon.charAt(0).toUpperCase() + nameOfPokemon.slice(1);

    var type = response.types[0].type.name;
    type = type.charAt(0).toUpperCase() + type.slice(1);

    $("#pokemon1Image").html("<div><img src=" + imageURL + "></div>");
    $("#pokemon1Name").text(nameOfPokemon);
    $("#poketype").text(type + " type");

    $("#pokemon1Attack").text("Attack stat: " + response.stats[1].base_stat);
    $("#Pokemon1Defense").text("Defense stat: " + response.stats[2].base_stat);
    $("#Pokemon1Speed").text("Speed stat: " + response.stats[5].base_stat);
    $("#Pokemon1Exp").text(response.base_experience);

  
  })
});


