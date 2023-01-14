import '@testing-library/jest-dom'; // Importa los metodos del test
import { retornaArreglo } from '../../base/07-deses-arr';


describe('Pruebas en 07-deses-arr.js', () => {
    test('La función retornaArreglo debe de retornar un string y un número ', () => {
        
        // const testArray = ['ABC', 123];

        // const array = retornaArreglo()

        // expect(array).toEqual(testArray);

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe( 123 );
        expect(typeof numeros).toBe('number');




    })
    
})
