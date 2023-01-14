
const nombre = 'Lionel';
const apellido = 'Cancellieri'

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto);

const getSaludo = ( nombre ) => {
    return `Hola ${ nombre }`;
}

console.log(`Este es un texto: ${ getSaludo(apellido) }`)