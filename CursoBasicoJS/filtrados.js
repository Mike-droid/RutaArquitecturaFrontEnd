let productos = [
    {nombre: "bici",costo: 3000},
    {nombre: "TV", costo:2500},
    {nombre:"PS4",costo:7000},
    {nombre:"libro",costo:50},
    {nombre:"laptop",costo:5000},
    {nombre:"teclado",costo:300}
];

let filtrados = productos.filter(function(articulo){
    return articulo.costo<=500; //!en este caso sólo regresará libro y teclado
});