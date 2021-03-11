import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    console.log(category);
    // const [images, setImages] = useState([])

    // // ngOnInit
    // useEffect(() => {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs));
    // }, [category])

    //ngOnChanges
    // const [state, setstate] = useState(initialState)
    const { data: images, loading } = useFetchGifs(category);


    // getGifs();

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
                        <p className="loading-text">Cargando ...</p>
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
