import Link from "./const.js"

let fakemon_species = document.getElementById("fakemon_species");
function generateSpecies(event , innerHTML){
    event.preventDefault;
    fetch(Link.animal_API).then(response => 
    {
        if (!response.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        return response.json();
    }
).then(json =>
{   return json.city;
}
).catch(error => {
    throw error;
})
}
document.querySelector("#genrateRandomSpecies").addEventListener("click", event => {fakemon_species.innerHTML = generateSpecies(event)});