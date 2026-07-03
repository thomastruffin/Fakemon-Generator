import {Link} from "./const.js"

function getMyth(){
    
}

function generateSpecies(event, innerHTML){
    event.preventDefault;
    fetch(Link.animal_API).then(response => 
    {
        if (!response.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        return response.json();
    }
).then(json =>{
    innerHTML.innerHTML = json.city;
    return json.city;

}
).catch(error => {
    throw error;
})
}

const fetchFunction = {
    getMyth : function(){},
    generateSpecies:  function(event, innerHTML){
    event.preventDefault;
    fetch(Link.animal_API).then(response => 
    {
        if (!response.ok) {
            throw new Error(`Statut de réponse : ${reponse.status}`);
        }
        return response.json();
    }
).then(json =>{
    innerHTML.innerHTML = json.city;
    return json.city;

}
).catch(error => {
    throw error;
})
}
}
export default fetchFunction