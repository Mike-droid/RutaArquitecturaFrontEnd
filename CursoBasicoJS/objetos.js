let miAuto = {
    marca : "Nissan",
    modelo : "Sentra",
    anio : 2020,
    detalleDelAuto : function(){
        console.log(`Auto ${this.modelo} ${this.anio}`); //!this hace referencia 'miAuto'
    }
};