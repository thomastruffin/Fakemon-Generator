import Link from "./const"
function generateSpecies(event){
event.prenventDefault();    
    fetch(Link.animal_API).then(Response => 
    {
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
document.getElementById("genrateRandomSpecies").addEventListener("click", event => generateSpecies());