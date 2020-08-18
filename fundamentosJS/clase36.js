var miguel = {
    nombre:'Miguel',
    edad: 21
}

function esMayorDeEdad(persona) {
    let mensaje;
    const MAYORIA_EDAD = 18
    if (persona.edad > MAYORIA_EDAD) {
        mensaje = 'Es mayor de edad';
    }else{
        mensaje = 'Es menor de edad';
    }

    console.log(mensaje)
}

//esMayorDeEdad(miguel)

for (let index = 0; index < 10; index++) {
    console.log(index)
}

console.log(`Terminó el for, el valor del index es ${index}`)