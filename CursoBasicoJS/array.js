let frutas = ["Manzana","Plátano","Sandia","Pera","Naranja","Fresa"]; // ! forma sintáxica literal

console.log(frutas);
/*
  ! push inserta al final,
  ! unshift inserta al inicio, 
  ! pop saca del final,
  ! shift saca del inicio
*/

let estudiantes = ["Miguel","Diego","Elsa","Ana","José"];

function saludarEstudiantes(alumno){
    console.log(`Hola, ${alumno}`);
}

for(let alumno of estudiantes){ //!for or, creo que es similiar a for each
    saludarEstudiantes(alumno);
}

while(estudiantes.length > 0){ //! otra forma de imprimir el arreglo, pero aquí estamos quitando elementos
    console.log(estudiantes);
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}