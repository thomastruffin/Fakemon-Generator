import fetchFunction from "./fetch.js";
import fakemon_type from "./const.js"
let fakemon_species = document.getElementById("fakemon_species");

document.querySelector("#genrateRandomSpecies").addEventListener("click", event => fetchFunction.generateSpecies(event,fakemon_species));
document.querySelector("#generateType").addEventListener("click", event => getRandomType(event));

function getRandomType(event){
    event.preventDefault();
    const typeNumber = Math.round(Math.random()*2);
    for(let idx=1 ; idx <= typeNumber ; idx++ ){
        const type = fakemon_type[Math.floor((Math.random()*fakemon_type.length))];
        const fakemon_type_html = document.getElementById("fakemon_type_"+idx);
        fakemon_type.innerHTML = type.type;
        fakemon_type_html.style.color = type.color;
        
    }
}