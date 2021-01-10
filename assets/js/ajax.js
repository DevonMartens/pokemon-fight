// $(document).ready(function() {
// $("#search-btn").on("click", function () {
//   // event.preventDefault();
//   var userInput = $("#input").val();

//   var search = userInput.toLowerCase();
//   $("#input").val("");
//   // var pokemon = userInput.toLower
//   pokemonOne(search);
 
//   });

//   function pokemonOne(search){
//   var queryURL = "https://pokeapi.co/api/v2/pokemon/" + search;
//  $.ajax({
//     url: queryURL,
//     method: "GET",
//     dataType: "json",
//   }).then(function (response) {
//     var pokeID = response.id;
//     var imageURL =
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
//       pokeID +
//       ".png";
//     var nameOfPokemon = response.name;

//     $("#pokemon1Image").attr("src", imageURL);
//     $("#pokemon1Name").html(nameOfPokemon);
//     // $("#pokemon1Type").text(type + " type");
// var attack =response.stats[1].base_stat
//     // $("#pokemon1Attack").text(attack);
//     // $("#pokemon1Defense").text(response.stats[2].base_stat);
//     $("#pokemon1Speed").html(response.stats[5].base_stat);
//     $("#pokemon1Exp").html(response.base_experience);
//     $("#Ability").html(response.abilities.ability[0])

  
//   })

// }
// })

  