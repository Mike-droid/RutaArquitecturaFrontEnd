/*
!VENTAJAS DE CALLBACKS - FUNCIONA EN NAVEGADORES ANTIGUOS
!DESVENTAJAS - LA COMPOSICIÓN ES TOSCA, ENTRAMOS EN CALLBACK HELL
*/


//*Permite hacer peticiones a algún servidor en la nube.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true) //*param1 = el método, param2 = la url, param3 = si queremos que sea asíncrono
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                //*Estandar de node con callbacks, primer parametro error, segundo el resultado
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error(`Error: ${url_api}`)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

//*Vamos a realizar 3 llamadas a la api

//!Evita el callback hell, máximo 3 llamadas a la petición
//*Primero buscamos la lista de personajes
fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    //*results[0] es el primer personaje
    //*Buscamos el id del personaje
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        //*Por último buscamos su dimensión
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            //*Mostramos los resultados
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})