let miguel = {
    nombre : 'Miguel',
    apellido : 'Reyes',
    edad : 21,
    peso : 68
}

console.log(`Al inicio del año ${miguel.nombre} pesa ${miguel.peso}kg`);

/* function aumentarDePeso(persona) {
    return persona.peso += 200;
} */

const PESO_GRAMOS = 0.2;

const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += PESO_GRAMOS;

const adelgazar = persona => persona.peso -= PESO_GRAMOS;

for (let index = 1; index <= DIAS_DEL_ANO; index++) {
    let random = Math.random();
    
    if (random<0.25) {
        aumentarDePeso(miguel);
    }else if(random >= 0.25 && random <= 0.50){
        adelgazar(miguel);
    }
}

console.log(`Al final del año ${miguel.nombre} pesa ${miguel.peso.toFixed(1)}kg`); //! Así sólo tomará 1 decimal