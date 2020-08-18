let productos = [
    {nombre: "bici",costo: 3000},
    {nombre: "TV", costo:2500},
    {nombre:"PS4",costo:7000},
    {nombre:"libro",costo:50},
    {nombre:"laptop",costo:5000},
    {nombre:"teclado",costo:300}
];

let nombreProducto = productos.map(function(producto){
    return producto.nombre;
});