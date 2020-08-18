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

async function obtenerPersonajes() {
    let ids = [1,2,3,4,5,6,7];

    let promesas = ids.map(id => obtenerPersonaje(id))

    try {
        let personajes = await Promise.all(promesas)
        console.table(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()