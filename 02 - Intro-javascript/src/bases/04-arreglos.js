

// Todo: Nunca debemos de crear un array con esta sintaxis, salvo que queramos especificar cuantos valores
// Todo: Tendrá ese array, lo que no quiere decir que no se pueda seguir expandiendo con el .push();
const MiArray = new Array(100);
MiArray.push(1);


//Todo: Manera de crear un array

const arreglo = [1, 2, 3, 4];
let arreglo2 = [ ...arreglo, 5];
// Array.push(1);


//Todo: El metodo map() recibe un callback y nos regresa un nuevo arreglo.
const arreglo3 = arreglo2.map(elem => {
     return elem * 2;
})


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3)





// let cantElementArray = arreglo.length;

