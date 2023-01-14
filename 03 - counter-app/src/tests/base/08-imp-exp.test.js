import '@testing-library/jest-dom'; // Importa los metodos del test
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('Debe de retornar un undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined);

    });

    test('Debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC'

        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter( h => h.owner === owner ); 

        expect(heroes).toEqual(heroeData);

    });

    test('Debe de retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel'

        // const heroeData = heroes.filter( (heroe) => heroe.owner === owner );

        const heroesData = getHeroesByOwner(owner)

        expect(heroesData.length).toBe(2)

    });
    
})
