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
    return document.getElementById("speciesname").innerHTML = speciesname;
}
).catch(error => {
    throw error;
})
}
document.getElementById("randomBtn").addEventListener("click", event => generateSpecies());