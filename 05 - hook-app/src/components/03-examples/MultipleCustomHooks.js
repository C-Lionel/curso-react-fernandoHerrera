import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './main.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const {author, quote} = !!data && data[0]; // Si existe la dara entonces extrae de la data la posición 0 y si no existe que no siga ejecutando
    // console.log(author, quote)

    return (
        <div>
            <h1> Breaking Bad quotes </h1>
            <hr />

            {
                loading
                ?
                    (

                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                :
                    (

                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'> { quote } </p>
                            <footer className='blockquote-footer'> { author } </footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary' onClick={ increment }>
                Siguiente Quote
            </button>




        </div>
    )
}
