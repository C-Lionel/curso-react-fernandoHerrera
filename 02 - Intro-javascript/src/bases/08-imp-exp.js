

import {heroes} from '../data/heroes';

// const getHeroeById = ( id ) => {

//     return heroes.find(( heroe ) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     })

// }


// const getHeroeById = ( id ) => {
//     return heroes.find((heroe) => heroe.id === id);
// }


const getHeroeById = ( id ) => heroes.find( ( heroe ) => heroe.id === id);


// console.log(getHeroeById(2));


const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'))
// console.log(getHeroesByOwner('DC'))

const HeroeFind = getHeroesByOwner('Marvel');

// for (const element in HeroeFind) {
//     console.log(HeroeFind[element].name)
//   }

  export {
    getHeroeById,
    getHeroesByOwner
  }