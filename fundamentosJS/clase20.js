let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadLibros:100
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadLibros:98
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadLibros:204
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadLibros:76
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadLibros:200
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadLibros:213
}

let personas = [sacha, alan, martin, dario, vicky, paula];

const esAlta = ({altura}) => altura > 1.8;

//!Para filtrar siempre necesitamos 2 cosas, un array y una condidición

let personasAltas = personas.filter(esAlta); //! filter nos va a regresar un nuevo array

/* let personasAltas = personas.filter(function (personita) {
    return personita.altura > 1.8;
}); */

console.log(personasAltas);

//* Separación de funciones -----------------------------------------------------------------------------

const esBaja = ({altura}) => altura < 1.7;

let personasBajas = personas.filter(esBaja);

console.log(personasBajas);

//* Separación de funciones -----------------------------------------------------------------------------

const pasarAlturaACms = personita => ({
        ...personita,
        altura: personita.altura * 100
    //!Al hacer este return estamos creando un nuevo objeto y así no modificamos el array original
});

let personasCms = personas.map(pasarAlturaACms);

console.table(personasCms);

//* Separación de funciones -----------------------------------------------------------------------------

const reducir = (acumulador,{cantidadLibros}) => acumulador + cantidadLibros;

let totalLibros = personas.reduce(reducir,0); //! función y valor inicial

console.log(`El total de libros es de ${totalLibros}`);