import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

     const { state, decrement, increment, reset } = useCounter();

    return (

        <>

            <h1> Counter With Hook: { state } </h1>
            <hr />

            <button onClick={ () => decrement(1) } className='btn'> - 1 </button>
            <button onClick={ reset } className='btn'> Reset </button>
            <button onClick={ () => increment(1) } className='btn'> + 1 </button>

        </>

    )

};
