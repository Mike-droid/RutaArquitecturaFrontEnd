const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const OPTS = {crossDomain:true}

const onPeopleResponse = function(person){
    console.log(`Hola, soy ${person.name}`);
}

$.get(LUKE_URL , OPTS , onPeopleResponse);