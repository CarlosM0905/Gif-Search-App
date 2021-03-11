
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ;
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Naruto']);
    // }
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-12">
                    <p className="title-app text-center"><span className="title-gif-text">Gif Expert</span> App <i className="bi bi-images"></i></p> 
                </div>
            </div>
            <AddCategory setCategories={setCategories} />
                {
                    categories.map(category => (
                            <GifGrid
                                key={category}
                                category={category}
                            >

                            </GifGrid>
                        ))
                }
        </div>
    );
}

export default GifExpertApp;