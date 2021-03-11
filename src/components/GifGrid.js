// IMPORTS
import React from 'react'
// HOOKS
import { useFetchGifs } from '../hooks/useFetchGifs';
// COMPONENTS
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            {category !== '' && <p className='category-name animate__animated animate__fadeIn'>{category}</p>}
            {loading &&
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <div className="trinity-rings-spinner">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            }
            <div className="row">
                {
                    images.map((img) =>
                        <GifGridItem key={img.id} {...img} />
                    )
                }
            </div>

        </>
    )
}

export default GifGrid
