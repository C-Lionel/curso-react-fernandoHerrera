import '@testing-library/jest-dom'; // Importa los metodos del test
import { getImagen } from '../../base/11-async-await';
import heroes from '../../data/heroes';

describe('Pruebas con async-await y Fetch', () => {

    test('Debe de retornar el url de la imagen', async () => {
        
        const url = await getImagen();

        expect(url.includes('https://')).toBe( true );
    })
    
    
})
