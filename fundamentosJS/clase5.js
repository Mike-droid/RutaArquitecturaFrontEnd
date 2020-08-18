var miguel = {
    nombre:'Miguel',
    apellido:'Reyes',
    edad:21
}

var dario = {
    nombre:'Darío',
    apellido:'Gomez',
    edad:23
}

function imprimirNombreMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

//!Mandamos con parametros la función para NO modificar el valor de la variable, 
//!así evitamos el sideEfect
imprimirNombreMayusculas(miguel);
imprimirNombreMayusculas(dario);
imprimirNombreMayusculas({nombre : 'José'});