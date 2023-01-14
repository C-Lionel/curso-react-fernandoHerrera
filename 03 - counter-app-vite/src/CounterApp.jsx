import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {

        setCounter(counter + 1 );

    }

    const handleReset = () => {
        setCounter( 0 )
    }

    const handleSubtract = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div className='lio1'>

            <h1>CounterApp</h1>
            <h2> { counter } </h2>
                
            </div>

            <div className='lio2'>

            <button onClick={ handleAdd }>
                +1
            </button>

       
            <button  onClick={handleReset}>
                Reset
            </button>

            <button  onClick={handleSubtract}>
                - 1
            </button>



            </div>

            





        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
