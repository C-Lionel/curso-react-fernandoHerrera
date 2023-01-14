import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( { defaultCategories = [] } ) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
        
    //     setCategories(cats => [...cats, 'lionel']);
    //     // setCategories([...categories, 'Lionel']);
    
    // }

    

    return (
        <>

        <h2 className='gifs-title'>gif-Expert-App</h2>
        <p className='gifs-p'>Busca tu Gif favorito</p>
        <AddCategory setCategories = { setCategories } />
        <hr/>

        {/* <button onClick={handleAdd} >
            Agregar
        </button> */}

        <ol>
                {

                    categories.map( category => {
                        return <GifGrid key={category} category={category} />
                    })

                }
        </ol>

    

        </>
    )
}

export default GifExpertApp
