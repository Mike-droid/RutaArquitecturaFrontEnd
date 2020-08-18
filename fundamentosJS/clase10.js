let miguel = {
    nombre:'Miguel',
    apellido:'Reyes',
    edad:21,
    ingeniero:false,
    cocinero:false,
    atleta:true,
    reptil:true
}

let jose = {
    nombre: 'Jose',
    edad:15
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `);
    
    if (persona.atleta) {
        console.log('Atleta');
    }

    if (persona.cocinero) {
        console.log('Cocinero');
    }else{
        console.log('No es cocinero');
    }

    if (persona.reptil) {
        console.log('Reptil');
    }
}

//imprimirProfesiones(miguel);

const MAYORIA_DE_EDAD = 18;

/*
    const esMayorDeEdad = function (persona){
        return persona.edad >= MAYORIA_DE_EDAD;
    }
*/

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD; //!arrow function, se asume que después de la fecha, será un return
//!Esto de arriba parece que nos regreasrá true o false y se evaluará en la función 'ImprimeSiEsMayorEdad'

function ImprimeSiEsMayorEdad(persona) {
    /* if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad (tiene 18 años o más)`);
    } else {
        console.log(`${persona.nombre} es menor de edad (tiene menos de 18 años)`);
    } */ 

    esMayorDeEdad(persona) ? console.log(`${persona.nombre} es mayor de edad`) : console.log(`${persona.nombre} es menor de edad`);
}

/*function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('Acceso denegado');
    }else{
        console.log('Acceso concedido');
    }
}*/

let permitirAcceso = ({edad}) => !esMayorDeEdad({edad}) ? console.log('Acceso denegado') : console.log('Acceso concedido');
//! La variable guarda el valor de la función 'esMayorDeEdad'