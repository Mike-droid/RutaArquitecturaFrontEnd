const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' 
    //* ['','1',''] <--- Estamos trayendo el elemento 1, el ID

    export default getHash