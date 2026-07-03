import fetchFunction from "./fetch.js";

let fakemon_species = document.getElementById("fakemon_species");

document.querySelector("#genrateRandomSpecies").addEventListener("click", event => fetchFunction.generateSpecies(event,fakemon_species));

