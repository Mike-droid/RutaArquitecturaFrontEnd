const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain:true}

const onPeopleResponse = function(person){
    console.log(`Hola, soy ${person.name}`);
}

function obtenerPersonaje(id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(URL , OPTS , onPeopleResponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

//*No sabemos en que orden llegarán los request