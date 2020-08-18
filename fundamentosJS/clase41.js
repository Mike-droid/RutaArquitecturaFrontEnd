const miguel = {
    nombre: 'Miguel',
    edad: 21
}

//const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
    ...persona,
    edad : persona.edad + 1 //!Estamos creando un nuevo objeto en memoria
})