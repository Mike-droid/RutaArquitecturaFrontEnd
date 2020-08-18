const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain:true}

function obtenerPersonaje(id , callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(URL , OPTS , function(person){
        console.log(`Hola, soy ${person.name}`);

        if (callback) {
            callback();
        }
    });
}

obtenerPersonaje(1 , function () {
    obtenerPersonaje(2 , function () {
        obtenerPersonaje(3 , function () {
            obtenerPersonaje(4 , function () {
                obtenerPersonaje(5 , function () {
                    obtenerPersonaje(6 , function () {
                        obtenerPersonaje(7 , function () {
                            
                        });
                    });
                });
            });
        });
    });    
});

//*Todo ese desmadre de arriba sirve para que se impriman los personajes en orden correcto ;)
// * Esto se conocer como callback hell