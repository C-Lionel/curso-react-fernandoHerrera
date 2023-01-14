import '@testing-library/jest-dom'; // Importa los metodos del test
import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fetch', () => {

    test('Debe de traer 10 elementos', async () => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );
 
    });


    test('Si no enviamos las category debe de retornar un arreglo vacío', async () => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
 
    });
    
    
})
