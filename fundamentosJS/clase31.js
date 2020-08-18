const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain:true}

function obtenerPersonaje(id , callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(URL , OPTS , callback).fail(() => {
        console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`);
    });
}

obtenerPersonaje(1 , function (personaje) {
    console.log(`Hola, soy ${personaje.name}`);
    
    obtenerPersonaje(2 , function (personaje) {
        console.log(`Hola, soy ${personaje.name}`);

        obtenerPersonaje(3 , function (personaje) {
            console.log(`Hola, soy ${personaje.name}`);

            obtenerPersonaje(4 , function (personaje) {
                console.log(`Hola, soy ${personaje.name}`);

                obtenerPersonaje(5 , function (personaje) {
                    console.log(`Hola, soy ${personaje.name}`);

                    obtenerPersonaje(6 , function (personaje) {
                        console.log(`Hola, soy ${personaje.name}`);

                        obtenerPersonaje(7 , function (personaje) {
                            console.log(`Hola, soy ${personaje.name}`);

                            obtenerPersonaje(8 , function (personaje) {
                                console.log(`Hola, soy ${personaje.name}`);
                            })
                        });
                    });
                });
            });
        });
    });    
});

//*Todo ese desmadre de arriba sirve para que se impriman los personajes en orden correcto ;)
// * Esto se conocer como callback hell