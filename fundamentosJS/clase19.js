let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
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