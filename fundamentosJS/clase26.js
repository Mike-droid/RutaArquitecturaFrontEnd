class Persona{
    constructor(nombre,apellido,altura) {
        this.nombre=nombre; //!atributo, parámetro
        this.apellido=apellido;
        this.altura=altura;
    }
    
    saludar(fn){
        let {nombre,apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre,apellido);
        }
    }

    soyAlto(){
        return this.altura >= 1.8;
    }

}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura) {
        super(nombre,apellido,altura);
    }

    saludar(fn){
        let {nombre,apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

//* ES BUENA PRÁCTICA Y RECOMENDABLE PONER TODOS LOS PROTOTIPOS PRIMERO 

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`No sabía que eres dev`);
    }
}
let miguel = new Desarrollador('Miguel','Reyes',1.72);

let katherine = new Persona('Katherine','Frausto',1.60);

let pedro = new Persona('Pedro','Reyes',1.80); 

miguel.saludar(responderSaludo);
katherine.saludar();
pedro.saludar();