let consola = prompt('¿Cuál es tu consola favorita? (PS4, XBOX ONE, Switch)');

switch (consola) {
    case 'PS4':
    case 'PlayStation 4':
    case 'ps4':
        console.log('Deberías probar God of War ;)');
        break;

    case 'XBOX ONE':
    case 'Xbox one':
    case 'Xbox One':
    case 'xbox one':
        console.log('Deberías probar Gran Turismo 5');
        break;

    case 'switch':
    case 'Switch':
        console.log('Zelda: Breath of the wild te encantará');
        break;

    default:
        console.log('Nombre de consola no válido');
        break;
}