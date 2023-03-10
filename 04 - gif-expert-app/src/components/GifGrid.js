import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category )
    //     .then( imgs => setImages(imgs) )
    // }, [ category ])

    // getGifs();

    return (
        <>
        <h3 className='category-h3 animate__animated animate__bounceIn'> {category} </h3>

        { loading && <p className='animate__animated animate__flash'> Loading... </p>}

        <div className='card-grid'>
            
                {
                    images.map( img => {
                        return <GifGridItem
                         key= {img.id}                        
                         { ...img }
                          />
                    })
                }
            
        </div>
        </>
    )
}

GifGrid.propTypes = {

    category: PropTypes.string.isRequired
}
