import '@testing-library/jest-dom'; // Importa los metodos del test
import { getUser, getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas en 05-funciones', () => {
    
    test('getUser Debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe de retornar un objeto ', () => {
        
        // const username = 'lionel';

        // const userTest = {
        //     uid: 'ABC567',
        //     username: 'lionel'
        // }

        // const user = getUsuarioActivo(username);

        // expect(user).toEqual(userTest);


        const nombre = 'Lionel';
        const user = getUsuarioActivo( nombre );

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })

    })
    
    
})
