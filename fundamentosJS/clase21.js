function Persona(nombre,apellido,altura) {
    this.nombre=nombre; //!atributo, parámetro
    this.apellido=apellido;
    this.altura=altura;
}

Persona.prototype.saludar = function () { //! Dentro del prototipo de persona, va a existir un atributo que 
                                            //!será una función
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

let miguel = new Persona('Miguel','Reyes',1.72);

miguel.saludar();

let katherine = new Persona('Katherine','Frausto',1.60);

katherine.saludar();

Persona.prototype.soyAlto = function () {
    if (this.altura>=1.80) {
        console.log(`${this.nombre} es una persona alta`);
    }
}

let pedro = new Persona('Pedro','Reyes',180);

pedro.soyAlto();