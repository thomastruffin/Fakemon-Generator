import fetchFunction from "./fetch.js";
import {FakemonType} from "./const.js";
let fakemon_species = document.getElementById("fakemon_species");

document.querySelector("#genrateRandomSpecies").addEventListener("click", event => fetchFunction.generateSpecies(event,fakemon_species));
document.querySelector("#generateType").addEventListener("click", event => getRandomType(event));

function getRandomType(event){
    event.preventDefault();
    const typeNumber = Math.round(Math.random()*2);
    let svg = -1
    for(let idx=1 ; idx <= typeNumber ; idx++ ){
        let index = Math.floor((Math.random()*FakemonType.length));
        do {
            index = Math.floor((Math.random()*FakemonType.length));
        }while(svg != index)
        svg = index;
        const type = FakemonType[index];
        const fakemon_type_html = document.getElementById("fakemon_type_"+idx);
        fakemon_type_html.innerHTML = type.type;
        fakemon_type_html.style.color = type.color;
        
    }
}