
// import React, {Fragment} from 'react';
import React, {useState} from 'react';
import PropTypes from 'prop-types';


// Todo: Funcional Components

const CounterApp = ({value = 10}) => {


    //Hook

    const [counter, setCounter] = useState(value);



    // handleAdd

    const handleAdd = () => {
        // setCounter((c) => c + 1);
        setCounter(counter + 1);
    }

    // handleReset

    const handleReset = () => {
        // setCounter((c) => c + 1);
        setCounter(value);
    }
    
    // handleMinCounter

    const handleMinCounter = () => {
        // setCounter((c) => c + 1);
        setCounter(counter - 1);
    }
    
    return (
        <>
            <h1> CounterApp </h1>
            <h2 id='contador'> {counter} </h2>

            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleMinCounter}> -1 </button>

            
        </>

    );


}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;

