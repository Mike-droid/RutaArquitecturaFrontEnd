/*
!VENTAJAS - TRY CATCH, ES MÁS FÁCIL DE LEER
!DESVENTAJAS - TENEMOS QUE ESPERAR POR CADA UNO DE LOS LLAMADOS Y TAMBIÉN HAY QUE TRANSPILAR
 */

const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) =>{
    try {
        const data = await fetchData(url_api) //*Espera hasta que esta petición se cumpla
        const character = await fetchData(`${API}${data.results[0].id}`) //*También espera
        const origin = await fetchData(character.origin.url) //*También espera

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')
