import Link from "./const"
function generateSpecies(event){
    event.preventDefault;
    console.log(event);
    return fetch(Link.animal_API).then(Response => 
    {
        console.log(Response);
        if (!reponse.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        return Response.json;
    }
).then(json =>
{
    const speciesname = json.city;
    return document.getElementById("fakemon_species").innerHTML = speciesname;
}
).catch(error => {
    throw error;
})
}
document.getElementById("genrateRandomSpecies").addEventListener("click", event => generateSpecies);