import Link from "./const.js"

const fakemon_species = document.getElementById("fakemon_species").innerHTML;
function generateSpecies(event){
    event.preventDefault;
    fetch(Link.animal_API).then(response => 
    {
        if (!response.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        return response.json();
    }
).then(json =>
{   
    return json.city;
}
).catch(error => {
    throw error;
})
}
document.querySelector("#genrateRandomSpecies").addEventListener("click", event => {fakemon_species = generateSpecies(event)});