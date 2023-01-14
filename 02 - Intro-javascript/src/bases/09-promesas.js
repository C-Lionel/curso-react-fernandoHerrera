import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {

//         // resolve();

//         const heroe = getHeroeById(2);
//         // console.log(heroe)
//         resolve(heroe);
//         reject('No se pudo encontrar el héroe !!')

//     }, 2000)
// } );

// promesa.then( ( heroe ) => {
//     console.log('Heroe', heroe);
// } )

// .catch( (err) => {
//     throw Error (err)
// })


const getHeroeByIdAsync = ( id ) => {

        return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
            // 
    
            const heroe = getHeroeById( id );
            ( heroe ) ? resolve(heroe) : reject('No se pudo encontrar el héroe !!')
            
            // console.log(heroe)
            // console.log(heroe)
            // resolve(heroe);
            
    
        }, 2000)
    } );

}

getHeroeByIdAsync(2)
    // .then( (Heroe) => { 
    //     console.log(Heroe)
    // } )

    .then( console.log )
    
    .catch( ( err ) => {
        throw Error( err ); 
    })

