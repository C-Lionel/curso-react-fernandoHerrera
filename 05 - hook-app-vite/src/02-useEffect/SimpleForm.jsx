import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Lionel',
        email: 'lio2014vt@gmail.com'
    });

    const onInputChange = ( {target} ) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value // toma el valor del name que puede ser username o email y le agrega el value
        });

    }

    const { username, email } = formState;

    useEffect( () => {

    }, [] );

    useEffect( () => {

    }, [ formState ] );

    useEffect( () => {

    }, [ email ] );


    return (
        <>
            <h1> Simple Form </h1>
            <hr />

            <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username" 
            value={username}
            onChange={ onInputChange }
            />

            <input 
            type="email"
            className="form-control mt-2"
            placeholder="lio2014vt@gmail.com"
            name="email" 
            value={email}
            onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message />
            }

        </>
    )
}
