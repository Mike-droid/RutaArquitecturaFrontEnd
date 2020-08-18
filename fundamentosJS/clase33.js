const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = {crossDomain:true}

function obtenerPersonaje(id) {

    return new Promise((resolve,reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.get(URL,OPTS, function (data) {
            resolve(data) //!Esta función no se va a llamar hasta que la función(data) se ejecute
        })
        .fail(() => {
            reject(id)
        });
    });
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(6)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(7)
    })
    .then(personaje => {
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(8)
    })
    .catch(onError)

//* Todo eso de arriba es síncrono y lo devuelve en el orden que se muestra

/* 
for (let index = 1; index < 10; index++) {
    obtenerPersonaje(index)
    .then(function (personaje) {
        console.log(`El personaje es ${personaje.name}`);
        return obtenerPersonaje(index+1);
    }).catch(onError)
} */
//* Esto de arriba funciona, sí, pero no sabemos en qué orden saldrán los personajes