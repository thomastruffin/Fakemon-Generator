import Link from "./const.js"
function generateSpecies(event){
    event.preventDefault;
    console.log("entree fonction");
    fetch(Link.animal_API).then(response => 
    {
        console.log(response);
        if (!response.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        console.log(response.json());
        return response.json();
    }
).then(json =>
{   
    console.log(json);
    const speciesname = json.city;
    return document.getElementById("fakemon_species").innerHTML = speciesname;
}
).catch(error => {
    throw error;
})
}
document.querySelector("#genrateRandomSpecies").addEventListener("click", generateSpecies);