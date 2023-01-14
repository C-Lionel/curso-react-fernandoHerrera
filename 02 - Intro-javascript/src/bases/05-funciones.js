// Todo: Así no se realiza una función

function saludo ( nombre ) {
    return `Hola ${ nombre }`
}

// Todo: Así sí

const saludar = function ( nombre ) {
    return `Hola ${ nombre }`
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`
}

const saludar3 = nombre => `Hola ${nombre}`


console.log(saludar('Lionel'));
console.log(saludar2('Gastón'));
console.log(saludar3('corta'));

const getUser = () =>( {
    
    uid: 'ABC123',
    userName: 'El_Papi1502'
})

const user = getUser();

console.log(user)
// Todo: Retorna un objeto implicito

const getUsuarioActivo = ( nombre ) => {
    return ({
        uid: 'ABC567',
        userName: nombre
    })
}

const usuarioActivo = getUsuarioActivo('Lionel');

console.log(usuarioActivo);

