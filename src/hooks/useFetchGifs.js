import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    const [gifData, setGifData] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
        .then(imgs => {
            setTimeout(() => {
                setGifData({
                    data: imgs,
                    loading: false
                })
            }, 2000);
        })
    }, 
    [category])

    return gifData;
}
