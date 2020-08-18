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
    .then(function (personaje) {
        console.log(`El personaje es ${personaje.name}`)
})
    .catch(onError)