

const persona = {

    nombre: 'Lionel',
    apellido: 'Cancellieri',
    edad: 27,
    direccion: {
        ciudad: 'New York',
        zip: 552541,
        lat: 556465,
        lng: 34.923241
    }
}

// console.table( {persona} );
const persona2 = { ...persona };

persona2.nombre = 'Gaston';

console.log(persona.nombre);
console.log(persona2.nombre);
