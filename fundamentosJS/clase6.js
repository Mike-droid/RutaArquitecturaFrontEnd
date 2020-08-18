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

var jose = {
    nombre:'Jose',
    edad:31
}

function imprimirNombreMayusculas(persona) {
    //!var nombre = persona.nombre; esto es equivalente a la línea de abajo
    var {nombre} = persona;

    console.log(nombre.toUpperCase());
}

//!Mandamos con parametros la función para NO modificar el valor de la variable, 
//!así evitamos el sideEfect
imprimirNombreMayusculas(miguel);
imprimirNombreMayusculas(dario);
//imprimirNombreMayusculas({nombre : 'José'});

function imprimeNombreYEdad(persona) {
    var {nombre} = persona;
    var {edad} = persona;

    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimeNombreYEdad(miguel);
imprimeNombreYEdad(dario);
imprimeNombreYEdad(jose);