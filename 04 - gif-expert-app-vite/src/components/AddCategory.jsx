import React, { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return; 
        // setCategories( categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    

    return (

            <form onSubmit={ handleSubmit }>

                <input
                    type= 'text'
                    placeholder= 'Buscar gifs'
                    value= { inputValue }
                    // onChange = {(event) => handleInputChange(event) } ==== > se puede hacer asi o de la otra manera porque el primer argumento es igual primer argumento que se envia en la función
                    onChange= { handleInputChange }
    
                 />

            </form>

        
    )
}
