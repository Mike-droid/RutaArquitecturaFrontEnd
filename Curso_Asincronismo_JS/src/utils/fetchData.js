//*Permite hacer peticiones a algún servidor en la nube.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = url_api => {
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true) //*param1 = el método, param2 = la url, param3 = si queremos que sea asíncrono
        xhttp.onreadystatechange = (() => {
        if (xhttp.readyState === 4) {
            xhttp.status === 200
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error('Error', url_api))
        }
    })
    xhttp.send()
    })
}

module.exports = fetchData