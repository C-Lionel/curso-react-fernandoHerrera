

// Todo: Desestructuración o Asignación desestructurante

const persona = {

    nombre: 'Lionel',
    edad: 27,
    clave: 'Lio4124',
    rango: 'Programmer'
}

const useContext = ({nombre, edad, rango, clave}) => {
    
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng} = useContext(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios)
console.log(lat, lng)



