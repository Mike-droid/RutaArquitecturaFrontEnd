const miguel = {
    nombre:'Miguel',
    apellido:'Reyes',
    edad:21
}

const yesika = {
    nombre:'Yesika'
}

function saludar(saludo = 'Qué onda') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

/* const saludarMiguel = saludar.bind(miguel)
const saludarYesika = saludar.bind(yesika) */

/* setTimeout(saludar.bind(miguel , 'Wasap') , 1000) */

//! bind (quien va a ser this , demás parametros xddd)

//! bind no ejecuta la función, nos regresa una nueva función con el texto cambiado

//!saludar.call(miguel , 'Hola wey') saludar llama en ese momento a la función y la ejecuta

saludar.apply(miguel , ['Hola wey:D'])