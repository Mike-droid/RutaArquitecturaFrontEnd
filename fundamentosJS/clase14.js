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

const PESO_GRAMOS = 0.3;

const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += PESO_GRAMOS;

const adelgazar = persona => persona.peso -= PESO_GRAMOS;

const comeMucho = () =>Math.random() < 0.3;

const realizaDeporte = () => Math.random() <0.4;

const META = miguel.peso - 3;

let dias = 0;

while (miguel.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(miguel);
    }

    if (realizaDeporte()) {
        adelgazar(miguel);
    }

    dias+=1;
}

console.log(`Pasaron ${dias} hasta que ${miguel.nombre} adelgazó 3kg`);

//!console.log(`Al final del año ${miguel.nombre} pesa ${miguel.peso.toFixed(1)}kg`); //! Así sólo tomará 1 decimal