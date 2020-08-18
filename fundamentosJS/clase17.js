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

for (let index = 0; index < personas.length; index++) {
    let personita = personas[index];
    console.log(`${personita.nombre} mide ${personita.altura}mts`);
}